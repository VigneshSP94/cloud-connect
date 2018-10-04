import controls
import views
import time

#conn = views.db_conn()
accounts = []


# This will run periodically to probe the AWS accounts to see if there are changes to the instances running in the accounts.
while True:
    conn = views.db_conn()
    data = conn.execute('SELECT * FROM AWS_ACCOUNT')
    for accs in data:
      accounts.append(accs)
    conn.close()
    for i in accounts:
      print("scanning account "+str(i[0]))
      controls.refresh_accs(i[2], i[1], i[3], i[4], i[0])
    time.sleep(60)
