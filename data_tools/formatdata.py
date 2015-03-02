import xlrd
import json
import os
import datetime

source_file = os.path.join(os.path.dirname(__file__), 'src/data.json')
filters_json = os.path.join(os.path.dirname(__file__), 'src/filters.json')
copy_json = os.path.join(os.path.dirname(__file__), 'src/copy.json')
output_file = os.path.join(os.path.dirname(__file__), 'output/data.json') 


def check_last_week(appearance):
    date = appearance["DATE"]
    if date == "":
        return False
    date_array = date.split("-")
    appearance_date_obj = datetime.datetime(int(date_array[0]), int(date_array[1]), int(date_array[2]))
    current_date = datetime.datetime.today()
    last_sunday_date = datetime.datetime(current_date.year, current_date.month, current_date.day - (current_date.weekday() + 1))
    if appearance_date_obj.year == last_sunday_date.year and appearance_date_obj.month == last_sunday_date.month and appearance_date_obj.day == last_sunday_date.day:
        return True
    else:
        return False

# create appearance entry function
def create_appearance_dict(appearance):
    new_appearance_dict = {
        "date": appearance["DATE"]
    }

    is_last_week = check_last_week(appearance)

    if is_last_week == True:
        new_appearance_dict['last_week'] = True
    else:
        new_appearance_dict['last_week'] = False

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

def create_tag_list(person_dict):
    new_tag_list = []
    if person_dict["party"] is not "":
        new_tag_list.append(person_dict["party"].lower())
    if person_dict["gender"] is not "":
        new_tag_list.append(person_dict["gender"].lower())
    if person_dict["race"] is not "":
        new_tag_list.append(person_dict["race"].lower())
    if person_dict["house"] == True:
        new_tag_list.append("house")
    elif person_dict["senate"] == True:
        new_tag_list.append("senate")
    elif person_dict["admin"] == True:
        new_tag_list.append("admin")
    elif person_dict["journalist"] == True:
        new_tag_list.append("journalist")
    elif person_dict["other_political"] == True:
        new_tag_list.append("other_political")
    elif person_dict["other"] == True:
        new_tag_list.append("other")
    for appearance in person_dict["appearances"]:
        if "network" in appearance.keys():
            new_tag_list.append(appearance["network"].lower())

    return new_tag_list


def format_data():
    # Open the workbook
    # wb = xlrd.open_workbook(source_file)
    
    # Get the first sheet either by index or by name
    # sh = wb.sheet_by_index(0)
    
    json_file = open(source_file)
    # List to store a record of each appearance
    appearance_list = json.load(json_file)
    json_file.close()

    filter_file = open(filters_json)
    filter_list = json.load(filter_file)
    filter_file.close()
   
    # flatten filter list
    flat_filter_list = []
    for filter_item in filter_list:
        flat_filter_list.append(filter_item["filters"])

    copy_file = open(copy_json)
    copy_list = json.load(copy_file)
    copy_file.close()

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
        print guest_name
        if not guest_name == "":
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
                    "last_week": False,
                    "last_week_appearances": [],
                    "total_appearances": 0,
                    "image_name": appearance["image_name"],
                    "image_credit": appearance["image_credit"]
                }

                # fix gender to full words
                if new_person_dict["gender"].lower().strip() == "f":
                    new_person_dict["gender"] = "female"
                elif new_person_dict["gender"].lower().strip() == "m":
                    new_person_dict["gender"] = "male"
                # check for boolean values on appearance
                if appearance["House"].lower() == "x":
                    new_person_dict["house"] = True
                else:
                    new_person_dict["house"] = False
                if appearance["Senate"].lower() == "x":
                    new_person_dict["senate"] = True
                else:
                    new_person_dict["senate"] = False
                if appearance["Admin."].lower() == "x":
                    new_person_dict["admin"] = True
                else:
                    new_person_dict["admin"] = False
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

                # Increment total appearance number
                new_person_dict["total_appearances"] = new_person_dict["total_appearances"] + 1

                if new_appearance_dict["last_week"] == True:
                    new_person_dict["last_week"] = True
                    new_person_dict["last_week_appearances"].append(new_appearance_dict["network"])

                new_person_dict["appearances"].append(new_appearance_dict)

                #add them to the dict
                people_dict[guest_name] = new_person_dict
            
            # if person is already in the dictionary
            else:
                #create a new appearance dictionary
                new_appearance_dict = create_appearance_dict(appearance)
                
                # Increment total appearance number
                people_dict[guest_name]["total_appearances"] = people_dict[guest_name]["total_appearances"] + 1

                if new_appearance_dict["last_week"] == True:
                    people_dict[guest_name]["last_week"] = True
                    people_dict[guest_name]["last_week_appearances"].append(new_appearance_dict["network"])

                #append it to the existing person appearance list
                people_dict[guest_name]["appearances"].append(new_appearance_dict)
            
            people_dict[guest_name]["tags"] = list(set(create_tag_list(people_dict[guest_name])))
        else:
            print "empty"

    # now iterate over people dictionary and flatten into a list of people

    person_list = []

    for key, value in people_dict.iteritems():
        person_list.append(value)

    data_dict = {
        "people": person_list,
        "filters": flat_filter_list,
        "copy": copy_list[0]
    }
    # save person list to json file

    with open(output_file, "w") as output:
        json.dump(data_dict, output)


if __name__ == "__main__":
    format_data()
