// 1
for (i = 1; i <= 7; i++) {
    console.log(i);
}
console.log("========");

// 2
for (i = 5; i <= 25; i += 4) {
    console.log(i);
}

console.log("==========");
// 3a
const wizards = [
    "Harry Potter",
    "Hermione Granger",
    "Ron Weasley"
]

// 3b
for (let i = 0; i < wizards.length; i++) {
    console.log(wizards[i]);
}

// 4a
let harryPotterMovies = 0;

// 4b

while (harryPotterMovies++, harryPotterMovies <= 8) {
    console.log(harryPotterMovies);
}

// Bonus
// 5a
const hogwartsHouses = [
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin"
];

// 5b
for( i = 0; i < hogwartsHouses.length; i++) {
    console.log(hogwartsHouses[i]);
}