"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector(".number").textContent = number;

document.querySelector(".check").addEventListener("click", () => {
  if (score === 0) return;
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (guess === number) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(".label-highscore").textContent =
        "high score: " + highScore;
    }
    document.querySelector(".message").textContent = "correct number";
    document.querySelector(".number").textContent = number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    score = 0;
  } else if (guess !== number) {
    if (score === 1) {
      document.querySelector(".message").textContent = "you lost";
      score--;
      document.querySelector(".score").textContent = score;
      return;
    }
    document.querySelector(".message").textContent =
      guess > number ? "too high" : "too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "start guessing ...";
});
