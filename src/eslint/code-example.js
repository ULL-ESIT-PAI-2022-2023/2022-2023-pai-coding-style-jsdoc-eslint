var rows = prompt('How many rows for your multiplication table?');
var cols = prompt('How many rows for your multiplication table?');
if (rows == "" || rows == null)
  rows = 10;
if (cols == "" || rows == null)
  cols = 10;
createTable(rows,cols);
