# csv_parser.py

# .csv Columns
head = str("Time,temperature,humidity,pressure\n")

# siivoaa data.csnv graafille luettavaan muotoon
# avataan data
with open("data.csv", "r") as f:
    lines = f.readlines()

# kirjoitetaan kaikki rivit paitsi toistuva column names
with open("data.csv", "w") as f:
    for line in lines:
        if line.strip("\n") != head:
            f.write(line)
# avataan lukuna csv ja luetaan temppiin
f = open('data.csv','r')
temp = f.read()
f.close()
# avataan kirjoitettavana, kirjoitetaan columns ja suljetaan
f = open('data.csv', 'w')
f.write(head)
f.write(temp)
f.close()