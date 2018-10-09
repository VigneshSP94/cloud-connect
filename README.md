# cloud-connect

## A centralized EC2 management system for multiple AWS accounts.

### Description:

I have come across some scenarios where admins will have to manage EC2 instances from multiple AWS account. Using this application, you jusy need to add the AWSID and Secret key to the system, the system will probe the accounts periodically and represent instances from all accounts in a HTML table, from there you can turn on/off/reboot/terminate the instances. No need to login to separate accounts.

### Requirements:

#### Backend:

*Python 3x - Flask, Sqlite3, jwt, flask-cors.*

#### Front-end:

*AngularJS 5.*

### Setup - 

- Clone the Repo to your local server.
- Use the `summadb` file in the backend directory as database file.
- The database should live in the same folder where the `views.py` file lives.


Default username and password in the `summadb` (database file) is username: admin@cc.com password: 123456.

Run real_scheduler script in the backend. ( This script will scan all the AWS accounts in the database once per hour and fetches the changes in the account and writes to the application's database)

Views is the mail flask file, you can host it as per your wish (Using WSGI).

Frontend:

Frontend of this application is developed using AngularJS.

npm - v6.4.1

nodejs - v10.6.0

Change the serverUrl in `httpda.service.ts` file to the url where you are hosting the backend.

Enter to the frontend directory and `npm i` to install the frontend and make it work.

The frontend could be buggy and may not have enough features, but if you as users could report the bug or request for features, I will be happy to work on it.

You can watch how the app works in this video.

https://www.youtube.com/watch?v=QLBCtAtRI2Y&t=5s

