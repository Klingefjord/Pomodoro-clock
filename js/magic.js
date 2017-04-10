var time = $("#clock");

var seconds = 0;
var minutes = 25;
var play = false;

while (play) {
  setTimeout(function(){
    if (seconds === 0) {
      minutes--;
    } else {
      seconds--;
    }
    updateDOM();
  }, 1000);
}

function updateDOM() {
  time.html(minutes + ":" + seconds);
}

$("#pause").click(function(){
  if (!play) {
    play = true;
  } else {
    play = false;
  }
  console.log("test");
});
