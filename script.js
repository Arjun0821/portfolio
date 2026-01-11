console.log("JS Loaded");

const texts = [
  "Aspiring Ethical Hacker...",
  "Learning Web Security...",
  "Bug Bounty Beginner...",
  "Building Secure Websites..."
];

let count = 0;
let index = 0;

function typeEffect() {
  if (count === texts.length) {
    count = 0;
  }

  let currentText = texts[count];
  let displayedText = currentText.slice(0, index + 1);

  document.getElementById("typing").textContent = displayedText;
  index++;

  if (displayedText.length === currentText.length) {
    setTimeout(() => {
      index = 0;
      count++;
    }, 1500);
  }

  setTimeout(typeEffect, 100);
}

typeEffect();
