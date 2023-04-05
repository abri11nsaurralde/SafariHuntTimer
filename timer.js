var sec;
var timer;
var timerElement = document.getElementById("timer");
var isPaused = false;
var rounds = 0;

var task = document.getElementById("task");

function start () {
  document.getElementById("start").style.display = "none";
  document.getElementById("pauseButton").style.display = "inline-block";
  document.getElementById("resumeButton").style.display = "inline-block";
}

function shoot() {
  rounds++;
  if ((rounds%2) == 1) {
    task.innerText = "Team A: shoot!";
  } else {
    task.innerText = "Team B: shoot!";
  }

  sec = 20;
  timerElement.innerText = "00:20";

  timer = setInterval(() =>
  {if (!isPaused) {
    if (sec < 10) {
      if (sec < 0) {
        clearInterval(timer);
        cleanUp();
        } else {
          timerElement.innerText = "00:0" + sec;
        }
    } else {
        timerElement.innerText = "00:" + sec;
        }
    sec --;
  }
  }, 1000);

}

function cleanUp () {
  if ((rounds%2) == 1) {
    task.innerText = "Team B: clean up!";
  } else {
    task.innerText = "Team A: clean up!";
  }

  sec = 15;
  timerElement.innerText = "00:15";

  timer = setInterval(() =>
  {
    if (!isPaused) {
      if (sec < 10) {
        if (sec < 0) {
          clearInterval(timer);
          shoot();
          } else {
            timerElement.innerText = "00:0" + sec;
          }
      } else {
          timerElement.innerText = "00:" + sec;
          }
      sec --;
    }
  }, 1000);
}

function resume() {
  isPaused = false;
}

function pause() {
  isPaused = true;
}
