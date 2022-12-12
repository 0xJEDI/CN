//Activity 4

// Define the Topping
let topping = "Tomato"

switch(topping){
    case "Pepporoni":
    case "Cheese":
        console.log("These are important ingredients for my pizza!")
        break
    case "Pineapple":
    case "Tomato":
        console.log(`I dont mind having ${topping} on my pizza.`)
        break
    case "Ham":
        console.log(`${topping} should not be on pizza.`)
        break
    default:
        console.log("I'll have a try.")
}

