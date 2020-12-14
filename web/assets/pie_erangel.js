function randomColor() {
    let color = "#" + Math.round(Math.random() * 0xffffff).toString(16);
}


//초기화면 pie chart
d3.csv('./csv/killCounts/erangel/DMRifle_ER.csv').then(pie_chart);

    function pie_chart(players) {
        let canvas = document.getElementById('pie-dmrifle');
        let weapon = players.map(function(d) {return d.WeaponName});
        let kills = players.map(function(d) {return d.Killed});
        
        chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: weapon,
            datasets: [
            {
                data: kills,
                backgroundColor : [
                    "#2955D9",
                    "#3068D9",
                    "#367DD9",
                    "#82B8D9",
                    "#8abccf",
                    "#a5d5d8",
                    "#c5eddf",
                    "#ffffe0"
                ],
            }
            ]
        },
        options: {
            title: {
                display: true,
                fontSize : 20,
                fontColor : 'black',
            },
            elements : {
                arc : {
                    borderWidth : 0.05,
                    borderColor : 'black',
                    hoverBorderWidth : 1,
                }
            },
        },
        });
        
        canvas.onclick = function(evt) {
            let activePoints = chart.getElementsAtEvent(evt);
            if (activePoints[0]) {
                //차트 정보 받아오기
                const chartData = activePoints[0]['_chart'].config.data;
                const idx = activePoints[0]['_index'];
        
                const label = chartData.labels[idx];
                const value = chartData.datasets[0].data[idx];            
                console.log(idx);

                // creat newDiv
                const newDiv = document.createElement('div');
                // creat newCanvas
                let newCanvas = document.createElement('canvas');
                newCanvas.setAttribute("id", label);
                
                // creat delete buttton
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute("class" ,"fas fa-angle-double-left");
                deleteBtn.setAttribute("id", "delete");

                deleteBtn.style.fontSize = "30px";
                newCanvas.style.marginBottom = "20px";
                newDiv.appendChild(deleteBtn);
                newDiv.appendChild(newCanvas);
                //replace pie chart -> radar chart
                
                let oldCanvas = document.getElementById('pie-dmrifle');
                let pieButton = document.getElementById('btn-pie')
                let parent = oldCanvas.parentNode;

                parent.replaceChild(newDiv, oldCanvas);

                //creat radar chart
                const ctx = document.getElementById(label);

                d3.csv('./csv/weapons/DMRifle.csv').then(makeChart_Other);

                function makeChart_Other(players){

                    let list = players.map(function(d) {return d.WeaponName});
                    //여기서 문제가 생긴거임
                    let weapons = players.map(function(d) {
                        switch(label) {
                            case 'Mk14' :
                                return d.Mk14
                                break;
                            case 'SLR' :
                                return d.SLR
                                break;
                            case 'SKS' :
                                return d.SKS
                                break
                            case 'QBU' :
                                return d.QBU
                                break;
                            case 'Mini14' :
                                return d.Mini14;
                                break;
                            case 'VSS' :
                                return d.VSS
                                break;
                            case 'Sawed-Off' :
                                return d.Sawed-Off
                            case 'R1895' :
                                return d.R1895
                            case 'R45' :
                                return d.R45
                            case 'P1911' :
                                return d.P1911
                            case 'P92' :
                                return d.P92
                            case 'P18C' :
                                return d.P18C
                            case 'Skorpion' :
                                return d.Skorpion
                            case 'S686' :
                                return d.S686
                            case 'S1897' :
                                return d.S1897
                            case 'S12K' :
                                return d.S12K
                            case 'AWM' :
                                return d.AWM
                            case 'M24' :
                                return d.M24
                            case 'Kar98k' :
                                return d.Kar98k
                            case 'Win94' :
                                return d.Win94
                            case 'Vector' :
                                return d.Vector
                            case 'MicroUZI' :
                                return d.MicroUZI
                            case 'PP-Bizon' :
                                return d.PP-Bizon
                            case 'MP5K' :
                                return d.MP5K
                            case 'Thompson' :
                                return d.Thompson
                            case 'UMP9' :
                                return d.UMP9
                            case 'Groza' :
                                return d.Groza
                            case 'AKM' :
                                return d.AKM
                            case 'M762' :
                                return d.M762
                            case 'MK47Mutant' :
                                return d.MK47Mutant
                            case 'AUG' :
                                return d.AUG
                            case 'SCAR-L' :
                                return d.SCAR_L
                            case 'M416' :
                                return d.M416
                            case 'M16A4' :
                                return d.M16A4
                            case 'G36C' :
                                return d.G36C
                            case 'OBZ' :
                                return d.OBZ
                            case 'DP_28' :
                                return d.DP_28
                            default :
                                break;
                            }
                    });
            
                    let chart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: list,
                        datasets: [
                        {
                        label : label,
                        data: weapons,
                        borderColor : "rgba(53, 104, 179, 1)",
                        backgroundColor : "rgba(53, 104, 179, 0.6)"
                        }   
                            ]
                        },
                    });
                }
                //delete funtion
                deleteBtn.addEventListener('click', function() {
                    let parent = newDiv.parentNode;
                    parent.replaceChild(oldCanvas, newDiv);
                    parent.insertBefore(pieButton, oldCanvas);
                })
            }
        }
    };

//버튼 생성 pie chart

let chart;

function makePieChart(data, data2) {
    //이전 차트 초기화
    if(chart) {
        chart.destroy();
    }
    
    d3.csv(data).then(pie_chart);

    function pie_chart(players) {
        let canvas = document.getElementById('pie-dmrifle');
        let weapon = players.map(function(d) {return d.WeaponName});
        let kills = players.map(function(d) {return d.Killed});
        
        chart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: weapon,
            datasets: [
            {
                data: kills,
                backgroundColor : [
                    "#2955D9",
                    "#3068D9",
                    "#367DD9",
                    "#82B8D9",
                    "#8abccf",
                    "#a5d5d8",
                    "#c5eddf",
                    "#ffffe0"
                ],
            }
            ]
        },
        options: {
            title: {
                display: true,
                fontSize : 20,
                fontColor : 'black',
            },
            elements : {
                arc : {
                    borderWidth : 0.05,
                    borderColor : 'black',
                    // hoverBorderWidth : 10,
                }
            },
        },
        });
        canvas.onclick = function(evt) {
            let activePoints = chart.getElementsAtEvent(evt);
            if (activePoints[0]) {
                //차트 정보 받아오기
                const chartData = activePoints[0]['_chart'].config.data;
                const idx = activePoints[0]['_index'];
        
                const label = chartData.labels[idx];
                const value = chartData.datasets[0].data[idx];            
                console.log(idx);

                // creat newDiv
                const newDiv = document.createElement('div');
                // creat newCanvas
                let newCanvas = document.createElement('canvas');
                newCanvas.setAttribute("id", label);
                
                // creat delete buttton
                const deleteBtn = document.createElement('button');
                deleteBtn.setAttribute("class" ,"fas fa-angle-double-left");
                deleteBtn.setAttribute("id", "delete");

                deleteBtn.style.fontSize = "30px";
                newCanvas.style.marginBottom = "20px";

                newDiv.appendChild(deleteBtn);
                newDiv.appendChild(newCanvas);
                //replace pie chart -> radar chart
                
                let oldCanvas = document.getElementById('pie-dmrifle');
                let pieButton = document.getElementById('btn-pie')
                let parent = oldCanvas.parentNode;

                parent.replaceChild(newDiv, oldCanvas);

                //creat radar chart
                const ctx = document.getElementById(label);

                d3.csv(data2).then(makeChart_Other);

                function makeChart_Other(players){

                    let list = players.map(function(d) {return d.WeaponName});
                    //여기서 문제가 생긴거임
                    let weapons = players.map(function(d) {
                        switch(label) {
                            case 'Mk14' :
                                return d.Mk14
                                break;
                            case 'SLR' :
                                return d.SLR
                                break;
                            case 'SKS' :
                                return d.SKS
                                break
                            case 'QBU' :
                                return d.QBU
                                break;
                            case 'Mini14' :
                                return d.Mini14;
                                break;
                            case 'VSS' :
                                return d.VSS
                                break;
                            case 'Sawed-Off' :
                                return d.Sawed-Off
                            case 'R1895' :
                                return d.R1895
                            case 'R45' :
                                return d.R45
                            case 'P1911' :
                                return d.P1911
                            case 'P92' :
                                return d.P92
                            case 'P18C' :
                                return d.P18C
                            case 'Skorpion' :
                                return d.Skorpion
                            case 'S686' :
                                return d.S686
                            case 'S1897' :
                                return d.S1897
                            case 'S12K' :
                                return d.S12K
                            case 'AWM' :
                                return d.AWM
                            case 'M24' :
                                return d.M24
                            case 'Kar98k' :
                                return d.Kar98k
                            case 'Win94' :
                                return d.Win94
                            case 'Vector' :
                                return d.Vector
                            case 'MicroUZI' :
                                return d.MicroUZI
                            case 'PP-Bizon' :
                                return d.PP-Bizon
                            case 'MP5K' :
                                return d.MP5K
                            case 'Thompson' :
                                return d.Thompson
                            case 'UMP9' :
                                return d.UMP9
                            case 'Groza' :
                                return d.Groza
                            case 'AKM' :
                                return d.AKM
                            case 'M762' :
                                return d.M762
                            case 'MK47Mutant' :
                                return d.MK47Mutant
                            case 'AUG' :
                                return d.AUG
                            case 'SCAR-L' :
                                return d.SCAR_L
                            case 'M416' :
                                return d.M416
                            case 'M16A4' :
                                return d.M16A4
                            case 'G36C' :
                                return d.G36C
                            case 'OBZ' :
                                return d.OBZ
                            case 'DP_28' :
                                return d.DP_28
                            default :
                                break;
                            }
                    });
            
                    let chart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: list,
                        datasets: [
                        {
                        label : label,
                        data: weapons,
                        normalized: true,
                        borderColor : "rgba(53, 104, 179, 1)",
                        backgroundColor : "rgba(53, 104, 179, 0.6)"
                        }   
                            ]
                        },
                    });
                }
                //delete funtion
                deleteBtn.addEventListener('click', function() {
                    let parent = newDiv.parentNode;
                    parent.replaceChild(oldCanvas, newDiv);
                    parent.insertBefore(pieButton, oldCanvas);
                })
            }
        }
    };
}

let pie = document.getElementById('pie-dmrifle');

//버튼 별 pie chart
const btnPie = document.querySelector(".btn-pie");
        dmRifle = btnPie.querySelector(".DMRifle");
        pistol = btnPie.querySelector(".Pistol");
        rifle = btnPie.querySelector(".Rifle");
        shot = btnPie.querySelector(".Shot");
        sniper = btnPie.querySelector(".Sniper");
        sub = btnPie.querySelector(".Sub");

        //총기별 차트 생성
        dmRifle.onclick = function() {
          let data = './csv/killCounts/erangel/DMRifle_ER.csv';
          let data2 = './csv/weapons/DMRifle.csv';
          makePieChart(data,data2);
          chart.destroy();
        }

        pistol.onclick = function() {
          let data = './csv/killCounts/erangel/pistol_ER.csv';
          let data2 = './csv/weapons/Pistol.csv';
          makePieChart(data,data2);
        }

        rifle.onclick = function() {
          let data = './csv/killCounts/erangel/rifle_ER.csv';
          let data2 = './csv/weapons/Rifle.csv';
          makePieChart(data,data2);
        }

        shot.onclick = function() {
          let data = './csv/killCounts/erangel/shot_ER.csv';
          let data2 = './csv/weapons/Shotgun.csv';
          makePieChart(data,data2);
        }

        sniper.onclick = function() {
          let data = './csv/killCounts/erangel/sniper_ER.csv';
          let data2 = './csv/weapons/Sniper Rifle.csv';

          makePieChart(data,data2);
        }

        sub.onclick = function() {
          let data = './csv/killCounts/erangel/sub_ER.csv';
          let data2 = './csv/weapons/Submachine.csv';
          makePieChart(data,data2);
        }

