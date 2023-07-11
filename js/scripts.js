let cells = document.querySelectorAll('.cell');
let player = "X";
let xWin = [];
let oWin = [];


cells.forEach(function(cell) {
  let xCell = false;
  let oCell = false;

  cell.addEventListener('click', function() {
    if (player === "X") {
      if (xCell === false && oCell === false) {
        let cellNumber = cell.textContent;
        xCell = true;
        clickCells(cell, player);
        player = "O";
        xWin.push(cellNumber);
        console.log(xWin);
      } 
    } else if (player === "O") {
      if (xCell === false && oCell === false) {
        let cellNumber = cell.textContent;
        oCell = true;
        clickCells(cell, player);
        player = "X";
        oWin.push(cellNumber);
        console.log(oWin);
      }
  }
  checkWin();
  });
});


function clickCells(cell, player) {
  const takeBox = document.createElement("p");
  takeBox.append(player);
  cell.append(takeBox);
}

function checkWin () {
  let win1 = ['1', '2', '3'];
  let checkX = xWin.includes(win1);
  console.log(xWin.includes(win1));
  }
