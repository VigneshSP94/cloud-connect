# cloud-connect
A centralized EC2 management system for multiple AWS accounts.

I have come across some scenarios where admins will have to manage EC2 instances from multiple AWS account. Using this application, you jusy need to add the AWSID and Secret key to the system, the system will probe the accounts periodically and represent instances from all accounts in a HTML table, from there you can turn on/off/reboot/terminate the instances. No need to login to separate accounts.
