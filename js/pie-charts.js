console.log("reaady");

// Callback that draws the pie chart for TRI
function drawSarahChart() {

  // Create the data table for TRI.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Category');
  data.addColumn('number', 'TRI Emissions');
  data.addRows([
    ['Top 100',     273299501],
    ['All other facilities (13,000+)',      477475186]
  ]);

  // Set options for TRI pie chart.
  var options = {title:'Top 100 TRI',};
                 //max-width: 100%,
                 //height:300};

  // Instantiate and draw the chart for TRI
  var chart = new google.visualization.PieChart(document.getElementById('TRI_chart'));
  chart.draw(data, options);
}

// Callback that draws the pie chart for GHG
function drawAnthonyChart() {

  // Create the data table for Anthony's pizza.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Category');
  data.addColumn('number', 'GHG Emissions');
  data.addRows([
    ['Top 100', 1038212419],
    ['Other Facilities', 3064711132]
  ]);

  // Set options for Anthony's pie chart.
  var options = {title:'Top 100 GHG',};
                 //max-width: 100%,
                 //height:300};

  // Instantiate and draw the chart for Anthony's pizza.
  var chart = new google.visualization.PieChart(document.getElementById('GHG_chart'));
  chart.draw(data, options);
}
