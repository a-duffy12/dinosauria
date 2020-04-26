import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pprint

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

# get genera data and print it
dinosauria = sheet.get_all_records()
#pp.pprint(dinosauria)

# various print tests
sheet.sort((2, 'des'))
test = sheet.get_all_records()
pp.pprint(test)

# useful gspread commands
# #to get all the values inside the file
# sheet.get_all_values()
# #to get exact row values in a second row (Since 1st row is the header)
# sheet.row_values(2)
# #to get all the column values in the column 'place'
# sheet.col_values(16)
# #to extract a particular cell value
# sheet.cell(1, 1).value
# row = ["I'm","inserting","a","new","row","into","a,","Spreadsheet","using","Python"]
# index = 3
# sheet.insert_row(row, index)
# sheet.update_cell(1, 1, "telemedicine_id")

