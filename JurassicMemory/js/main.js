console.log('codes working!');

// defining the game board
var $gameBoard= $('body #container #mainSquare');

// making the gameboard by adding buttons
function makeGameBoard(){
  for (var i = 0; i < 18; i++) {
  var newImage= document.createElement("button");
  var imgH1= document.createElement("H1");
  $gameBoard.append(newImage);
  $(newImage).attr("class", "egg");
  $(newImage).attr("id", i);
  newImage.appendChild(imgH1);
 }
}

// variable to hold matching images
var images= [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

// get images, place them in an array & randomize the order
// function getImages(){
// for (var i = 0; i < 9; i++) {
//   var img =  $('img + i');
//   images.push(img);
//   images.push(img);
// }
// randomizeImages();
// }
// randomize array of images
function randomizeImages(){
  Array.prototype.randomize = function()
  {
    var i = this.length, j, temp;
    while ( --i )
    {
      j = Math.floor( Math.random() * (i - 1) );
      temp = this[i];
      this[i] = this[j];
      this[j] = temp;
    }
  };
  images.randomize();
  setImages();
  return images;
}

// outputting the randomized image array into the created buttons
function setImages(){
  for (var i= 0; i< 18; i++){
  var $button= $('#mainSquare button H1');
  $button.eq(i).append(images[i]).css('"display", "none"');
  console.log(images[i]);
}
}

// Starting a New game
function newGameStart(){
  makeGameBoard();
  randomizeImages();
  setImages();
}
// Determining round winner

function roundWinner(){
  if(matchCount1 === 5){
    return true;
  }else{
    return false;
  }
}

// Comparing Match counts to get Winner
function getWinner(roundCount1, roundCount2){
  if(roundCount1 > roundCount2){
    return player1;
  }else {
    return player2;
}
}
// Determines if match is made
function checkMatch(){
  if(clickedSquare2 === clickedSquare1){
    return true;
    matchCount();
}else{
    return false;
}
}
// Changing Player Moves

var move= player1;

function nextMove(){
  if(move === player1){
    move= player2;
}else{
    move=player1;
}

}
// determining the round winner
function matchCount(){
  var matchCount1= 0;
  var matchCount2= 0;
  if(move= player1){
    matchCount1++;
  }else{
    matchCount2++;
  }
}


// event listener
  // $gameBoard.on('click', function(){
  //   $this.css('' '')
  // } );

