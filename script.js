function showTime() {
 var date = new Date();
 var h = date.getHours(); // 0 - 23
 var m = date.getMinutes(); // 0 - 59
 var s = date.getSeconds(); // 0 - 59
 var session = "AM";

 if (h == 0) {
  h = 12;
 }

 if (h > 12) {
  h = h - 12;
  session = "PM";
 }

 h = h < 10 ? "0" + h : h;
 m = m < 10 ? "0" + m : m;
 s = s < 10 ? "0" + s : s;

 var time = h + ":" + m + ":" + s + " " + session;
 document.getElementById("digital-container").innerText = time;
 // document.getElementById("digital-container").textContent = time;

 setTimeout(showTime, 1000);
}

showTime();

window.onload = function () {
 var seconds = 0;
 var tens = 0;
 var appendTens = document.getElementById("tens");
 var appendSeconds = document.getElementById("seconds");
 var buttonStart = document.getElementById("button-start");
 var buttonStop = document.getElementById("button-stop");
 var buttonReset = document.getElementById("button-reset");
 var Interval;

 buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
 };

 buttonStop.onclick = function () {
  clearInterval(Interval);
 };

 buttonReset.onclick = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
 };

 function startTimer() {
  tens++;

  if (tens <= 9) {
   appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
   appendTens.innerHTML = tens;
  }

  if (tens > 99) {
   console.log("seconds");
   seconds++;
   appendSeconds.innerHTML = "0" + seconds;
   tens = 0;
   appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
   appendSeconds.innerHTML = seconds;
  }
 }
};
// let timer;
// let countdownTime = 60; // Countdown time in seconds (1 minute)
// const startButton = document.getElementById("startBtn");
// const minutesDisplay = document.getElementById("minutes2");
// const secondsDisplay = document.getElementById("seconds2");
// const buzzSound = document.getElementById("buzzSound");
// function startTimer() {
//  startButton.disabled = true;
//  timer = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
//  if (countdownTime === 0) {
//   clearInterval(timer);
//   buzzSound.play(); // Play the buzz sound when time reaches 0
//   alert("Time's up!");
//   resetTimer();
//   return;
//  }

//  countdownTime--;

//  const minutes = Math.floor(countdownTime / 60);
//  const seconds = countdownTime % 60;

//  minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
//  secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
// }

// function resetTimer() {
//  countdownTime = 60;
//  minutesDisplay.textContent = "01";
//  secondsDisplay.textContent = "00";
//  startButton.disabled = false;
// }

// startButton.addEventListener("click", startTimer);
