const outcome = document.querySelector('.outcome');
console.log(outcome);


function getComputerChoice () {
    const rps = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = () => {
        return Math.floor(Math.random() * 3);
    };
    let randomRPS = () => {
        return rps[randomIndex()]
    }
    return randomRPS().toLowerCase();
}

let playRound = (usersChoice, computersChoice) => {

    if(computersChoice === "rock" && usersChoice === "paper") {
               return  "You win!";
            } else if (computersChoice === "paper" && usersChoice === "rock") {
                return "You lose!";
            } else if (computersChoice === "scissors" && usersChoice === "rock") {
                return "You win!";
            } else if (computersChoice === "rock" && usersChoice === "scissors") {
                return "You lose!";
            } else if (computersChoice === "paper" && usersChoice === "scissors") {
                return "You win!";
            } else if (computersChoice === "scissors" && usersChoice === "paper") {
                return "You lose!";
            } else if (computersChoice === "scissors" && usersChoice === "scissors") {
                return "Draw!";
            } else if (computersChoice === "paper" && usersChoice === "paper") {
                return "Draw!";
            } else if (computersChoice === "rock" && usersChoice === "rock") {
                return "Draw!";
            } 
    }

// console.log(playRound(usersChoice, computersChoice));

let game = () => {

    let wins = 0;
    let loses = 0;
    let draws = 0;

    const message = document.createElement('div');
    const total = document.createElement('div');

    for(let i = 0; i < 5 ; i++) {
        let usersChoice = prompt('Rock, Paper, Scissors?').toLowerCase();
        let computersChoice = getComputerChoice();
        let outcome = playRound(usersChoice,computersChoice)
        outcome === "You win!" ? wins++ : outcome === "You lose!" ? loses++ : draws++;
        console.log(outcome);
    }

    console.log(`W${wins}, L${loses}, D${draws}`)

    if(wins > loses) {
        
        console.log('Congratulations, you beat the computer!');
        outcome.style.color = "Green";
        outcome.textContent = "Victory!";
        message.textContent = 'Congratulations, you beat the computer!';
        outcome.appendChild(message);
        total.textContent = `W${wins}, L${loses}, D${draws}`;
        message.appendChild(total);

    } else if(loses > wins) {
        console.log('Commiserations, you lost to the computer!');
        outcome.style.color = "Red";
        outcome.textContent = "Defeat!";
        message.textContent = 'Commiserations, you lost to the computer!';
        outcome.appendChild(message);
        total.textContent = `W${wins}, L${loses}, D${draws}`;
        message.appendChild(total);
    } else {
        console.log("DRAW!");
        outcome.style.color = "Blue";
        outcome.textContent = "Draw!";
        message.textContent = 'Congratulations and commiserations, you both won and lost!';
        outcome.appendChild(message);
        total.textContent = `W${wins}, L${loses}, D${draws}`;
        message.appendChild(total);
    }

}

game();

