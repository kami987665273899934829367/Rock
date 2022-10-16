const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let cmpScore = 0;
let usrScore = 0;

const increment = (string) => {
    if(string == "Computer")
    {
        cmpScore++;
        computerScore.innerHTML = cmpScore;
    }
    else if(string == "User")
    {
        usrScore++;
        userScore.innerHTML = usrScore;
    }


}

const runGame = (name) =>{
    const userInput = name;
    const values = ["Rock", "Paper", "Scissor"];

    const randomNumber   = Math.floor(Math.random() * 3);
    const computerInput  = values[randomNumber];

    userChoice.innerHTML = "You pick " + userInput;
    computerChoice.innerHTML = "Computer pick " + computerInput;

    if(userInput == "Rock"){
        if(computerInput == "Rock")
        {
            result.innerHTML = "Draw";
        }
        else if(computerInput == "Paper")
        {
            result.innerHTML = "You lose";
            increment("Computer");
        }
        else
        {
            result.innerHTML = "You win";
            increment("User");
        }
    }

    if(userInput == "Paper"){
        if(computerInput == "Paper")
        {
            result.innerHTML = "Draw";
        }
        else if(computerInput == "Scissor")
        {
            result.innerHTML = "You lose";
            increment("Computer");
        }
        else
        {
            result.innerHTML = "You win";
            increment("User");
        }
    }

    if(userInput == "Scissor"){
        if(computerInput == "Scissor")
        {
            result.innerHTML = "Draw";
        }
        else if(computerInput == "Rock")
        {
            result.innerHTML = "You lose";
            increment("Computer");
        }
        else
        {
            result.innerHTML = "You win";
            increment("User");
        }
    }


    
}

rockBtn.addEventListener("click", () =>{
    runGame("Rock");
});

paperBtn.addEventListener("click", () =>{
    runGame("Paper");
});

scissorBtn.addEventListener("click", () =>{
    runGame("Scissor");
});



