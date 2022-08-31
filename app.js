const rps = ['Rock', 'Paper', 'Scissors'];

let randomIndex = () => {
    return Math.floor(Math.random() * 3);
}

let randomRPS = () => {
    return rps[randomIndex()]
}

// let computersChoice = randomRPS();

// let lusersChoice = prompt('Rock, Paper, Scissors?');

let rockPaperScissors = () => {
    let usersChoice = prompt('Rock, Paper, Scissors?');
    let computersChoice = randomRPS();
    if(computersChoice === "Rock" && usersChoice === "Paper") {
               return console.log("You win!");
            } else if (computersChoice === "Paper" && usersChoice === "Rock") {
                return console.log("You lose!");
            } else if (computersChoice === "Scissors" && usersChoice === "Rock") {
                return console.log("You win!");
            } else if (computersChoice === "Rock" && usersChoice === "Scissors") {
                return console.log("You lose!");
            } else if (computersChoice === "Paper" && usersChoice === "Scissors") {
                return console.log("You win!");
            } else if (computersChoice === "Scissors" && usersChoice === "Paper") {
                return console.log("You lose!");
            } else if (computersChoice === "Scissors" && usersChoice === "Scissors") {
                return console.log("Draw!");
            } else if (computersChoice === "Paper" && usersChoice === "Paper") {
                return console.log("Draw!");
            } else if (computersChoice === "Rock" && usersChoice === "Rock") {
                return console.log("Draw!");
            } 
}

for(let i = 0; i < 10; i++) {
    rockPaperScissors()
}
