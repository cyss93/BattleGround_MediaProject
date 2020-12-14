d3.csv('./csv/upperLowerRank/solo_compare_MIRAMAR.csv').then(chart_solo);

function chart_solo(players) {
    const ctx = document.getElementById('solo');

    const label = players.map(function(d) {return d.label});
    const top = players.map(function(d) {return d.top});
    const low = players.map(function(d) {return d.low});
    
    const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [
        {   
            label : "TOP",
            data: top,
            fill : false,
            backgroundColor : "#ffcc00",
            borderColor : "#ffcc00"
        },
        {
            label : "LOW",
            data : low,
            fill : false,
            backgroundColor : "#272625",
            borderColor : "#272625"
        }
        ],
    },
    });
}

d3.csv('./csv/upperLowerRank/duo_compare_MIRAMAR.csv').then(chart_duo);

function chart_duo(players) {
    const ctx = document.getElementById('duo');

    const label = players.map(function(d) {return d.label});
    const top = players.map(function(d) {return d.top});
    const low = players.map(function(d) {return d.low});
    
    const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [
        {
            label : "TOP",
            data: top,
            fill : false,
            backgroundColor : "#ffcc00",
            borderColor : "#ffcc00"
        },
        {
            label : "LOW",
            data : low,
            fill : false,
            backgroundColor : "#272625",
            borderColor : "#272625"
        }
        ]
    },
    });
}

d3.csv('./csv/upperLowerRank/squad_compare_MIRAMAR.csv').then(chart_squad);

function chart_squad(players) {
    const ctx = document.getElementById('squad');

    const label = players.map(function(d) {return d.label});
    const top = players.map(function(d) {return d.top});
    const low = players.map(function(d) {return d.low});
    
    const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        datasets: [
        {   
            label : "TOP",
            data: top,
            fill : false,
            backgroundColor : "#ffcc00",
            borderColor : "#ffcc00"       
         },
        {
            label : "LOW",
            data : low,
            fill : false,
            backgroundColor : "#272625",
            borderColor : "#272625"
        }
        ],
    },
    });
}