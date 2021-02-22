var url="../data.csv"
fetch(url, {mode: "no-cors"})
	
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
	let temperature = [],humidity = [],pressure = [] ;
	dataAsJson.forEach(function (row) {
		//add temp
		temperature.push({x: row.Time, y: row.temperature});
		humidity.push({x: row.Time, y: row.humidity});
		// pressure.push({x: row.Time, y: row.pressure});
	 });
	return [
		{name: 'Temperature', points: temperature },
		{name: 'Humidity', points: humidity },
		// {name: 'Pressure', points: pressure},
		
	];
}

function renderChart(series) {
	///tunkee annettuun diviin tas tap temperature
	JSC.Chart('temperature', {
		type: 'line',
		title_label_text: 'Room temperature in Celsius and RH',
		annotations: [{
			label_text: 'Updates once in four hours',
			position: 'bottom left'
		}],
		legend_visible: false,
		xAxis_crosshair_enabled: true,
		defaultSeries_firstPoint_label_text: '<b>%seriesName</b>',
		defaultPoint_tooltip: '%seriesName <b>%yValue</b>',
		series: series
	});
}



