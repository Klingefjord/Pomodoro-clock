google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart(per, color) {
       if (!per) {
         return;
       }

       console.log("test!");

       var emptyRing = 100 - per;
       var data = google.visualization.arrayToDataTable([
         ['Pac Man', 'Percentage'],
         ['', emptyRing],
         ['', per]
       ]);

       var options = {
         backgroundColor: "transparent",
         pieSliceBorderColor: "transparent",
         borderColor: "transparent",
         enableInteractivity: false,
         chartArea:{left:0, top:0, width:'100%',height:'100%'},
         legend: 'none',
         pieSliceText: 'none',
         pieStartAngle: 0,
         tooltip: { trigger: 'none' },
         slices: {
           0: { color: color },
           1: { color: 'transparent' }
         }
       };

       var chart = new google.visualization.PieChart(document.getElementById('spinner-wrapper'));
       chart.draw(data, options);
     }
