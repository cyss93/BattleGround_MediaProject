
d3.csv('./csv/magnetic/bluezone_count_ERANGEL.csv').then(chart_distance);

function chart_distance(players) {
    const ctx = document.getElementById('magnetic');

    const minutes = players.map(function(d) {return d.minutes});
    const count = players.map(function(d) {return d.count});
    
    const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: minutes,
        datasets: [
        {
            data: count,
            steppedLine: true,
            borderColor : "#ffcc00",
            backgroundColor : "#FFE666",
        }
        ]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        },
        scales : {
            xAxes: [{
                scaleLabel: {
                    display : true,
                    labelString: "minute"
                }
            }]
        }
    }
    });
}
