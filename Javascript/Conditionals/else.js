// // 0 - 5 - FREE
// // 5 - 10 - CHILD £10
// // 10 - 65 - ADULT £20
// // 65+ SENIOR £10

const age = "8";

if (age < 5) {
    console.log("You are a baby, you get in for free")
} else if (age < 10) {
  console.log("You are a child, you pay £10")
} else if (age < 65) {
    console.log("You are a adult, you pay £20")
} else {
    console.log("You are a senior, you pay £10")
}
