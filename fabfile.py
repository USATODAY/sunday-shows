from data_tools.updatedata import get_data
from data_tools.formatdata import format_data
from data_tools.slack_tools import slack_notify
from fabric.operations import local as run
from data_tools.ftpup import connect_ftp, upload_file
import os


def create_absolute_path(relative_path):
    return os.path.join(os.path.dirname(__file__), relative_path)

master_spreadsheet = create_absolute_path('data_tools/src/data.xlsx')
data_csv = create_absolute_path('data_tools/src/data.csv') 
data_json = create_absolute_path('data_tools/src/data.json') 

filter_csv = create_absolute_path('data_tools/src/filters.csv') 
filter_json = create_absolute_path('data_tools/src/filters.json') 

copy_csv = create_absolute_path('data_tools/src/copy.csv') 
copy_json = create_absolute_path('data_tools/src/copy.json') 

def updater(target="dev"):
    print ("Downloading new data file from Google...")
    get_data()
    print ("Converting to JSON...")
    # remove files if they already exist
    try:
        run("rm %s" % (data_json))
    except:
        pass
    try:
        run("rm %s" % (data_csv))
    except:
        pass
    try:
        run("rm %s" % (filter_json))
    except:
        pass
    try:
        run("rm %s" % (filter_csv))
    except:
        pass
    try:
        run("rm %s" % (copy_csv))
    except:
        pass
    try:
        run("rm %s" % (copy_json))
    except:
        pass
    # convert excel sheet into 3 CSVs
    run ("in2csv %s --sheet Sheet1 > %s" % (master_spreadsheet, data_csv))
    run ("in2csv %s --sheet filters > %s" % (master_spreadsheet, filter_csv))
    run ("in2csv %s --sheet copy > %s" % (master_spreadsheet, copy_csv))
    run("csvjson %s > %s" % (data_csv, data_json))
    run("csvjson %s > %s" % (filter_csv, filter_json))
    run("csvjson %s > %s" % (copy_csv, copy_json))
    print("Formatting data...")
    format_data()
    print("Uploading data...")
    ftp_conn = connect_ftp()
    ftp_conn.cwd("usatoday/2015/03/sunday-shows/data/")

    upload_file(ftp_conn, create_absolute_path('data_tools/output/data.json'))

    slack_notify("Talk show data updated successfully", "@mitchthorson")
