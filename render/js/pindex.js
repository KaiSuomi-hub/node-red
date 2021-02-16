fetch('http://192.168.1.3/koulu/pilvi/juha-kalliokoski/ohjelmointiymparisto/naytto/node-red/data.csv')
	.then(function (response) {
		return response.text();
	})
	.then(function (text) {
		let pseries = csvToSeries(text);
		renderChart(pseries);
	
	})
	.catch(function (error) {
		//Something went wrong
		console.log(error);
	});

function csvToSeries(text) {
	let dataAsJson = JSC.csv2Json(text);
	let pressure = [];
	dataAsJson.forEach(function (row) {
		//add press
		pressure.push({x: row.Time, y: row.pressure});
	
	 });
	return [
		{name: 'Pressure', points: pressure},
		
	];
}

function renderChart(pseries) {
	///tunkee annettuun diviin tas tap pressure
	JSC.Chart('pressure', {
		type: 'line',
		series: series
	});
}





