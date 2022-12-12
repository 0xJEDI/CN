console.clear()
// CLEARS THE TERMINAL, NOT NEEDED
// A Palindromic Number Is A Number That Remains The Same When Its Digits Are Reversed
// Activity 11

// Palindrome State Holder 0=FALSE 1=TRUE
let palinState = true;

// Generates a Random Number to be used within the Palindrome Checker
let randomNumber = Math.floor(Math.random()*100000);

// Sets the Random Number as a Number
let number = randomNumber;

// This Decalres the Interger as a String to be read
let numString = number.toString();

// For I = 0, If I is Lesser than Number.Length / Then I Incremenet
for (let i = 0; i < numString.length / 2; i++) {
    // If Number is Strict Inequality to the Length - 1 - Index
    if (numString[i] !== numString[numString.length - 1 - i]) {
        // Then Set Palin State to False
        palinState = false;
    }
}

// IF Statement
if (palinState) {
    // If PalinState = 1 THEN IS A PALIN NUMBER
    console.log(`${randomNumber}> Is a PalinDromeNumber`);
    } else {
    // If PalinState = 0 THEN IS NOT A PALIN NUMBER
    console.log(`${randomNumber}> Is not a PalinDromeNumber`);
}

