// Activity 8

// The String
let longString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// Vowel Counter
let vowelIndex = [];

// index = 0, if index lesser than string.length then index will use an ++ Increment
for (let index = 0; index < longString.length; index++){
    
    // Switch Loop
    switch(longString[index]) {
        // If Letter A,E,I,O,U - Vowels
        case ("a"):
        case ("e"):
        case ("i"):
        case ("o"):
        case ("u"):
            // Then Vowel Counter will locate and indentity the Postion of the Vowel and Store it in the Array(vowelIndex)
            vowelIndex.push(index)
}}

console.log(`Here is the Index: ${vowelIndex.pop()}`)