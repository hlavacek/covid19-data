import pandas as pd
import json

pcr_tests = pd.read_csv('../PCR_Tests/OpenData_Slovakia_Covid_PCRTests_District.csv', sep=';')

with open('./geojson/districts_epsg_4326.geojson') as f:
  districts = json.load(f)

pcr_tests['District_real'] = pcr_tests.District.str.replace('Okres ', '')
# print(len(districts['features']))
# print(pcr_tests.head())

features_dict = {}
# # map features into a dictionary by name
for feature in districts['features']:
    features_dict[feature['properties']['NM3']] = feature


districts['meta'] = {
    'name': 'PCR Tests'
}
available_properties = {
    'PCR_Pos': { 'min': 0, 'max': 0},
    'PCR_Neg': { 'min': 0, 'max': 0},
    'PCR_Total': { 'min': 0, 'max': 0},
}
districts['meta']['availableProperties'] = available_properties

for index, row in pcr_tests.iterrows():
    if row['District_real'] in features_dict:
        # update min / max values
        if available_properties['PCR_Pos']['max'] < row['PCR_Pos']:
            available_properties['PCR_Pos']['max'] = row['PCR_Pos']
        if available_properties['PCR_Neg']['max'] < row['PCR_Neg']:
            available_properties['PCR_Neg']['max'] = row['PCR_Neg']
        if available_properties['PCR_Total']['max'] < row['PCR_Total']:
            available_properties['PCR_Total']['max'] = row['PCR_Total']

        # update row data into features
        row_data = {
            'PCR_Pos': row['PCR_Pos'],
            'PCR_Neg': row['PCR_Neg'],
            'PCR_Total': row['PCR_Total']
        }

        if 'dates' not in features_dict[row['District_real']]['properties']:
            features_dict[row['District_real']]['properties']['dates'] = {}

        features_dict[row['District_real']]['properties']['dates'][row['Date']] = row_data


with open('../frontend/public/data/processed/pcr_tests_districts.geojson', 'w') as json_file:
    json.dump(districts, json_file)

# print(pcr_tests.District.unique())
print('done')
