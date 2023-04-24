import csv

with open('../archive/characters.csv', newline='') as csvfile:
    reader = csv.reader(csvfile)
    data = []
    for row in reader:
        data.append(row)

# Accessing data from the list
# print(data[0])       # prints the first row of the CSV file
# print(data[0][0])    # prints the first value in the first row of the CSV fileprint(data[0])       # prints the first row of the CSV file
# print(data[2])    # prints the first value in the first row of the CSV file}

test_char_columns = data[0]

print(test_char_columns)