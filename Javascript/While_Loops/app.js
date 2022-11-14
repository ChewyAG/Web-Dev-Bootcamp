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
