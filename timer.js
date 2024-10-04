let countdownTime = 60; // Countdown time in seconds (1 minute)
const startButton = document.getElementById("startbtn");
const minutesDisplay = document.getElementById("minutes2");
const secondsDisplay = document.getElementById("seconds2");
const buzzSound = document.getElementById("buzzSound");
let countdownTimer;

// Function to start the countdown
function startCountdown() {
 startButton.disabled = true; // Disable the start button when the timer starts

 countdownTimer = setInterval(() => {
  if (countdownTime <= 0) {
   clearInterval(countdownTimer); // Stop the timer
   buzzSound.play(); // Play the buzz sound
   alert("Time's up!"); // Show alert
   resetCountdown(); // Reset the countdown
   return;
  }

  countdownTime--;

  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;

  minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
 }, 1000);
}

// Function to reset the countdown
function resetCountdown() {
 countdownTime = 60; // Reset to 1 minute
 minutesDisplay.textContent = "01";
 secondsDisplay.textContent = "00";
 startButton.disabled = false;
}

// Event listener to start the countdown
startButton.addEventListener("click", startCountdown);
