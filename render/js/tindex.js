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
	let temperature = [] ;
	dataAsJson.forEach(function (row) {
		//add temp
		temperature.push({x: row.Time, y: row.temperature});

	 });
	return [
		{name: 'Temperature', points: temperature},
		
	];
}

function renderChart(series) {
	///tunkee annettuun diviin tas tap temperature
	JSC.Chart('temperature', {
		type: 'line',
		series: series
	});
}



