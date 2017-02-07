function drawColumnChart() {
  var data = new google.visualization.DataTable();
    data.addColumn('string', 'Company');
    data.addColumn('number', 'Contributions');

    data.addRows([
      ['Southern Co', {v: 10090000, f: '$10,090,000'}],
      ['Duke Energy', {v: 5350000, f: '$5,350,000'}],
      ['American Electric Power', {v: 4513286, f: '$4,513,286'}],
      ['NRG Energy', {v: 710000, f: '$710,000'}]
    ]);

  var options = {
    bars: 'vertical',
    vAxis: {format: 'short'},
    height: 400,
    colors: ['#ce9252'],
    legend: {
      position: 'none',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('column_div'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');


}
