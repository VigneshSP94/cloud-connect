# Written by Vignesh SP - vickycena94@outlook.com
# Project Cloud-Connect

import boto3
import sqlite3
import views
from views import db_conn


class DatabaseOPS:

    def __init__(self):
        pass

    def credentials(self):
        """
        This function gets the AWS account details from the database
        to use with the Aws class.
        :return:
        """
        conn = db_conn()
        data = conn.execute('SELECT * FROM AWS_ACCOUNT')
        for i in data:
            return i[2], i[1], i[3], i[4]

    def subnets_db_get(self):
        """
        This function is to retrieve the subnet_ids from the db
        so we can feed it to the get_instances function to get
        instances from the specific subnets
        :return:
        """
        conn = db_conn()
        return conn.execute('SELECT subnet_id from SUBNET')


class Aws:

    def __init__(self, aws_key, aws_id, aws_reg, end_pt_url):
        self.aws_key = aws_key
        self.aws_id = aws_id
        self.aws_reg = aws_reg
        self.end_pt_url = end_pt_url

    def session_to_aws(self):
        # this gets the instances from the given aws account.
        vpcc = boto3.session.Session()
        return vpcc.resource(service_name='ec2', use_ssl=True, verify=False, aws_access_key_id=self.aws_id,
                             aws_secret_access_key=self.aws_key,
                             region_name=self.aws_reg, endpoint_url=self.end_pt_url)

    def client(self):
        client = boto3.client('ec2', use_ssl=True, verify=False, aws_access_key_id=self.aws_id,
                              aws_secret_access_key=self.aws_key,
                              region_name=self.aws_reg, endpoint_url=self.end_pt_url)
        return client


    def get_subnets(self):
        session = self.session_to_aws()
        for subnet in session.subnets.all():
            print(subnet.cidr_block)


    def get_instances(self, subnet_id):
        session = self.session_to_aws()
        something = session.Subnet(subnet_id)
        instance = something.instances.filter(Filters=[{
            'Name': 'instance-state-name',
            'Values': ['running', 'stopped']}])
        for i in instance:
            print(i.instance_id)


    def instance_control(self, instance_id, state):
        """
        This function is responsible for managing instance operations
        like shutting down, rebooting, turn on or terminate.
        :param instance_id: instance identifier
        :param state: operation to perform, i.e, turn off or on.
        :return: return idk
        """
        session = self.client()
        try:
            if state == 'stop':
                session.stop_instances(
                    InstanceIds=instance_id)
                print("Instance stopped successfully")
        except Exception as e:
            print(e)

        try:
            if state == 'start':
                session.start_instances(
                    InstanceIds=instance_id)
                print("Instance started successfully")
        except Exception as e:
            print(e)
        try:
            if state == 'reboot':
                session.reboot_instances(
                    InstanceIds=instance_id)
                print("Initiated reboot")
        except Exception as e:
            print(e)
        try:
            if state == 'terminate':
                session.terminate_instances(
                    InstanceIds=instance_id
                )
        except Exception as e:
            print(e)


def refresh_accs(aws_key, aws_id, aws_reg, end_pt_url, acc_id):
    """
    This function is to probe the AWS accounts periodically and propagate the
    changes from the account to our application's database.
    This function will run periodically also on users request.
    :param aws_key: this is aws key
    :param aws_id: this is the aws id
    :param aws_reg: this is region
    :param end_pt_url: this is url of the endpoint, differs for every region
    :param acc_id: some bullshit.
    :return: returns 'done' (for now) if successful, returns exception if fuction
    fails to update.
    """
    aws = Aws(aws_key, aws_id, aws_reg, end_pt_url)
    session = aws.session_to_aws()
    conn = db_conn()
    subnet_position = ["subnet_id", "network_name", "vpc_id", "account_id"]
    instance_position = ["private_ip_address", "instance_type", "instance_id",
                         "public_ip_address", "private_dns_name", "platform",
                         "subnet_id", "status", "vpc_id", "account_id"]
    instances_from_session=[]

    subnet_Ids_from_session = []
    subnets_from_database = []
    fetchit = conn.execute('select subnet_id from subnet where account_id=?', (str(acc_id)))
    #print(fetchit.fetchall())
    """
    for i in fetchit:
        subnets_from_database.append(i[0])
    print(subnets_from_database)
    """

    for subnet in session.subnets.all():
        subnet_Ids_from_session.append(subnet.subnet_id)

        # This var stores the subnet attributes.
        subnet_objs_from_session = [subnet.subnet_id, subnet.cidr_block, subnet.vpc_id, acc_id]
        #print(subnet_objs_from_session)

        # This checks if the subnet from the session exists in the database.
        check_subnet = conn.execute("""SELECT(EXISTS(SELECT * FROM SUBNET where subnet_id=?))""",
                                    (subnet.subnet_id,)).fetchall()

        """
         If it prints 1 the subnet do exist in the db, 0 it doesn't.
         print(check_subnet)
        """
        
        """
         If the subnet exists in the database, we compare all the attributes of the subnet
         between the session and the database, then write the attribute from the session to db
         if something changed in aws's end.
        """
        
        if check_subnet[0][0] == 1:
            check_objects = conn.execute("""SELECT * FROM SUBNET where subnet_id=?""",
                                         (subnet.subnet_id,)).fetchall()[0]

            for number in range(len(subnet_objs_from_session)):

                if subnet_objs_from_session[number] != check_objects[number+1]:
                    conn.execute('UPDATE SUBNET SET ' + str(subnet_position[number]) + " =?",
                                 (subnet_objs_from_session[number],))
                    conn.commit()

                   
        # If the subnet doesn't exist, just write it to the database.
        elif check_subnet[0][0] == 0:
            conn.execute("INSERT INTO SUBNET(subnet_id, network_name, vpc_id, account_id) values(?,?,?,?)",
                         (subnet.subnet_id, subnet.cidr_block, subnet.vpc_id, acc_id,))
            conn.commit()
            print("inserting " +subnet.subnet_id)
            

        instances = subnet.instances.filter(Filters=[{
            'Name': 'instance-state-name',
            'Values': ['running', 'stopped']}])


        for instance in instances:
            instances_from_session.append(instance.instance_id)
            instance_sess_objs = [instance.private_ip_address, instance.instance_type, instance.instance_id,
                                  instance.public_ip_address, instance.private_dns_name, instance.platform,
                                  instance.subnet_id, instance.state['Name'], instance.vpc_id, (acc_id)]
            
            
            check_instance = conn.execute("SELECT(EXISTS(SELECT * FROM NETWORK_DETAILS where instance_id=?))",
                                          (instance.instance_id,)).fetchall()[0][0]
            
            if check_instance == 1:
                instance_sess_objs = instance_sess_objs[:-1]
                db_instance_data = conn.execute("""SELECT * FROM NETWORK_DETAILS where instance_id=?""",
                                                (instance.instance_id,)).fetchall()[0]
                

                for number in range(len(instance_sess_objs)):
                    if str(instance_sess_objs[number]) != str(db_instance_data[number]):
                        conn.execute('UPDATE NETWORK_DETAILS SET ' + str(instance_position[number]) + ' =?',
                                     (str(instance_sess_objs[number]),))
                        print("Changed " + str(db_instance_data[number]) + " to " + str(
                            instance_sess_objs[number]) + "number = " + str(number))
                        conn.commit()

            
            elif check_instance == 0:
                conn.execute(
                    'INSERT INTO NETWORK_DETAILS(private_ip_address, instance_type, instance_id, public_ip_address, private_dns_name, platform, subnet_id, status, vpc_id, account_id) values(?,?,?,?,?,?,?,?,?,?)',
                    (instance.private_ip_address, instance.instance_type, instance.instance_id,
                     instance.public_ip_address, instance.private_dns_name, instance.platform,
                     instance.subnet_id, instance.state['Name'], instance.vpc_id, acc_id))
                conn.commit()


    def remove_unavailable_instances(sess_ins):
        dbdata = conn.execute("select instance_id from network_details").fetchall()
        instances_from_db=[]
        print(dbdata)
        # unavailable_ins=[]
        print(sess_ins)
        for i in dbdata:
            instances_from_db.append(i[0])
        print(instances_from_db)
        for i in sess_ins:
            instances_from_db.remove(i)
        for i in instances_from_db:
            conn.execute("delete from network_details where instance_id=?", (str(i),))
            print("removed unavailable instance "+str(i)+" from the database")
            conn.commit()

    
    def remove_unavailable_subnets(sess_subs):
        dbdata = conn.execute("select subnet_id from subnet").fetchall()
        subnets_from_db=[]
        # unavailable_subs=[]
        #print(sess_ins)
        for i in dbdata:
            subnets_from_db.append(i[0])
        for i in sess_subs:
            subnets_from_db.remove(i)
        for i in subnets_from_db:
            conn.execute("delete from subnet where subnet_id=?", (str(i),))
            print("removed unavailable subnet "+str(i)+" from the database")
            conn.commit()

                            
    remove_unavailable_instances(instances_from_session)
    remove_unavailable_subnets(subnet_Ids_from_session)
            

    conn.close()