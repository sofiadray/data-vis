
// MAP
var map = L.map('map').setView([40.73, -73.93], 13);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([40.73, -73.93]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


// BAR
var bar = document.getElementById("bar").getContext('2d');
var barChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#1D62D3',
                '#1B59C0',
                '#184EA7',
                '#14428C',
                '#103673',
                '#0D2B5C'
            ]
        }]
    },
    options: {
    	responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

});

var line = document.getElementById("line").getContext('2d');
var lineChart = new Chart(line, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#1D62D3',
                '#1B59C0',
                '#184EA7',
                '#14428C',
                '#103673',
                '#0D2B5C'
            ]
        }]
    },
    options: {
    	responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var pie = document.getElementById("pie").getContext('2d');
var picChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#1D62D3',
                '#1B59C0',
                '#184EA7',
                '#14428C',
                '#103673',
                '#0D2B5C'
            ]
        }]
    },
    options: {
        responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var scatter = document.getElementById("scatter").getContext('2d');
var scatterChart = new Chart(scatter, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

var bubble = document.getElementById("bubble").getContext('2d');
var bubbleChart = new Chart(bubble, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Bubble Dataset',
            data: [{
                x: -10,
                y: 0,
                r: 10
            }, {
                x: 0,
                y: 10,
                r: 10
            }, {
                x: 10,
                y: 5,
                r: 10
            }]
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});