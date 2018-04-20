$("form").submit(function(event) {


  var canvas = $("#pixel_canvas");

  var numOfRows = $('#input_height').val();
  var numOfColumns = $('#input_width').val();

  console.log(numOfRows);
  console.log(numOfColumns);

  var row = [];
  for (var i = 0; i < numOfRows; i++) {
    row.push("<tr></tr>");
  }

  console.log(row);
  canvas.append(row);


  var column = [];
  for (var y = 0; y < numOfColumns; y++) {
    column.push("<td></td>");
  }
  console.log(column);



  $('tr').each(function() {
    $(this).append(column);
  });


  $("td").click(
    function() {
      var cssColor = $('#colorPicker').val();
      console.log("css color  " + cssColor);
      $(this).css({
        "background-color": cssColor
      });
    }
  );

  event.preventDefault();
});
