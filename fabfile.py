from data_tools.updatedata import get_data
from data_tools.formatdata import format_data
from data_tools.slack_tools import slack_notify
from fabric.operations import local as run
import os

input_csv = os.path.join(os.path.dirname(__file__), 'data_tools/src/data.csv') 
output_json = os.path.join(os.path.dirname(__file__), 'data_tools/src/data.json') 


def updater(target="dev"):
    print ("Downloading new data file from Google...")
    get_data()
    print ("Converting to JSON...")
    run("csvjson %s > %s" % (input_csv, output_json))
    print("Formatting data...")
    format_data()
    slack_notify("Talk show data updated successfully", "@mitchthorson")
