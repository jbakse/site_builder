
function makeBarChart(_id, _labels, _values) {
	var myChart = new Chart(_id, {
	    type: 'bar',
	    data: {
	        labels: _labels,
	        datasets: [{
	            label: '',
	            data: _values,
	            backgroundColor: "#666"
	        }]
	    },
	    options: {
			legend: {
				display: false
			},
	        scales: {
	            yAxes: [{
	                display: false,
					ticks: {
						beginAtZero: true
					}
	            }],
				xAxes: [{
	                gridLines: {
						display: false,
						lineWidth: 0
					}
	            }]
	        }
	    }
	});
}
