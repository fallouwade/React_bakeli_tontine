// const xValuess = [50,60,70,80,90,100,110,120,130,140,150];
//       const yValuess = [7,8,8,9,9,9,10,11,14,14,15];

//       new Chart('myCharts', {
//         type: "line",
//         data: {
//           labels: xValuess,
//           datasets: [{
//             fill: false,
//             lineTension: 0,
//             backgroundColor: "rgba(0,0,255,1.0)",
//             borderColor: "rgba(0,0,255,0.1)",
//             data: yValuess
//           }]
//         },
//         options: {
//           legend: {display: false},
//           scales: {
//             yAxes: [{ticks: {min: 6, max:16}}],
//           }
//         }
//       });

//        const xVallues = [ "Terminer", "Archiver", "En cours", "Bloquer", ];
//     const yVallues = [55, 49, 44, 24, 15];
//     const barColor= [

//       "green",
//       "blue",
//       "pink",
//       "#e8c3b9",
      
//     ];

//     new Chart("myChart", {
//       type: "doughnut",
//       data: {
//         labels: xVallues,
//         datasets: [{
//           backgroundColor: barColor,
//           data: yVallues
//         }]
//       },
//       options: {
//         title: {
//           display: true,
          
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//       }
//     });