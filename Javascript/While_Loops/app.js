// let count = 0;
// while(count < 10){
//     count++;
//     console.log(count)
// }

const SECRET = "BabyHippo";

let guess = prompt("Enter the secret code");
while(guess !== SECRET){
    guess = prompt("Enter the secret code");
}
console.log("Well done, you got it");

// Break Keyword

let input = prompt("Hey, say something")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") break;
    }

console.log("Ok, you win")

// Guessing Game

let maximum = parseInt(prompt("Enter the maximum number"));
while (!maximum) {
    let maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
       guess = prompt("Too high, enter a new guess:");
    } else {
        guess = prompt("Too low, enter a new guess:");
    }
}
if (guess === 'q') {
    console.log("Ok, you quit")
} else {
    console.log("Congrats, you win")
    console.log(`You got it, it took you ${attempts} guesses`)
}
