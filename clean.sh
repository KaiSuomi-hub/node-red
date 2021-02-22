#split data once a week, leave two days of tail
tail -n 12 ./data.csv<shortdata.csv 
sed -i '1s/^/Time,temperature,humidity,pressure\n/' ./shortdata.csv &
mv ./data.csv `date "+%F"`.csv 
mv ./shortdata.csv ./data.csv
