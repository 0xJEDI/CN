
//ACTIVITY 1 & 2

// Define a function called `welcomeMessage` that takes three parameters: `myName`, `text`, and `drink`
const welcomeMessage = (myName, text, drink ) => {
    // Use template literals to print a message to the console, including the values of the `myName`, `text`, and `drink` parameters
    console.log(`Hello ${myName} and ${text}. \nWould you like a ${drink}`)
}

// Call the `welcomeMessage` function with the arguments "Jed", "How are you!?", and "Coke?" for the `myName`, `text`, and `drink` parameters, respectively
welcomeMessage("Jed","How are you!?", "Coke?")
