import controls
import views
import time

#conn = views.db_conn()
accounts = []

while True:
    conn = views.db_conn()
    data = conn.execute('SELECT * FROM AWS_ACCOUNT')
    for accs in data:
      accounts.append(accs)
    conn.close()
    #print(accounts)
    for i in accounts:
      print("scanning account "+str(i[0]))
      #try:
      controls.refresh_accs(i[2], i[1], i[3], i[4], i[0])
      #except Exception as e:
        #print(e)
    time.sleep(10)
