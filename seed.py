import csv 
import psycopg2 
import os 
connectionString = os.environ["DATABASE_URL"]
try:
    conn = psycopg2.connect(connectionString)
    print('that worked! sweet >:)')
except:
    print('connecting with a connection string doesnt work')
with open('teams.csv') as csv_file:
        cur = conn.cursor()
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names are {",".join(row)}')
                line_count+=1
            else:
                print(f'\t{row[0]} costs {row[1]} and is located at ({row[2]},{row[3]})')
                cur.execute('INSERT INTO teams(name, price, latitude, longitude) VALUES(%s,%s,%s,%s)',(row[0],row[1],row[2],row[3]))
                line_count+=1
        conn.commit()
        cur.close()
        conn.close()
        print(f'Processed {line_count} lines.')
