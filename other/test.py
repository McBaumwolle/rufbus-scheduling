import json

# open data/to_ing.json with json.load
with open('data/to_ing.json') as f:
    data = json.load(f)

# print the data
print(data)
