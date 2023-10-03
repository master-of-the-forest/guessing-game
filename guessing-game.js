const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;
let numAttempts;

/*
> askLimit function
> 
*/
askLimit();

function askLimit() {
    rl.question('Enter the max # of attempts: ', attempts => {
        numAttempts = attempts;
        askRange();
    })
}


function askRange() {
    rl.question('Enter a min number: ', min => {
        rl.question('Enter a max number: ', max => {
            console.log("I'm thinking of a number between " + min + ' and ' + max + '...');
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();
        })
    });
}


function randomInRange(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function askGuess() {
    rl.question('Enter a guess: ', guess => {
        if (checkGuess(Number(guess))) {
            console.log('You win!');
            rl.close();
        } else {
            numAttempts--;
            if (numAttempts == 0) {
                console.log('You Lose');
                rl.close();
            } else {
                askGuess();
            }
        }
    });
};


let checkGuess = n => {
    if (n > secretNumber) {
        console.log('Too high :(');
        return false;
    } else if (n < secretNumber) {
        console.log('Too low :(');
        return false;
    } else if (n === secretNumber) {
        console.log('Correct! :)');
        return true;
    }
}





