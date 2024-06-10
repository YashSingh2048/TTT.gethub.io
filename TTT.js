let board = ['', '', '', '', '', '', '', '', '']; // Represents the Tic Tac Toe board
let currentPlayer = 'X'; // Player is 'X' and computer is 'O'
let scorePlayer = 0;
let scoreComputer = 0;
let gameOver = false;

// Function to display the Tic Tac Toe board
function displayBoard() {
    let boardElement = document.getElementById('board');
    boardElement.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = board[i];
        cell.addEventListener('click', () => {
            if (!gameOver && board[i] === '') {
                board[i] = currentPlayer;
                displayBoard();
                checkWinner();
                if (!gameOver) {
                    computerMove();
                    displayBoard();
                    checkWinner();
                }
            }
        });
        boardElement.appendChild(cell);
    }
}

// Function to make computer move
function computerMove() {
    let emptyCells = [];
    for (let i = 0; i < 9; i++) {
        if (board[i] === '') {
            emptyCells.push(i);
        }
    }
    if (emptyCells.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyCells.length);
        board[emptyCells[randomIndex]] = 'O';
    }
}

// Function to check for a winner or a tie
function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
            if (board[a] === 'X') {
                scorePlayer++;
                document.getElementById('scorePlayer').innerText = scorePlayer;
            } else {
                scoreComputer++;
                document.getElementById('scoreComputer').innerText = scoreComputer;
            }
            alert(board[a] + ' wins!');
            gameOver = true;
            return;
        }
    }
    if (!board.includes('')) {
        alert('It\'s a tie!');
        gameOver = true;
        return;
    }
}

// Function to reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    displayBoard();
}

// Initialize the game
displayBoard();
