
// MAP
// var map = L.map('map').setView([40.73, -73.93], 13);

// L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// L.marker([40.73, -73.93]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();


var bcLine = document.getElementById("bitcoinCash").getContext('2d');
var lineChart = new Chart(bcLine, {
    type: 'line',
    data: {
        labels: bcLabels,
        datasets: [{
            label: 'Price in USD',
            data: bitcoinCashData,
            backgroundColor:
                '#92DBF1'
        
        }]
    },
    options: {
        hover: true ,
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

var etLine = document.getElementById("ethereum").getContext('2d');
var lineChart = new Chart(etLine, {
    type: 'line',
    data: {
        labels: etLabels,
        datasets: [{
            label: 'Price in USD',
            data: ethereumData,
            backgroundColor: 
                '#FF7545'
            
        }]
    },
    options: {
        hover: true ,
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


var liLine = document.getElementById("litecoin").getContext('2d');
var lineChart = new Chart(liLine, {
    type: 'line',
    data: {
        labels: liLabels,
        datasets: [{
            label: 'Price in USD',
            data: litecoinData,
            backgroundColor: 
                '#99FDCB'
        }]
    },
    options: {
        hover: true ,
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


// var pie = document.getElementById("pie").getContext('2d');
// var picChart = new Chart(pie, {
//     type: 'pie',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 '#1D62D3',
//                 '#1B59C0',
//                 '#184EA7',
//                 '#14428C',
//                 '#103673',
//                 '#0D2B5C'
//             ]
//         }]
//     },
//     options: {
//         responsive:true,
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// var scatter = document.getElementById("scatter").getContext('2d');
// var scatterChart = new Chart(scatter, {
//     type: 'scatter',
//     data: {
//         datasets: [{
//             label: 'Scatter Dataset',
//             data: [{
//                 x: -10,
//                 y: 0
//             }, {
//                 x: 0,
//                 y: 10
//             }, {
//                 x: 10,
//                 y: 5
//             }]
//         }]
//     },
//     options: {
//         scales: {
//             xAxes: [{
//                 type: 'linear',
//                 position: 'bottom'
//             }]
//         }
//     }
// });

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