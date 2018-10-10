# cloud-connect

## A centralized EC2 management system for multiple AWS accounts.

### Description:

I have come across some scenarios where admins will have to manage EC2 instances from multiple AWS account. Using this application, you jusy need to add the AWSID and Secret key to the system, the system will probe the accounts periodically and represent instances from all accounts in a HTML table, from there you can turn on/off/reboot/terminate the instances. No need to login to separate accounts.

**You can contact me at vickycena94@outlook.com for any help with installation**

### Requirements:

#### Backend:

*Python 3x - Boto3, Flask, Sqlite3, jwt, flask-cors.*

#### Front-end:

*AngularJS 5.
npm v6.4.1+
node v10.6.0*

### Setup - 

#### Backend:

- Clone the Repo to your local server.
- Use the `summadb` file in the backend directory as database file.
- Default admin user details in the datbase: username- admin, mail- admin@cc.com, password- 1234567.
- **The database should live in the same folder where the `views.py` file lives.**
- There are many ways to host a flask application, like using UWSGI, Gunicorn. You can choose a method which works for you, this is a step by step article on [How to host a Flask applications using UWSGI](https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-uwsgi-and-nginx-on-ubuntu-14-04)
- Run real_scheduler script in the backend `python3.x real_scheduler.py&`. ( This script will scan all the AWS accounts in the database once per hour and fetches the changes in the account and writes to the application's database)

#### Frontend:

- Change the serverUrl in `httpda.service.ts` file to the url where you are hosting the backend.
- Go to the root of the Frontend directory and execute the command `npm i`, this will install all the necessary dependancies.
- Now run the command `ng build --prod` **(Make sure you have Angular/CLI installed)**.
- This will create a directory `dist`, copy the files available in this folder to your webserver directory.
- Now your webserver should be serving this Angular APP.

**The App could be buggy and may not have enough features, but if you as users could report the bug or request for features, I will be happy to work on it.**

**Leave a Star if this tool is helpful to you**
