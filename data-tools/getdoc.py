from gdocs import GoogleDoc
import xlrd
doc = {
    "key": "16DASRyCsVhCiNVDc4E4wjgEl5okdFAjhd35inbBpomY",
    "file_name": "data"
}
g = GoogleDoc(**doc)
g.get_auth()
g.get_document()

# Open the workbook
wb = xlrd.open_workbook('src/data.xlsx')

# Get the first sheet either by index or by name
sh = wb.sheet_by_index(0)

print sh.row_values(0)[0]
