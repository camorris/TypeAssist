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
var addKeysLoopInterval = null

resetBtn.addEventListener('click', function(e) {
  var x = 5
  if(x > 0 ){
  swal({
    title: "You Reset Everything",
    text: "Get Ready to Start Over",
    icon: "error",
    buttons: true,
    dangerMode: true,
  })
  }
})
document.addEventListener('keydown',function(e){     
  console.log(e.keyCode)
  const keyDiv = document.querySelector(`div[data-key='${e.keyCode}']`)
  var rect = keyDiv.getBoundingClientRect()
  var y = rect.top;
  console.log(y)


  if(y >= 0 && y <= window.innerHeight) {
    console.log('inside')
    switch(e.keyCode) {
      case 85:
      case 65:
      case 83:
      case 68:
      case 70:
      case 71:
      case 72:
      case 74:
      case 75:
      case 76:
      case 81:
      case 87:
      case 69:
      case 82:
      case 84:
      case 89:
      case 73:
      case 79:
      case 80:
      case 90:
      case 88:
      case 67:
      case 86:
      case 66:
      case 78:
      case 77:
        addScore()
    }
  } else {
    minusScore()
  }

});




 function resetGame(){
  clearInterval(theIntervalId);
  clearTimeout(addKeysLoopInterval);
  var keys = document.querySelectorAll(".key");
  for (let i=0; i < keys.length; i++){
    keys[i].classList.remove('key1');
    keys[i].classList.remove('key2');
    keys[i].classList.remove('key3');    
  }

  score = 0
  pointsElementA.innerHTML = ("Score A: 0") 
  pointsElementB.innerHTML = ("Score B: 0")

  playerTurn.innerHtml = (`${!currentPlayer}`)
  speed = 1000
  seconds = 30
  timeLeftElement.innerHTML = ("Time Left: " + seconds + " seconds")  
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function myFunction() {
  // reset the time on the DOM
  resetGame();
  clearInterval(theIntervalId); 
  var keys = Array.from(document.querySelectorAll(".key"));
  var randomKeys = shuffle(keys);
  
  addKeysLoopInterval = setTimeout(() => {
  
    var i = 0
    function loopAddClass() {
      setTimeout(()=> {
        console.log(randomKeys[i])
        randomKeys[i].classList.toggle('key1')
        i++                     //  increment the counter
        if (i < randomKeys.length) {            //  if the counter < 10, call the loop function
           loopAddClass();             //  ..  again which will trigger another 
        }       
      }, 1000)
    }
    loopAddClass()
  }, 100)

  console.log(addKeysLoopInterval)
  
  theIntervalId = setInterval(countDown, speed)
}


function myFunction2() {
  resetGame();
  clearInterval(theIntervalId); 
  var keys = Array.from(document.querySelectorAll(".key"));
  var randomKeys = shuffle(keys);
  setTimeout(() => {
   
    var i = 0
    function loopAddClass() {
      setTimeout(()=> {
        console.log(randomKeys[i])
        randomKeys[i].classList.toggle('key2')
        i++                     //  increment the counter
        if (i < randomKeys.length) {            //  if the counter < 10, call the loop function
           loopAddClass();             //  ..  again which will trigger another 
        }       
      }, 1000)
    }
    loopAddClass()
  }, 100)
  
  theIntervalId = setInterval(countDown, speed)
}

function myFunction3() {
  resetGame();
  clearInterval(theIntervalId); 
  var keys = Array.from(document.querySelectorAll(".key"));
  var randomKeys = shuffle(keys);
  setTimeout(() => {
    var i = 0
    function loopAddClass() {
      setTimeout(()=> {
        console.log(randomKeys[i])
        randomKeys[i].classList.toggle('key3')
        i++                     //  increment the counter
        if (i < randomKeys.length) {            //  if the counter < 10, call the loop function
           loopAddClass();             //  ..  again which will trigger another 
        }       
      }, 1000)
    }
    loopAddClass()
  }, 100)
  
  theIntervalId = setInterval(countDown, speed)
}

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
          pointsElementA.innerHTML = ("Score A: " + score)

        } else if (currentPlayer === 'playerB') {
          score = score - 5;
          pointsElementB.innerHTML = ('Score B: ' + score)
        }
      }
    
    function countDown(){
      seconds = seconds - 1;
      timeLeftElement.innerHTML = ( "Time Left: " + seconds + " seconds");
    
      if (seconds <= 0){
          currentPlayer = "playerB" //kyle
            
      if (currentPlayer === "playerB"){
   
    
          playerTurn.innerHTML = ('Player B')};
          alert("Your score is " + score);
            
          if(playerAScore == null){
              playerAScore = score
          } else {
              playerBScore = score
          }
              timesPlayed += 1
          if(timesPlayed == 2) {
              if(playerAScore > playerBScore) {
              
                swal({
                  title: "Player 1 You've done it",
                  text: "YOU WON!!!",
                  icon: "success",
                  buttons: true,
                  dangerMode: true,
                }).then( ()=>{
                  location.reload();
                });
               
               
              
              }
              else if(playerBScore > playerAScore) {
                
                
                swal({
                  title: "Player 2 You've done it",
                  text: " YOU WON!!!",
                  icon: "success",
                  buttons: true,
                  dangerMode: true,
                }).then( ()=>{
                  location.reload();
                });

               
               
                 
              } else { 
                
             
                  swal({
                    title: "Amazing",
                    text: "It's a Tie",
                    icon: "Warning",
                    buttons: true,
                    dangerMode: true,
                  }).then( ()=>{
                    location.reload();
                   
                  });
                  
                
              }
          }
        
        
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



