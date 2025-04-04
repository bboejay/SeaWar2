const boardSize = 10;
const board = document.getElementById('game-board');

// Initialize game board
for (let i = 0; i < boardSize * boardSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.addEventListener('click', handleCellClick);
  board.appendChild(cell);
}

function handleCellClick(event) {
  const cell = event.target;
  // Randomly determine hit or miss for demo purposes
  if (Math.random() < 0.3) {
    cell.classList.add('hit');
  } else {
    cell.classList.add('miss');
  }
}