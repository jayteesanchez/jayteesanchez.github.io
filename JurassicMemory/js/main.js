console.log('codes working!');

// defining the game board
  var $gameBoard= $('body #container #mainSquare');

//  holder for click
  var clickedSquares= [];

// Click Counter
  var sClicks= 0;

// Game status text holder
  var $gameText= $('body #container #mainSquare #gameText');

// Starting with Player 1
  var move = 'Player 1';

// variable to hold matching images
  var images= [];
// Array used to hold matches
  var guess= [];
// Variable for determining winner
  var matchCounter=0;
// making the gameboard by adding buttons
function makeGameBoard(){
  for (var i = 0; i < 18; i++) {
    var newImage= document.createElement("button");
    var imgli= document.createElement("li");
    $gameBoard.append(newImage);
    $(newImage).attr("class", "egg");
    $(newImage).attr("id", i);
    newImage.appendChild(imgli);
    $gameBoard.css('background-color', 'rgba(0,0,0,0.7)');
 }
}

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
// Plays the Theme on Start
  var audio = new Audio('media/Jurassic Park.mp3');
  audio.play();
}

// event listener for the button that will start gameplay
  var begin= document.getElementById('begin');
  var header= document.getElementById('title');
  begin.addEventListener('click', function(){
    $(begin).css('display', 'none');
    $(header).css('background-image', 'url("http://i.fonts2u.com/ju/jurassic-park.png")');
    newGameStart();
  });

// Changing Player Moves, Doesnt work yet
function nextMove(){
    console.log(move);
  if(move === 'Player 1') return move = 'Player 2';
  if(move === 'Player 2') return move = 'Player 1';

}

// Determines if match is made
function checkMatch(){
  if(sClicks === 1){
    console.log("one more click");
    return;
  }else if(parseInt(guess[0].split("").splice(10, 1)) === parseInt(guess[1].split("").splice(10, 1))){
    $gameText.text("You know dinosaurs, keep going!");
    console.log("MATCH");
    sClicks= 0;
    clickedSquares= [];
    guess=[];
    matchCount();
    nextMove();
    $gameText.text(move + " it's your turn!" );
  }else if(parseInt(guess[0].split("").splice(10, 1)) !== parseInt(guess[1].split("").splice(10, 1))){
    $gameText.text("Not a match Try Again!");
    nextMove();
    window.setTimeout("reHide()", 1100);
  }else{
    nextMove();
    window.setTimeout("reHide()", 1100);
  }
}

// determining the round winner
function matchCount(){
  // var matchCount1= 0;
  // var matchCount2= 0;
  if(move === 'Player 1'){
    matchCounter++;
    getRoundWinner();
  }else{
    // matchCount2++;
    getRoundWinner();
  }
}

// Determining round winner
function getRoundWinner(){
  // var roundCount1=0;
  // var roundCount2=0;
      if(matchCounter === 9){
      $gameText.html("You win!");

        // return roundCount1++;
        // getWinner(roundCount1, roundCount2);
      // }else if(matchCount2 === 5){
      //   return roundCount2++;
      //   getWinner(roundCount1, roundCount2);
      }else{
        return;
      }
}

// Comparing Match counts to get Winner
// function getWinner(roundCount1, roundCount2){
//   if(roundCount1 === 3){
//         $gameText.text('Player 1 is the winner!');
//     newGameStart();
//   }else if(roundCount2 === 3){
//         $gameText.text('Player 2 is the winner!');
//     newGameStart();
//   }else{
//     return;
//   }
// }

// resetting the images if there is no match
function reHide(){
  $gameText.text(move + " it's your turn!" );
  $(clickedSquares).eq(0).css('display', 'none');
  console.log($(clickedSquares).eq(0));
  $(clickedSquares).eq(0).parent().toggleClass('egg');
  $(clickedSquares).eq(1).css('display', 'none');
  $(clickedSquares).eq(1).parent().toggleClass('egg');
  console.log('reHide works');
  sClicks= 0;
  clickedSquares= [];
  guess=[];
}

// event listener
$('#mainSquare').on('click', 'button', function(event){
  console.log(event)
  if(event.target.className === ''){
    return;
  }else if(sClicks < 2){
    $(event.target).children().css('display', 'block');
    $(event.target).toggleClass('egg');
    clickedSquares.push(event.target.children[0]);
    guess.push(images[event.target.id]);
    sClicks++;
    checkMatch();
  }else{
  return;
    }
});
