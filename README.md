# cloud-connect
A centralized EC2 management system for multiple AWS accounts.

I have come across some scenarios where admins will have to manage EC2 instances from multiple AWS account. Using this application, you jusy need to add the AWSID and Secret key to the system, the system will probe the accounts periodically and represent instances from all accounts in a HTML table, from there you can turn on/off/reboot/terminate the instances. No need to login to separate accounts.

Setup - 

Run db.py script, it will create the database with a user to login.

Run real_scheduler script in the backend. ( This script will scan all the AWS accounts in the database and fetches the changes in the account and writes to the application's database)


