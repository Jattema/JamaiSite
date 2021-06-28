/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];


let board;
let turn = 'X';
let win;


const squares = Array.from(document.querySelectorAll('#board div'));


document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', createBoard);



function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let seek = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[seek] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};

function createBoard() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    turn = 'X';
    render();
};

function render() {
    board.forEach(function(mark, index) {
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

createBoard();

const playerNameInputField = document.querySelector('.input-field-player-name');
const addPlayerButton = document.querySelector('.add-player-button');

const playerOneLabel = document.querySelector('.player-one-label');

const playerTwoLabel = document.querySelector('.player-two-label');

const players = [];

if (addPlayerButton) {
    addPlayerButton.addEventListener("click", addPlayer);
}

function addPlayer() {
    if (players.length >= 2) {
        alert("There are 2 players (or more) already. Press Reset button to start a new game.");   
        players.pop();    
        return;
    }

    const playerName = playerNameInputField.value;
    let symbol = "X";
    if (players.length == 1) {
        symbol = "O";
    }
    
    const Player1 = new Player(
    Name = playerName,
    points = 0
    ); 
    players.push(Player1)
    printPlayers();
    console.log(players)
}

function printPlayers() {
    playerNameInputField.value = "";
    if (players.length == 0) {
        console.log("No one to play");
        playerOneLabel.innerHTML = "Enter player one..";
        playerTwoLabel.innerHTML = "Enter player two..";

        return;
    }

    let playersText = "";


    for(let i = 0; i < players.length; i++) {
        let player = players[i];

        if (i == 0) {
             playerOneLabel.textContent = player.getName(), player.symbol, player.points;
        } else if (i == 1) {            
            playerTwoLabel.textContent = player.getName(), player.symbol, player.points;
            console.log("Hi");
        } else {
            return;
        }
    }
}

class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
        this.points = 0;
    }

    getName() {
    return this.name;
    }

    addPoints() {
        this.points += 1;
    }
}