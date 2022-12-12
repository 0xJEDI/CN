// Activity 2
// FIND EVEN NUMBERS IN REVERSE ORDER

// Define an empty array called `newEvenNum`
let newEvenNum = [];

// Use a for loop to iterate over the numbers between 0 and 20 (inclusive)
for (let x=20; x >= 0; x--){
    // Use the modulo operator (`%`) to check if the current number is even
    if (x % 2 == 0) {
        // If the current number is even, add it to the `newEvenNum` array using the `push` method
        (newEvenNum.push(x))
    }
}

// Print the `newEvenNum` array to the console, using template literals
console.log(`In reverse order, the numbers between 0 and 20 are; ${newEvenNum}`)

// Activity 3
// FIND ODD NUMBERS 1-30

// Define an empty array called `oddNum`
let oddNum = [];

// Use a for loop to iterate over the numbers between 1 and 30 (inclusive)
for (let y=1; y <= 30; y++){
    // Use the modulo operator (`%`) to check if the current number is odd
    if (y % 2 == 1) {
        // If the current number is odd, add it to the `oddNum` array using the `push` method
        (oddNum.push(y))
    }
}

// Print the `oddNum` array to the console, using template literals
console.log(`The odd numbers between 1 and 30 are; ${oddNum}`)
