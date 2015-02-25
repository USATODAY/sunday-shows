from gdocs import GoogleDoc

def get_data():
    doc = {
        "key": "16DASRyCsVhCiNVDc4E4wjgEl5okdFAjhd35inbBpomY",
        "file_name": "data",
        "file_format": "csv"
    }
    g = GoogleDoc(**doc)
    g.get_auth()
    g.get_document()

if __name__ == "__main__":
    get_data()
