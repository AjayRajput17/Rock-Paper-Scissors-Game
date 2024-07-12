let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
  // rock , paper , scissor
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  let ch = option[randIdx];
  return ch;
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText="Game Was Draw Play Again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userwin,userChoice,compChoice) => {
  if (userwin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! Comp ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice is", userChoice);
  // generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice ", compChoice);

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userwin = true;

    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }

    showWinner(userwin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    console.log("\n");
  });
});
