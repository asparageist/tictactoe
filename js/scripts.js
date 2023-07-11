let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
  cell.addEventListener('click', function() {
    const makeX = document.createElement("p");
    makeX.append("X");
    cell.append(makeX);
  })
})

