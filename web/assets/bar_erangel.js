d3.csv('./csv/killDistance/kill_distance_weapon_ERANGEL.csv').then(chart_distance);

function chart_distance(players) {
    const ctx = document.getElementById('distance');

    const distance = players.map(function(d) {return d.distance});
    const AKM = players.map(function(d) {return d.AKM});
    const Kar98k = players.map(function(d) {return d.Kar98k});
    const M416 = players.map(function(d) {return d.M416});
    const S1897 = players.map(function(d) {return d.S1897});
    const M16A4 = players.map(function(d) {return d.M16A4});
    const SCAR_L = players.map(function(d) {return d.SCAR_L});
    const UMP9 = players.map(function(d) {return d.UMP9});
    const SKS = players.map(function(d) {return d.SKS});
    const Mini14 = players.map(function(d) {return d.Mini14});

    
    const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: distance,
        datasets: [
        {
            label : 'AKM',
            data: AKM,
            backgroundColor : '#008d93',
            borderColor : "black"
        },
        {
            label : 'Kar98k',
            data: Kar98k,
            backgroundColor : '#3c9990',
            borderColor : "black"
        },
        {
            label : 'M416',
            data: M416,
            backgroundColor : '#58a58d',
            borderColor : "black"
        },
        {
            label : 'S1897',
            data: S1897,
            backgroundColor : '#6fb189',
            borderColor : "black"
        },
        {
            label : 'M16A4',
            data: M16A4,
            backgroundColor : '#83be85',
            borderColor : "black"
        },
        {
            label : 'SCAR_L',
            data: SCAR_L,
            backgroundColor : '#96cb81',
            borderColor : "black"
        },
        {
            label : 'UMP9',
            data: UMP9,
            backgroundColor : '#a7d87c',
            borderColor : "black"
        },
        {
            label : 'SKS',
            data: SKS,
            backgroundColor : '#b9e576',
            borderColor : "black"
        },
        {
            label : 'Mini14',
            data: Mini14,
            backgroundColor : '#caf270',
            borderColor : "black"
        }
        ]
    },
    options: {
        maintainAspectRatio: true,
        scales: {
            yAxes:[{
                stacked: true,
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    offsetGridLines: true
                }
            }],
            xAxes:[{
                gridLines: {
                offsetGridLines: true
                },
                stacked: true,
            }]
        }
    }
    });
}