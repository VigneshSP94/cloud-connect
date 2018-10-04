# Written by Vignesh SP - vickycena94@outlook.com
# Project Cloud-Connect

import sqlite3

database = sqlite3.connect('summadb')

conn = database.cursor()

conn.execute('''CREATE TABLE AWS_ACCOUNT( account_id INTEGER PRIMARY KEY, aws_id TEXT, aws_key TEXT, aws_reg TEXT,
end_pt_url TEXT, state TINYINT, account_name)''')
conn.execute('''CREATE TABLE SUBNET(network_id INTEGER PRIMARY KEY, subnet_id TEXT, 
network_name TEXT, vpc_id TEXT, account_id TEXT, FOREIGN KEY(account_id) REFERENCES AWS_ACCOUNT(account_id) )''')

conn.execute('''CREATE TABLE NETWORK_DETAILS(private_ip_address TEXT, instance_type INTEGER, instance_id TEXT PRIMARY KEY, public_ip_address TEXT, private_dns_name TINYINT,
 platform TEXT, subnet_id TEXT, status TEXT, vpc_id TEXT, account_id TEXT, FOREIGN KEY(subnet_id) REFERENCES SUBNET(subnet_id))''')

conn.execute('''CREATE TABLE USERS(username TEXT, password TEXT, email TEXT PRIMARY KEY, position)''')
conn.execute('''INSERT INTO USERS(email, username, password) values("admin@cc.com", "admin", "123456")''')

database.commit()
conn.close()



