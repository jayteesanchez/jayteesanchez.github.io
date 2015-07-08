console.log('codes working!');

// defining the game board
var $gameBoard= $('body #container #mainSquare');

// making the gameboard by adding buttons
function makeGameBoard(){
  for (var i = 0; i < 18; i++) {
  var newImage= document.createElement("button");
  var imgli= document.createElement("li");
  $gameBoard.append(newImage);
  $(newImage).attr("class", "egg");
  $(newImage).attr("id", i);
  newImage.appendChild(imgli);
 }

}

// variable to hold matching images
var images= [];

// get images, place them in an array & randomize the order
function getImages(){
for (var i = 1; i < 10; i++) {
  var img = 'media/dino' + i + '.gif';
  images.push(img);
  images.push(img);
}
randomizeImages();
}

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
  var $button= $('#mainSquare button li');
  for (var i= 0; i< 18; i++){
  $button.eq(i).css("background-image", "url(" + images[i] + ")");
  console.log(images[i]);
}
}

// Starting a New game
function newGameStart(){
  makeGameBoard();
  getImages();
  nextMove();

}
// Determining round winner

function getRoundWinner(move){
  var roundCount1=0;
  var roundCount2=0;
  if(move=== player1){
      if(matchCount === 5){
        return roundCount1++;
        getWinner(roundCount1, roundCount2);
      }else{
      return roundCount2++;
      getWinner(roundCount1, roundCount2);
        }
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
function checkMatch(move){
  if(clickedSquare2 === clickedSquare1){
    return true;
    matchCount(move);
}else{
    return false;
}
}
// Changing Player Moves

var move= player1;

function nextMove(move){
  if(move === player1){
    move= player2;
}else{
    move=player1;
}

}
// determining the round winner
function matchCount(move){
  var matchCount1= 0;
  var matchCount2= 0;
  if(move= player1){
    matchCount1++;
    getRoundWinner(move);
    nextMove();
  }else{
    matchCount2++;
    getRoundWinner(move);
    nextMove();
  }
}


var clickedSquare1= null;
var clickedSquare2= null;

// event listener

  mainSquare.addEventListener('click', function(event){
    var clicks= 0
    if(clicks=== 0){
      $(event.srcElement.children[0]).css('display', 'block');
      $(event.srcElement).toggleClass('egg');
      return move;
      clicks++;
      return clickedSquare1= $(event.srcElement.children[0]);
      checkMatch(move);

  }else{
      $(event.srcElement.children[0]).css('display', 'block');
      $(event.srcElement).toggleClass('egg');
      return move;
      clicks++;
      return clickedSquare2= $(event.srcElement.children[0]);
      checkMatch(move);
  }
});


