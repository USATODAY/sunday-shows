import xlrd
import json
import os

source_file = os.path.join(os.path.dirname(__file__), 'src/data.json')
output_file = os.path.join(os.path.dirname(__file__), 'output/data.json') 

# create appearance entry function
def create_appearance_dict(appearance):
    try:    
        date_tuple = xlrd.xldate_as_tuple(appearance["DATE"], wb.datemode)
        date_string = "%s/%s/%s" % (str(date_tuple[1]), str(date_tuple[2]), str(date_tuple[0]))
    except:
        # print "invalid date in entry %s" % (appearance["Guest"])
        date_string = ""
    new_appearance_dict = {
        "date": appearance["DATE"]
    }

    # check for which network the appearance was on
    if appearance["Fox"].lower() == "x":
        new_appearance_dict["network"] = "Fox"
    elif appearance["ABC"].lower() == "x":
        new_appearance_dict["network"] = "ABC"
    elif appearance["CBS"].lower() == "x":
        new_appearance_dict["network"] = "CBS"
    elif appearance["NBC"].lower() == "x":
        new_appearance_dict["network"] = "NBC"
    elif appearance["CNN"].lower() == "x":
        new_appearance_dict["network"] = "CNN"
    elif appearance["Univision"].lower() == "x":
        new_appearance_dict["network"] = "Univision"
    
    return new_appearance_dict

def format_data():
    # Open the workbook
    # wb = xlrd.open_workbook(source_file)
    
    # Get the first sheet either by index or by name
    # sh = wb.sheet_by_index(0)
    
    json_file = open(source_file)
    # List to store a record of each appearance
    appearance_list = json.load(json_file)
    json_file.close()

    # Add all appearances as dictionaries to the list
    #for rownum in range(1, sh.nrows):
    #  appearance = {}
    #  headers = sh.row_values(0)
    #  for colnum in range(sh.ncols):
    #    appearance[headers[colnum]] = sh.cell_value(rownum, colnum)
    #  appearance_list.append(appearance)

    # master list to hold people objects. Desired format is
    # {
    #     guest: string,
    #     party: string,
    #     state: string,
    #     race: string,
    #     gender: string,
    #     house: boolean,
    #     senate: boolean,
    #     admin: boolean,
    #     other_political: boolean,
    #     journalist: boolean,
    #     other: boolean,
    #     description: string,
    #     appearances: list of appearances in the format
    #         {
    #             date: 'string',
    #             network: 'string'
    #         },
    # }

    # use dictionary with named keys to check if person exists yet
    people_dict = {}


    for appearance in appearance_list:
        guest_name = appearance['Guest'].strip()
        # check if person is already in our dict
        if not guest_name in people_dict.keys():
            #create person dict based on info
            new_person_dict = {
                "guest": guest_name, 
                "party": appearance["Party"],
                "state": appearance["State"],
                "race": appearance["Race"],
                "gender": appearance["Gender"],
                "description": appearance["Description"],
            }
            # check for boolean values on appearance
            if appearance["House"].lower() == "x":
                new_person_dict["house"] = True
            else:
                new_person_dict["house"] = False
            if appearance["Senate"].lower() == "x":
                new_person_dict["senate"] = True
            else:
                new_person_dict["senate"] = False
            if appearance["Other Political"].lower() == "x":
                new_person_dict["other_political"] = True
            else:
                new_person_dict["other_political"] = False

            if appearance["Journalist"].lower() == "x":
                new_person_dict["journalist"] = True
            else:
                new_person_dict["journalist"] = False
            if appearance["Other"].lower() == "x":
                new_person_dict["other"] = True
            else:
                new_person_dict["other"] = False

            new_person_dict["appearances"] = []

            new_appearance_dict = create_appearance_dict(appearance)

            new_person_dict["appearances"].append(new_appearance_dict)

            #add them to the dict
            people_dict[guest_name] = new_person_dict
        
        # if person is already in the dictionary
        else:
            #create a new appearance dictionary
            new_appearance_dict = create_appearance_dict(appearance)
            #append it to the existing person appearance list
            people_dict[guest_name]["appearances"].append(new_appearance_dict)


    # now iterate over people dictionary and flatten into a list of people

    person_list = []

    for key, value in people_dict.iteritems():
        person_list.append(value)

    # save person list to json file

    with open(output_file, "w") as output:
        json.dump(person_list, output)


if __name__ == "__main__":
    format_data()
