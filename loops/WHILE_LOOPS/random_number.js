console.clear()

// Activity 4
let numbers = [];

while(numbers.length < 6){
    // GENERATES A RANDOM NUMBER
    randomNumber = Math.floor(Math.random() * 100)

    // PRINTS THE RANDOM NUMBER
    console.log(randomNumber)
    
    // STORES NUMBERS IN THE ARRAY
    numbers.push(randomNumber)

    // Activity 6

    //if (randomNumber % 7 === 0) {
        // If the number is divisible by 7, log a message indicating that
    //    console.log(`${randomNumber} is divisible by 7`);
    //} else {
        // If the number is not divisible by 7, log a message indicating that
    //    console.log(`${randomNumber} is not divisible by 7`);
    //}
}

