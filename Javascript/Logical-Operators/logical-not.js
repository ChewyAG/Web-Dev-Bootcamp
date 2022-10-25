let firstName = prompt("Enter your first name");
if (!firstName) {
    firstName = prompt("Try again");
}

const age = 8;

if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("You are not a baby or a senior")
}
