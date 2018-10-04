# Written by Vignesh SP - vickycena94@outlook.com
# Project Cloud-Connect

from flask import Flask, render_template, redirect, jsonify, session, sessions, request
import sqlite3
import controls
import time
from flask_restful import Api, Resource
from flask_cors import CORS
import jwt
import os
from functools import wraps
from werkzeug.security import generate_password_hash, check_password_hash


secret = "yoyosoisososoyoyosoi"

def db_conn():
    return sqlite3.connect('summadb')


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# conn = db_conn()

"""
This wrapper function checks every request for access token before passing it to the AWS functions.
"""

def token_validator(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        Token = None
        if 'x-access-token' in request.headers:
            Token = request.headers['x-access-token']
            try:
                data = jwt.decode(Token, secret)
                user_in_token = data['userid']
                if int(time.time()) > data['expiry']:
                    raise Exception("Token Expired")
            except:
                return jsonify({"message":"Token is Invalid"}), 401
            return f( *args, **kwargs)
        else:
            return jsonify({"message":"no access found"}), 401

    return decorated


@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        content = request.get_json()
        email=content['email']
        password = content['password']
        conn = db_conn()
        try:
            user_check = conn.execute('''select password from users where email=?''',(email,)).fetchall()[0]
        except:
            return jsonify({"message":"Username/Password is incorrect1"})

        if check_password_hash(user_check[0],password) == True:
                token = jwt.encode({"userid":user_check[0], "expiry":int(time.time())+84600}, secret, algorithm="HS256")
                return jsonify({"cctoken":token.decode('UTF-8')})
        else:
            return jsonify({"message":"Username/Password is incorrect"})



@app.route('/add_user', methods=['POST'])
@token_validator
def add_user():
    content = request.get_json()
    username = content['username']
    password = generate_password_hash(content['password'])
    email = content['email']
    conn = db_conn()
    try:
        conn.execute('INSERT INTO USERS(username, password, email) values(?,?,?)',(username, password,email))
        conn.commit()
        conn.close()
        return "Action Successful"
    except Exception as e:
        return e
        


@app.route('/edit_user', methods=['POST'])
@token_validator
def edit_user():
    content = request.get_json()
    username = content['Username']
    password = content['Password']
    email = content['Email']
    conn = db_conn()
    check_existence = conn.execute("""SELECT(EXISTS(SELECT * FROM USERS where email=?))""",
                                    (email,)).fetchall()
    if check_existence[0][0] == 1:
        try:
            conn.execute('UPDATE USERS SET email=?, username=?, password=? where email=?',
                        (email, username, password, email,))
            conn.commit()
            conn.close()
            return "OK"
        except Exception as e:
            return str(e)
    else:
        return jsonify({"error":"User does not exist"})



@app.route('/get_users', methods=['GET'])
@token_validator
def get_user():
    conn = db_conn()
    data = conn.execute('SELECT * FROM USERS').fetchall()
    jdata = []
    for i in data:
        datadict = {"Username": i[0],
                    "Password": i[1],
                    "Email": i[2]}
        jdata.append(datadict)
    return jsonify(jdata)


@app.route('/add_aws_acc', methods=['POST', 'GET'])
@token_validator
def add_aws_account():
    endpoints = {"us-east-2":"https://ec2.us-east-2.amazonaws.com",
                 "us-east-1":"https://ec2.us-east-1.amazonaws.com",
                 "us-west-1": "https://ec2.us-west-1.amazonaws.com",
                 "us-west-2":"https://ec2.us-west-2.amazonaws.com",
                 "ap-south-1":"https://ec2.ap-south-1.amazonaws.com",
                 "ap-northeast-3":"https://ec2.ap-northeast-3.amazonaws.com",
                 "ap-northeast-2":"https://ec2.ap-northeast-2.amazonaws.com",
                 "ap-southeast-1":"https://ec2.ap-southeast-1.amazonaws.com",
                 "ap-southeast-2":"https://ec2.ap-southeast-2.amazonaws.com",
                 "ap-northeast-1":"https://ec2.ap-northeast-1.amazonaws.com",
                 "ca-central-1": "https://ec2.ca-central-1.amazonaws.com",
                 "eu-central-1": "https://ec2.eu-central-1.amazonaws.com",
                 "eu-west-1": "https://ec2.eu-west-1.amazonaws.com",
                 "eu-west-2": "https://ec2.eu-west-2.amazonaws.com",
                 "eu-west-3": "https://ec2.eu-west-3.amazonaws.com",
                 "sa-east-1": "https://ec2.sa-east-1.amazonaws.com"}
                 
    if request.method == 'GET':
        return render_template('account_add.html')
    if request.method == 'POST':
        content = request.get_json()
        aws_id = content['AWS_ID']
        aws_key = content['AWS_KEY']
        aws_reg = content['Region']
        account_name = content['Account_Name']
        end_pt_url = endpoints[content['Region']]
        conn = db_conn()
        try:
            conn.execute(
                'INSERT INTO AWS_ACCOUNT(aws_id, aws_key, aws_reg, account_name, end_pt_url, state ) values(?,?,?,?,?,?)',
                (aws_id, aws_key, aws_reg, account_name, end_pt_url, '1'))
            conn.commit()
            conn.close()

            return 'Ok !'
        except Exception as e:
            return e


@app.route('/networks', methods=['GET'])
@token_validator
def networks():
    #if user_in_token == 'summa':
    conn = db_conn()
    data = conn.execute('SELECT * FROM SUBNET')
    data = data.fetchall()
    print(data)
    jdata = []
    for j in data:
        acc_name = conn.execute('SELECT account_name from AWS_ACCOUNT where account_id=?', (j[4],))
        acc_name = acc_name.fetchall()
        datadict = {"SNO": j[0],
                    "Subnet ID": j[1],
                    "Network": j[2],
                    "VPC ID": j[3],
                    "Account No": j[4],
                    "Account Name": acc_name}
        jdata.append(datadict)
    return jsonify(jdata)


@app.route('/instances', methods=['GET'])
@token_validator
def instances():
    conn = db_conn()
    data = conn.execute('SELECT * FROM NETWORK_DETAILS')
    data = data.fetchall()
    jdata = []
    for i in data:
        accountname = conn.execute('select account_name from AWS_ACCOUNT where account_id=?',(i[9])).fetchone()
        datadict = {"IP": i[0],
                    "Instance Type": i[1],
                    "Instance_ID": i[2],
                    "Public IP": i[3],
                    "Private DNS": i[4],
                    "Subnet ID": i[6],
                    "Status": i[7],
                    "Account_Name": accountname[0]}
        jdata.append(datadict)
    return jsonify(jdata)


@app.route('/networks/<subnet>', methods=['GET'])
@token_validator
def network_instances(subnet):
    conn = db_conn()
    data = conn.execute('select * from NETWORK_DETAILS where subnet_id = ?', (str(subnet),))
    data = data.fetchall()
    jdata = []
    for i in data:
        datadict = {"IP": i[0],
                    "MAC": i[1],
                    "Instance ID": i[2],
                    "Status": i[3],
                    "Public IP": i[4],
                    "DNS Name": i[6],
                    "Subnet ID": i[9]}
        jdata.append(datadict)
    return jsonify(jdata)


@app.route('/accounts', methods=['GET', 'POST'])
@token_validator
def accs():
    conn = db_conn()
    data = conn.execute('select account_name, account_id, aws_reg, aws_id, aws_key from AWS_ACCOUNT')
    data = data.fetchall()
    jdata = []
    for i in data:
        print(i)
        datadict = {"Account_Name": i[0],
                    "Account_ID": i[1],
                    "Region": i[2],
                    "AWS_ID": i[3],
                    "AWS_KEY": i[4]}
        jdata.append(datadict)
    return jsonify(jdata)


@app.route('/accounts/resources', methods=['GET'])
@token_validator
def acc_resources():
    conn = db_conn()
    data = conn.execute()


@app.route('/accounts/<id>', methods=['GET'])
@token_validator
def acc_networks(id):
    conn = db_conn()
    data = conn.execute('SELECT * from SUBNET where ACCOUNT_ID = ?', (str(id),))
    data = data.fetchall()
    jdata = []
    for j in data:
        datadict = {"SNO": j[0],
                    "Subnet ID": j[1],
                    "Network": j[2],
                    "VPC ID": j[3],
                    "Account No": j[4]}
        jdata.append(datadict)
    return jsonify({"subnets": jdata})


@app.route('/instances/control', methods=['POST'])
@token_validator
def instance_controls():
    if request.method == 'POST':
        content = request.get_json()
        instance_id = content['instance_id']
        action = content['action']
        conn = db_conn()
        no_of_accs = conn.execute('SELECT account_id FROM AWS_ACCOUNT').fetchall()
        account_IDS = dict()
        for i in no_of_accs:
          account_IDS[i[0]]=[]
        
        for i in instance_id:
          credentials = conn.execute('SELECT account_id from NETWORK_DETAILS where instance_id=?', (i,)).fetchall()[0]
          for key in account_IDS:
            if key == int(credentials[0]):
              account_IDS[key].append(i)
              
        for key in account_IDS:
          instance_list = account_IDS[key][::]
          
          credentials = conn.execute('SELECT * FROM AWS_ACCOUNT where account_id=?', (str(key))).fetchall()[0]
          aws = controls.Aws(credentials[2], credentials[1], credentials[3], credentials[4])
          try:
              #aws.instance_control(str(instance_list).replace("'",'').replace('[','').replace(']',''), action)
              aws.instance_control(instance_list[:], action)
              print("action successful")
          except Exception as e:
              print(e)
        return "Action successful"
        
            

@app.route('/accounts/refresh', methods=["POST"])
@token_validator
def acc_refresh():
    if request.method == "POST":
        content = request.get_json()
        acc_id = content['account_id']
        conn = db_conn()
        acc_details = conn.execute("""SELECT * FROM AWS_ACCOUNT where account_id=?""", (acc_id,)).fetchall()[0]
        # acc_details = acc_details.fetchall
        just = controls.refresh_accs(acc_details[2], acc_details[1], acc_details[3], acc_details[4], acc_id)
        return str(just)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=80)
