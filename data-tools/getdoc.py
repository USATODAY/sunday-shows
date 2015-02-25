from gdocs import GoogleDoc

doc = {
    "key": "16DASRyCsVhCiNVDc4E4wjgEl5okdFAjhd35inbBpomY",
    "file_name": "data"
}
g = GoogleDoc(**doc)
g.get_auth()
g.get_document()

