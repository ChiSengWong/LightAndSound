
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

var mistakes;
var pattern;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000;

function patternGen() {
  pattern = [];
  // generate a number between 8 and 16, representing the length of pattern
  var patternLen = 8 + Math.floor(Math.random() * 8)
  console.log("pattern length = " + patternLen)
  for (let i = 0; i < patternLen; i++ ) {
    pattern.push(Math.floor(Math.random() * 9) + 1)
  }
  console.log("pattern is " + pattern)
}
function startGame(){
  //initialize game variables
  patternGen(); // generate pattern
  clueHoldTime = 1000; //reset speed
  mistakes = 0; //reset mistakes
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}
function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit");
}
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
function resumePointer() { // helper method to resume pointerEvents
  return document.getElementById("gameButtonArea").style.pointerEvents = "auto";
}
function playClueSequence() {
  document.getElementById("gameButtonArea").style.pointerEvents = "none"; // pause pointerEvents when clue playing
  clueHoldTime *= 0.7;
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime;
  for (let i=0; i<= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  setTimeout(resumePointer, delay); // resume pointerEvents after playing clues.
  
}


function loseGame() {
  stopGame();
  alert("Game Over. You lost.")
}
function winGame() {
  stopGame();
  alert("Game Over. You won!")
}
function guess(btn) {
  
  console.log("user gussed: " + btn);
  if (!gamePlaying){
    return;
  }

  if (btn != pattern[guessCounter]){ //guess not correct
    mistakes++;
    playTone(2, 20);
    if (mistakes == 3) return loseGame();
    playClueSequence();
    return;
  }
  // else if guess correct
  
  if (guessCounter == progress) { // turn over
    if (progress == pattern.length -1) { // last turn
      winGame();
    }else { // Not last turn
      progress++;
      playClueSequence();
    }
  }else { // turn Not Over
    guessCounter++;
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 400,
  6: 200,
  7: 300,
  8: 400,
  9: 500,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)