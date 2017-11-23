var timeLeftElement = $('#timeLeft')
var resetBtn = $('#clear')
var pointsElementA = $('#pointsA')
var pointsElementB = $('#pointsB')
var playerTurn = $('.turn') 
var speed = 1000
var score = 0 
var seconds = 30
var playerAScore = null
var playerBScore = null
var timesPlayed = 0
var currentPlayer = 'playerA' 
var newBanana= $('#start')

  //<---This click function allows the players to click on the Banana Image, after the Banana button is clicked--->//
      window.addEventListener('keydown', function(){
            if (currentPlayer === 'playerA'){
          score = score + 10
          pointsElementA.html("Score A: " + score )
      } else if (currentPlayer === 'playerB'){
          score = score + 10
          pointsElementB.html("Score B: " + score)
          }
          // theIntervalId = setInterval(countDown, speed)
          
      })
      theIntervalId = setInterval(countDown, speed)
      
  //<---This if statement allows for score increases, size decreases, speed increases for each player--->//
    function countDown(){
      seconds = seconds - 1;
      timeLeftElement.html( "Time Left: " + seconds + " seconds");
      
  //<---This if statement makes sure once the timer hits 0 seconds the Player A turn is over and Player B can play--->
      if (seconds <= 0){
          currentPlayer = "playerB" //kyle
  // //<---This if statement allows us to see that PlayerB should be playing plus it puts the speed, interval and size back to its orginal properties--->//
          if (currentPlayer === "playerB"){
          playerTurn.html('Player B')};
          clearInterval( theIntervalId );
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
              }
              else if(playerBScore > playerAScore) {
                  alert("Player 2 wins")
              } else { 
                  alert ("Its a Tie you both are AWESOME")
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
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
if(!audio)return;
audio.currentTime = 0;
audio.play();
key.classList.add('playing');
};

function removeTransition(e){
if (e.propertyName !== 'transform')return;
this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound)