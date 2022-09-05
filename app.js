let fight = document.querySelector('.fight');
let outcome = document.createElement('div');
let finalResult = document.createElement('div');
let message = document.createElement('div');

outcome.classList.add("outcome");

let runningScore = document.createElement('div');

// Selecting the wins/draws/losses divs 

let winsTracker = document.querySelector(".wins");
let lossesTracker = document.querySelector(".losses");
let drawsTracker = document.querySelector(".draws");

console.log(winsTracker.textContent)

let counter = 0;


let wins = 0;
let loses = 0;
let draws = 0;



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
// let determineScore = (usersChoice, computersChoice) => {


//     if(computersChoice === "rock" && usersChoice === "paper") {
//                return  "Round Won!";
//             } else if (computersChoice === "paper" && usersChoice === "rock") {
//                 return "Round Lost!";
//             } else if (computersChoice === "scissors" && usersChoice === "rock") {
//                 return "Round Won!";
//             } else if (computersChoice === "rock" && usersChoice === "scissors") {
//                 return "Round Lost!";
//             } else if (computersChoice === "paper" && usersChoice === "scissors") {
//                 return "Round Won!";
//             } else if (computersChoice === "scissors" && usersChoice === "paper") {
//                 return "Round Lost!";
//             } else if (computersChoice === "scissors" && usersChoice === "scissors") {
//                 return "Draw!";
//             } else if (computersChoice === "paper" && usersChoice === "paper") {
//                 return "Draw!";
//             } else if (computersChoice === "rock" && usersChoice === "rock") {
//                 return "Draw!";
//             } 
//     }


let usersChoice;

let buttons = document.querySelectorAll('button');

// function setUsersChoice(e) {
//     usersChoice = e.target.textContent;
//     console.log(usersChoice)
// }

function resultTracker(roundResult) {

}


function playRound(e) {





    if(counter < 5) {
        counter += 1;
    }
    if(counter === 1) {
        fight.style.color = "#fcc729";
        outcome.style.color = "#fcc729";
    }
    // if(counter === 5) {

    // }
    console.log(counter)
    let computersTurn = getComputerChoice();
    usersChoice = e.target.textContent.toLowerCase();
    console.log(`CC${computersTurn} UC${usersChoice}`);
    
    let determineScore = (usersChoice, computersChoice) => {


            if(computersChoice === "rock" && usersChoice === "paper") {
                wins++;
                return  "Round Won!";
            } else if (computersChoice === "paper" && usersChoice === "rock") {
                loses++;
                return "Round Lost!";
            } else if (computersChoice === "scissors" && usersChoice === "rock") {
                wins++;
                return "Round Won!";
            } else if (computersChoice === "rock" && usersChoice === "scissors") {
                loses++;
                return "Round Lost!";
            } else if (computersChoice === "paper" && usersChoice === "scissors") {
                wins++;
                return "Round Won!";
            } else if (computersChoice === "scissors" && usersChoice === "paper") {
                loses++;
                return "Round Lost!";
            } else if (computersChoice === "scissors" && usersChoice === "scissors") {
                draws++;
                return "Draw!";
            } else if (computersChoice === "paper" && usersChoice === "paper") {
                draws++;
                return "Draw!";
            } else if (computersChoice === "rock" && usersChoice === "rock") {
                draws++;
                return "Draw!";
            } 
    }

    let roundScore = determineScore(usersChoice, computersTurn);
    console.log(`Roundscore:${roundScore}`)

    // roundScore === "Round Won!" ? wins++ : roundScore === "Round Lost!" ? 
    //     loses++ : draws++;

    console.log(`W${wins} L${loses} D${draws}`)
    outcome.textContent = roundScore;
    fight.appendChild(outcome);

    winsTracker.textContent = wins;
    lossesTracker.textContent = loses;
    drawsTracker.textContent = draws;

    // runningScore.textContent = `W${wins} L${loses} D${draws}`;

    // fight.appendChild(runningScore);

    if(counter === 5) {
        if(wins > loses) {
        
            console.log('Congratulations, Round beat the computer!');
            outcome.style.color = "Green";
            outcome.textContent = "Victory!";
            message.textContent = 'Congratulations, you beat the computer!';
            outcome.appendChild(message);
            // total.textContent = `W${wins}, L${loses}, D${draws}`;
            // message.appendChild(total);
    
        } else if(loses > wins) {
            console.log('Commiserations, Round lost to the computer!');
            outcome.style.color = "Red";
            outcome.textContent = "Defeat!";
            message.textContent = 'Commiserations, you lost to the computer!';
            outcome.appendChild(message);
            // total.textContent = `W${wins}, L${loses}, D${draws}`;
            // message.appendChild(total);
        } else {
            console.log("DRAW!");
            outcome.style.color = "Blue";
            outcome.textContent = "Draw!";
            message.textContent = "No winners or losers today. Play Again?";
            outcome.appendChild(message);
            // total.textContent = `W${wins}, L${loses}, D${draws}`;
            // message.appendChild(total);
        }
        counter = 0;
        wins = 0;
        loses = 0;
        draws = 0;


    }

}

buttons.forEach((btn) => {
    btn.addEventListener('click', playRound)
});






// console.log(playRound(usersChoice, computersChoice));

// let game = () => {

//     let wins = 0;
//     let loses = 0;
//     let draws = 0;

//     const message = document.createElement('div');
//     const total = document.createElement('div');

    // for(let i = 0; i < 5 ; i++) {
    //     let usersSelection = usersChoice;
    //     let computersChoice = getComputerChoice();
    //     let outcome = playRound(usersChoice,computersChoice)
    //     outcome === "Round Won!" ? wins++ : outcome === "Round Lost!" ? loses++ : draws++;
    //     console.log(outcome);
    // }

    //console.log(`W${wins}, L${loses}, D${draws}`)

    // if(wins > loses) {
        
    //     console.log('Congratulations, Round beat the computer!');
    //     outcome.style.color = "Green";
    //     outcome.textContent = "Victory!";
    //     message.textContent = 'Congratulations, Round beat the computer!';
    //     outcome.appendChild(message);
        // total.textContent = `W${wins}, L${loses}, D${draws}`;
        // message.appendChild(total);

    // } else if(loses > wins) {
    //     console.log('Commiserations, Round lost to the computer!');
    //     outcome.style.color = "Red";
    //     outcome.textContent = "Defeat!";
    //     message.textContent = 'Commiserations, Round lost to the computer!';
    //     outcome.appendChild(message);
        // total.textContent = `W${wins}, L${loses}, D${draws}`;
        // message.appendChild(total);
    // } else {
    //     console.log("DRAW!");
    //     outcome.style.color = "Blue";
    //     outcome.textContent = "Draw!";
    //     message.textContent = 'Congratulations and commiserations, Round both won and lost!';
    //     outcome.appendChild(message);
        // total.textContent = `W${wins}, L${loses}, D${draws}`;
        // message.appendChild(total);
    // }

// }

// game();

