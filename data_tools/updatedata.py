from gdocs import GoogleDoc

doc_1 = {
    "key": "16DASRyCsVhCiNVDc4E4wjgEl5okdFAjhd35inbBpomY",
    "file_name": "data",
    "file_format": "xlsx"
}

def get_data():
    g = GoogleDoc(**doc_1)
    g.get_auth()
    g.get_document()
    
if __name__ == "__main__":
    get_data()
