# csv_parser.py
import os

# .csv Columns
head = str("Time,temperature,humidity,pressure")
data = str("/home/pi/Documents/nodered/data.csv")
# siivoaa data.csnv graafille luettavaan muotoon
# avataan data
with open(data, "r") as f:
    lines = f.readlines()
# kirjoitetaan kaikki rivit paitsi toistuva column names
with open(data, "w") as f:
    for line in lines:
            if line.strip("\n") != head:
                f.write(line)
# avataan lukuna csv ja luetaan temppiin
f = open(data,'r')
temp = f.read()
f.close()
# avataan kirjoitettavana, kirjoitetaan columns ja suljetaan
f = open(data, 'w')
f.write(head+"\n")
f.write(temp)
f.close()
# poistetaan tyhjat rivit
print("kleanining up!")
os.system("sed -i \'/^$/d\' data.csv")
print("Done!")