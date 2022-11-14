// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// Number List

for (let i = 1; i<=10; i++){
    console.log(i);
}

// Increments of 2

for (let i = 1; i <= 20; i += 2){
    console.log(i);
}

// Reverse 

for (let i = 100; i >= 0; i -= 10){
    console.log(i);
}

// ==========================================
//  DO NOT RUN THIS LOOP - INFINITE LOOP!
//  for (let i = 20; i >= 0; i++){
//      console.log(i)
// }

const seatingChart = [
    ["Kristen", "Erik", "Namita"],
    ["Geoffrey", "Juanita", "Antonio", "Kevin"],
    ["Yuma", "Sakura", "Jack", "Erika"]
]

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++){
        console.log(    row[j])
    }
}
