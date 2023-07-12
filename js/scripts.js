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
        let cellNumber = cell.id;
        xCell = true;
        clickCells(cell, player);
        player = "O";
        xWin.push(cellNumber);
        console.log(xWin);
      } 
    } else if (player === "O") {
      if (xCell === false && oCell === false) {
        let cellNumber = cell.id;
        oCell = true;
        clickCells(cell, player);
        player = "X";
        oWin.push(cellNumber);
        console.log(oWin);
      }
  }
  checkWin(player);
  });
});


function clickCells(cell, player) {
  const takeBox = document.createElement("p");
  takeBox.append(player);
  cell.append(takeBox);
}

function checkWin(player) {
  let winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  let winNumbers = [];
  if (player === "O") {
    winNumbers = xWin.map(Number);
    console.log(xWin);
  } else {
    winNumbers = oWin.map(Number);
    console.log(oWin);
  }
    for (let i = 0; i < winConditions.length; i++) {
      let iWin = winConditions[i];
      let yesWin  = iWin.every(function(num) {
        return winNumbers.includes(num);
      });
      if (yesWin === true) {
        console.log("win");
      }
    }
}
