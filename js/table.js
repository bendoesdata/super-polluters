//GHG table
var showTable = $('#GHG_table');

function drawGhgTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Parent Company');
  data.addColumn('number', 'GHG (lbs)');
  data.addColumn('number', 'Facilities');
  data.addRows([

    ['American Electric Power',97342465,31],
    ['Nrg Energy Inc',82165913,46],
    ['Us Government',72771322,57],
    ['Duke Energy Corp',64394740,37],
    ['Southern Co',62395902,22],
    ['Luminant Generation Company Llc',51929011,12],
    ['Dynegy Inc',43709570,15],
    ['Lg&e And Ku Energy Llc',34878076,9],
    ['Dte Energy Co',34585299,21],
    ['Calpine Corp',33282821,45]

  ]);

data.setProperty(0, 0, 'style', 'width:100px');

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%', allowHtml: true});
}

// On user click, draw GHG table
$(document).ready(function(){
    $('#GHG_table').on('click',drawGhgTable)
});

// TRI table
function drawTriTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Parent Company');
  data.addColumn('number', 'TRI (t)');
  data.addColumn('number', 'Facilities');
  data.addRows([

    ['International Paper Co',39911162,28],
    ['Koch Industries Inc',29295480,123],
    ['Southern Co',21143857,26],
    ['Basin Electric',19935925,3],
    ['American Electric Power',19619440,20],
    ['Nrg Energy Inc',19325802,30],
    ['Duke Energy Corp',17797491,28],
    ['US Tennessee Valley Authority (Federal company)',11818976,19],
    ['Firstenergy Corp',11481282,9],
    ['Ppl Corp',11246374,10]


  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}

// On user click, draw TRI table
$(document).ready(function(){
    $('#TRI_table').on('click',drawTriTable)
});

// Dual  table
function drawDualTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Parent Company');
  data.addColumn('number', 'GHG (lbs)');
  data.addColumn('number', 'TRI (t)');
  data.addRows([

    ['American Electric Power',97342465, 19619440],
    ['NRG Energy Inc',82165913, 19325802],
    ['US Government',72771322,11818976],
    ['Duke Energy Corp',64394740,17797491],
    ['Southern Co',62395902,21143857]

  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}

// On user click, draw Dua table
$(document).ready(function(){
    $('#Dual_table').on('click',drawDualTable)
});
