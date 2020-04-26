import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint
import pandas as pd

# define scope, create credentials, and authorize a client
scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive'] 
creds = ServiceAccountCredentials.from_json_keyfile_name('secret_key.json', scope)
client = gspread.authorize(creds)

# define spreadsheet constant
SPREADSHEET = 'dinosauria_genera'

# access call for google sheet
sheet = client.open(SPREADSHEET).sheet1

# create pretty printer object
pp = pprint.PrettyPrinter()

# get genera data and create headers
dinosauria = sheet.get_all_records()
headers = dinosauria.pop(0)

# extract data to build visualizations
data = pd.DataFrame(dinosauria, columns=headers)
print(data)

# -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

# various print tests
#sheet.sort((9, 'asc'))
#test = sheet.get_all_records()
#pp.pprint(test)


