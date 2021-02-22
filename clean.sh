tail -n 12  /home/LABRA/suoant/public_html/nodered/data.csv>/home/LABRA/suoant/public_html/nodered/shortdata.csv
sed -i '1s/^/Time,temperature,humidity,pressure\n/'  /home/LABRA/suoant/public_html/nodered/shortdata.csv 
mv  /home/LABRA/suoant/public_html/nodered/data.csv `date "+%F"`.csv
mv  /home/LABRA/suoant/public_html/nodered/shortdata.csv  /home/LABRA/suoant/public_html/nodered/data.csv
