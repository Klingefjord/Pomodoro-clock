var time = $("#time");
var pause = $("#pause");
var reset = $("#reset");
var pomodoroTime = $("#pomodoro-time");
var breakTime = $("#break-time");
var pomodoroPlus = $("#pomodoro-plus");
var pomodoroMinus = $("#pomodoro-minus");
var breakPlus = $("#break-plus");
var breakMinus = $("#break-minus");

var bell = new Audio("assets/bell.mp3");

var seconds = 2;
var minutes = 0;
var play = false;
var pomodoro = true;
var pomodoroLength = 25;
var breakLength = 5;

// Interval

setInterval(function(){
  console.log("seconds");
  if (play) {
    updateTime();
  }
}, 1000);

// Functional functions

function updateTime() {
  if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
  } else if (seconds === 0 && minutes === 0) {
      soundTheAlarm();
  } else {
      seconds--;
  }
  updateDOM();
}

function updateDOM() {
  var sec = "";
  var min = "";

  if (seconds < 10) {
    sec = "0";
  }
  if (minutes < 10) {
    min = "0";
  }
  time.html(min + minutes + ":" + sec + seconds);
}

function soundTheAlarm() {
  if (!pomodoro) {
    minutes = pomodoroLength;
    seconds = 0;
    play = false;
    pomodoro = true;
    bell.play();
    alert("Alright, Back to work!")
  } else {
    minutes = breakLength;
    seconds = 0;
    play = true;
    pomodoro = false;
    bell.play();
    alert("Time to take a break!")
  }
}

function updateParameters()  {
  breakTime.html(breakLength);
  pomodoroTime.html(pomodoroLength);
  if (!play) {
    if (pomodoro) {
      minutes = pomodoroLength;
      seconds = 0;
    } else {
      minutes = breakLength;
      seconds = 0;
    }
    updateDOM();
  }
}


// Event listeners

pause.click(function(){
  if (!play) {
    play = true;
  } else {
    play = false;
  }
});

reset.click(function(){
  pomodoroLength = 25;
  breakLength = 5;
  pomodoro = true;
  play = false;
  seconds = 0;
  minutes = 25;
  updateParameters();
});

breakPlus.click(function(){
  breakLength++;
  updateParameters();
});

breakMinus.click(function(){
  if (breakLength > 1) {
    breakLength--;
    updateParameters();
  }
});

pomodoroPlus.click(function(){
  pomodoroLength++;
  updateParameters();
});

pomodoroMinus.click(function(){
  pomodoroTime.html(pomodoroLength);
  if (pomodoroLength > 1) {
    pomodoroLength--;
    updateParameters();
  }
});
