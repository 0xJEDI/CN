// USED TO CLEAR THE CONSOLE ON RUN
console.clear()

// ARRAY OF "FILMS"
let films = ["How High", "Friday", "Godfather"]

// THIS WILL LOG THE OUTPUT
console.log("ACTIVTY 1")
console.log("Here are some of my recent watched films\n", films)

// ACTIVTY 2
console.log("ACTIVTY 2")
console.log("I like to watch!\n", films[2])

// ACTIVTY 3.5
console.log("ACTIVTY 3.5")
console.log("There is", films.length, "films\n")

// ACTIVTY 4
console.log("ACTIVTY 4")
console.log("Films: Pop>", films.pop())
console.log("Films: Shift>", films.shift())
console.log("Films: Splice>", films.splice())
console.log("Films: Slice>", films.slice())
console.log("Films: Unshift>", films.unshift())
console.log("Films: MAP>\n")

// ACTIVTY 5
let favSongs = ["Man in the Mirror", "Mad About Bars - S5-E9", "Who Cares"]
favSongs[3] = "On Top"; favSongs[4] = "In & Out"; 
delete favSongs[4];

console.log("ACTIVTY 5")
console.log(favSongs)
