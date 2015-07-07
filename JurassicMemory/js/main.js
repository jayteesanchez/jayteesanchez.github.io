console.log('codes working!');
// defining the game board
var gameBoard[
              [null, null, null, null],
              [null, null, null, null],
              [null, null, null, null]
];

// Comparing Match counts to get Winner
function getWinner(matchCount1, matchCount2){
  if(matchCount1 > matchCount2){
    return player1;
  }else {
    return player2;
}

// Determines if match is made
function checkMatch(){
  if(clickedSquare2 === clickedSquare1)
    return true;
}else{
    return false;
}

// Changing Player Moves

function nextMove(){
  if(player === player 1)
    move= player2;
}else{
    move=player1;
}
