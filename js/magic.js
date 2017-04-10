var time = $("#time");
var pause = $("#pause");

var seconds = 0;
var minutes = 25;
var play = false;
var pomodoro = true;

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

pause.click(function(){
  if (!play) {
    play = true;
  } else {
    play = false;
  }
});

setInterval(function(){
  console.log("seconds");
  if (play) {
    updateTime();
  }
}, 1000);

function updateTime() {
  if (seconds === 0 && minutes > 0) {
      minutes--;
      seconds = 59;
  } else if (seconds === 0 && minutes === 0) {
      soundTheAlarm();
  }
  else {
      seconds--;
  }
  updateDOM();
}

function soundTheAlarm() {
  if (!pomodoro) {
    minutes = 25;
    seconds = 0;
    play = false;
    pomodoro = true;
  } else {
    minutes = 5;
    seconds = 0;
    play = true;
    pomodoro = false;
  }
}
