"use strict";
/*console.log(document.querySelector(".message").textContent);
  document.querySelector(".message").textContent ="Correct Number!π.";
  document.querySelector(".number").textContent= 18;
  document.querySelector(".score").textContent= 32;
  document.querySelector(".guess").value = 34 ;
  document.querySelector(".guess").value;*/
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    //when there is no input.
    if (!guess) {
        // document.querySelector(".message").textContent = "π€·ββοΈπ€·ββοΈπ€No Number!";
        displayMessage("π€·ββοΈπ€·ββοΈπ€No Number!");
        //when the player wins.
    } else if (guess === secretNumber) {
        //document.querySelector(".message").textContent = "Correct Number!π.";
        displayMessage("Correct Number!π.")
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;

        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? "Too High ππ" : "Too Low π’π π₯Ύππ₯Ώ";
            displayMessage(guess > secretNumber ? "Too High ππ" : "Too Low π’π π₯Ύππ₯Ώ");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            //document.querySelector(".message").textContent = "π₯π₯π₯You lost the game!";
            displayMessage("π₯π₯π₯You lost the game!");
            document.querySelector(".score").textContent = 0;
            //guess is too high
            /*document.querySelector(".message").textContent = "Too High ππ";
            score--;
            document.querySelector(".score").textContent = score;*/
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            //guess is too low.
            document.querySelector(".message").textContent = "Too Lowπ π₯Ύππ₯Ώπ’";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "π₯π₯π₯You lost the game!";
            document.querySelector(".score").textContent = 0;
        }

    }
});
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = " ";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});