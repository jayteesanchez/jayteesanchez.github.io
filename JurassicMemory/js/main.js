console.log('codes working!');
// defining the game board
var $gameBoard= $('body #container #mainSquare');
// filling the game board with first images

function makeGameBoard(){
  for (var i = 0; i < 18; i++) {
  var newImage= document.createElement("button");
  var imgH1= document.createElement("H1");
  $gameBoard.append(newImage);
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


function setImages(){
  for (var i= 0; i< 18; i++){
  var $button= $('#mainSquare button');
  $button.eq(i).text(images[i]);
  console.log(images[i]);
}
}
// // output images then hide them
// var output = "<ol>";
// for (var i = 0; i < 16; i++) {
//   output += "<li>";
//   output += "<img src = '" + images[i] + "'/>";
//   output += "</li>";
// }
// output += "</ol>";
// document.getElementById("container").innerHTML = output;
// $("img").hide();

// var guess1 = "";
// var guess2 = "";
// var count = 0;

// $("li").click(function() {
//   if ((count < 2) &&  ($(this).children("img").hasClass("face-up")) === false) {

// Game start

// function gameStart(){
 // randomize game board function
//     alert ('The game is about to begin!');
// }

// Determining round winner

function roundWinner(){
  if(gameBoard === null){
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
}else{
    return false;
}
}
// Changing Player Moves

var move= player1;

function nextMove(){
  if(player === player1){
    move= player2;
}else{
    move=player1;
}

}
