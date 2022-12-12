//Activity 7

// Create two arrays of followers
// Mutal Followers

let bobsFollowers = ["Paul", "Micheal","George", "Billy", "Evan"];
let hannahsFollowers = ["Samantha", "Michael", "Emily", "Evan", "Billy"];

let mutualFollowers = [];

for (let bFA = 0; bFA < bobsFollowers.length; bFA++) {
    for (let hFA = 0; hFA < hannahsFollowers.length; hFA++) {
        if (bobsFollowers[bFA] === hannahsFollowers[hFA]) {
            mutualFollowers.push(bobsFollowers[bFA]);
        }
    }
}

console.log(`Here are the Mutal Followers: ${mutualFollowers}`);