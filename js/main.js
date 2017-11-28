var timeLeftElement = document.getElementById('timeLeft')
var resetBtn = document.getElementById('clear')
var pointsElementA = document.getElementById('pointsA')
var pointsElementB = document.getElementById('pointsB')
var playerTurn = document.getElementById('turn') 
var speed = 1000
var score = 0 
var seconds = 30
var playerAScore = null
var playerBScore = null
var timesPlayed = 0
var currentPlayer = 'playerA' 
var fasterButton = document.getElementById('start')
var key = document.getElementsByClassName('key');
var divs = document.querySelectorAll("key div");
var  tryMe = document.getElementById('try');
var theIntervalId = null
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var mydiv = document.getElementsByClassName('.mydiv');

document.addEventListener('keydown',function(e){     
  console.log(e.keyCode)
  const keyDiv = document.querySelector(`div[data-key='${e.keyCode}']`)
  var rect = keyDiv.getBoundingClientRect()
  var y = rect.top;
  console.log(y)

  // if(y < -346.5){
  //   minusScore();
  // } 
  if(y >= 0 && y <= window.innerHeight) {
    console.log('inside')
  } else {
    score = score - 10
  }

  switch(e.keyCode) {
    case 88:
    case 65:
    case 83:
    case 68:
    case 70:
    case 71:
    case 72:
    case 74:
    case 75:
    case 76:
    case 186:
    case 85:
      addScore()
    }
});




// document.addEventListener('keydown',function(e){
//   if(e.keyCode == 65 ) {
//       minusScore();
//   } 
// });


 function resetGame(){
  clearInterval(theIntervalId)
  var tired = document.querySelectorAll(".key");
  for (var i=0; i < tired.length; i++){
    if(tired.length > i){
      tired[i].classList.add('key');
      tired[i].classList.remove('key1');
      tired[i].classList.remove('key2');
      tired[i].classList.remove('key3');
      clearInterval(theIntervalId);
    } else{ 
      console.log('dummy')
    };
  score = 0
  pointsElementA.innerHTML = ("Score A: 0") 
  pointsElementB.innerHTML = ("Score B: 0")

  playerTurn.innerHtml = (`${!currentPlayer}`)
  speed = 1000
  seconds = 30
  timeLeftElement.innerHTML = ("Time Left: " + seconds + " seconds")
  
}}




function myFunction() {
  // reset the time on the DOM
  resetGame();
  var tired = document.querySelectorAll(".key");
  
  setTimeout(() => {
    for (var i=0; i < tired.length; i++){
      if(tired.length > i){
        tired[i].classList.toggle('key1')
      }else{
        console.log('fool')
      }
    }
  }, 100)

  theIntervalId = setInterval(countDown, speed)
}


function myFunction2() {
  resetGame();
  clearInterval(theIntervalId);
  var tired = document.querySelectorAll(".key");
  for (var i=0; i < tired.length; i++){
    if(tired.length > i){
      tired[i].classList.toggle('key2') 
    }else{
      console.log('fool')
    }
  }
  theIntervalId = setInterval(countDown, speed)
}

function myFunction3() {
  clearInterval(theIntervalId);
  resetGame();
  var tired = document.querySelectorAll(".key");
  for (var i=0; i < tired.length; i++){
    if(tired.length > i){
      tired[i].classList.toggle('key3')
    }else{
      console.log('fool')
    }
  }
  theIntervalId = setInterval(countDown, speed)
}

  //<---This click function allows the players to click on the Banana Image, after the Banana button is clicked--->//
      function addScore(){
       
            if (currentPlayer === 'playerA' ){
          score = score + 10;
          
          pointsElementA.innerHTML = ("Score A: " + score )
      } else if (currentPlayer === 'playerB' ){
          score = score + 10;
          pointsElementB.innerHTML = ("Score B: " + score)
          }
      }

      function minusScore(){
        if(currentPlayer === 'playerA'){
         
          score = score - 5;

          pointsElementA.innertHTML = ("Score A: -" + score)

        } else if (currentPlayer === 'playerB') {
          score = score - 5;

          pointsElementA.innerHTML = ('Score B: -' + score)
        }
      }
      // theIntervalId = setInterval(countDown, speed,)
      
  //<---This if statement allows for score increases, size decreases, speed increases for each player--->//
    function countDown(){
      seconds = seconds - 1;
      timeLeftElement.innerHTML = ( "Time Left: " + seconds + " seconds");
    
  //<---This if statement makes sure once the timer hits 0 seconds the Player A turn is over and Player B can play--->
      if (seconds <= 0){
          currentPlayer = "playerB" //kyle
  // //<---This if statement allows us to see that PlayerB should be playing plus it puts the speed, interval and size back to its orginal properties--->//
  
  if (currentPlayer === "playerB"){
       
          playerTurn.innerHTML = ('Player B')};
          alert("Your score is " + score);
          
            
  // //<---This if statement makes sure that score based off how many times the banana was clicked is assigned to the right player the first time its played--->//
          if(playerAScore == null){
              playerAScore = score
          } else {
              playerBScore = score
          }
              timesPlayed += 1
  // //<---These if statements makes sure an alert is displayed to let us know who won based off a comparison of player score after the second player plays the game--->//
          if(timesPlayed == 2) {
              if(playerAScore > playerBScore) {
                alert("Player 1 wins")
                 resetGame();
              
              }
              else if(playerBScore > playerAScore) {
                alert("Player 2 wins")
                resetGame();
                 
              } else { 
                  alert ("Its a Tie you both are AWESOME")
                  resetGame();
              }
          }
        
  //<---These lines of code allow the timer to start counting down again for player B--->//
          theIntervalId = setInterval(countDown,1000)
          seconds = 30
          timeLeftElement.innerHTML = "Time Left: " + seconds + " seconds"
          score = 0
      } 
    }
function playSound(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

if(!audio)return;
audio.currentTime = 0;
audio.play();
key.classList.add('playing');

};

function removeTransition(e){
  var elements = document.getElementsByClassName("key");
  var i;
  for (i = 0; i < elements.length; i++) {
    this.classList.remove('playing');
if (e.propertyName !== 'transform')return;
this.classList.remove('playing');
}}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


  
      
     

 


window.addEventListener('keydown', playSound)
// window.addEventListener('keydown', addScore)


