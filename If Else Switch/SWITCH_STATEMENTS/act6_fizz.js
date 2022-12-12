//Activity 6
// Random Number * 100 = Whole Number
let numbers = Math.floor(Math.random() * 100);

// If Random Number is / by 3 & 5 then
if(numbers %3 == 0 && numbers %5 == 0){
    // Print Outcome
    console.log("[Divisible by 3 & 5] Fizz Buzz", numbers)
} 
// If Random Number is / by 3
else if (numbers %3 == 0){ 
    console.log("[Divisible by 3] Fizz", numbers)
}
// If Random Number is / by 5
else if(numbers %5 == 0){
    console.log("[Divisible by 5] Buzz", numbers)
}
// If Random Number is not / by 3/5 
else{
    console.log("[Not Divisible by 3/5]",numbers)
}