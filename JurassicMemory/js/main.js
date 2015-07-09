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
}
}
// Starting a New game
function newGameStart(){
  makeGameBoard();
  getImages();
  nextMove();
}
// Determining round winner
function getRoundWinner(matchCount1, matchCount2){
  var roundCount1=0;
  var roundCount2=0;
      if(matchCount1 === 5){
        return roundCount1++;
        getWinner(roundCount1, roundCount2);
      }else if(matchCount2 === 5){
        return roundCount2++;
        getWinner(roundCount1, roundCount2);
      }else{
        return;
      }

}
// Comparing Match counts to get Winner
function getWinner(roundCount1, roundCount2){
  if(roundCount1 === 3){
    alert('player 1 is the winner!');
    newGameStart();
  }else if(roundCount2 === 3){
    alert('player 2 is the winner!');
    newGameStart();
  }else{
    return;
  }
}
// Determines if match is made
function checkMatch(){
  if(sClicks === 1){
    return;
}else if(clickedSquares[0] === clickedSquares[1]){
    alert('match made!');
    matchCount();
}else if(clickedSquares[0] !== clickedSquares[1]){
    alert('No Match, try again!');
    return clickedSquares;
    reHide();
}else{
  reHide();
}
}
// Changing Player Moves

var move= 'player1';

function nextMove(move){
  if(move === 'player1'){
    move= 'player2';
}else{
    move= 'player1';
}

}
// determining the round winner
function matchCount(){
  var matchCount1= 0;
  var matchCount2= 0;
  if(move= player1){
    matchCount1++;
    getRoundWinner(matchCount1, matchCount2);
    nextMove();
  }else{
    matchCount2++;
    getRoundWinner(matchCount1, matchCount2);
    nextMove();
  }
}
// resetting the images if there is not match
function reHide(){
  $(clickedSquares[0]).css('display', 'none');
  $(clickedSquares[0]).parent().toggleClass('egg');
  $(clickedSquares[1]).css('display', 'none');
  $(clickedSquares[1]).parent().toggleClass('egg');
  var sClicks= 0;
  var clickedSquares= [];
}

var clickedSquares= [];

// Click Counter
var sClicks= 0;


// event listener
  mainSquare.addEventListener('click', function getClicks(event){
    if(sClicks === 0){
      $(event.srcElement.children[0]).css('display', 'block');
      $(event.srcElement).toggleClass('egg');
      clickedSquares.push($(event.srcElement.children[0]));
      sClicks++;
      console.log(clickedSquares);

  }else if(sClicks === 1){
      $(event.srcElement.children[0]).css('display', 'block');
      $(event.srcElement).toggleClass('egg');
      clickedSquares.push($(event.srcElement.children[0]));
      sClicks++;
      console.log(clickedSquares);
      checkMatch();
  }else{
    clicks= 0;
  }
});


