console.clear()

// ACT 1
const pet = {
    name: "Patch",
    typeOfDog: "Staffy",
    age: "DEAD",

    //ACT 2
    //colour: "Black and White | With a Patch!",
    newColour: "Black and White",

    //ACT 3
    petFeatures: ["Friendly", "Loving", "Passed"],
    petHungry: true,
    petThirsty: true

}

console.log(`My pet's name is ${pet.name} and he is a ${pet.newColour} \n${pet.typeOfDog} who is ${pet.age}. \nWith ${pet.petFeatures} features\n`)

// ACT 4
pet.Hungry = () => {
    switch(pet.petHungry){
        case true:
            console.log(`Your pet ${pet.name} is Eating`)
            break
        case false:
            console.log(`Your pet ${pet.name} is not Eating`)
            break
        default:
            return
    }
}

pet.Hungry()

pet.Thirsty = () => {
    switch(pet.petThirsty){
        case true:
            console.log(`Your pet ${pet.name} is Drinking`)
            break
        case false:
            console.log(`Your pet ${pet.name} is Not Drinking`)
            break
        default:
            return
    }
}

pet.Thirsty()
