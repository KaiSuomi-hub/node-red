fetch('http://192.168.1.3/koulu/pilvi/juha-kalliokoski/ohjelmointiymparisto/naytto/node-red/data.csv')
	.then(function (response) {
		return response.text();
	})
	.then(function (text) {
		let series = csvToSeries(text);
		renderChart(series);
	
	})
	.catch(function (error) {
		//Something went wrong
		console.log(error);
	});

function csvToSeries(text) {
	let dataAsJson = JSC.csv2Json(text);
	let humidity = [];
	dataAsJson.forEach(function (row) {
		//add hum
		humidity.push({x: row.Time, y: row.humidity});
	 });
	return [
		 { name: 'Humidity', points: humidity },
	];
}

function renderChart(series) {
	///tunkee annettuun diviin tas tap humidity
	JSC.Chart('humidity', {
		type: 'line',
		series: series
	});
}



