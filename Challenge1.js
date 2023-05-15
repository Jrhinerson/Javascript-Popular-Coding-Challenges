// Given an array of marvel heroes, write a function that accepts the array of names. The function should return the hero with the longest name. The user should click the button to display the heroes name below.

const marvelHeroes = [
    "Ant-Man",
    "Black Panther",
    "Black Widow",
    "Captain America",
    "Doctor Strange",
    "Hawkeye",
    "Hulk",
    "Iron Man",
    "Luke Cage",
    "Moon Knight",
    "Ms. Marvel",
    "Scarlet Witch",
    "Spider-Man",
    "Thor",
    "Wasp"
]

function findLongestString(namesArry) {
    let longestword = ""
    for (let i = 0; i < namesArry.length; i++) {
        if (namesArry[i].length > longestword.length) {
            longestword = namesArry[i]
        };
    }

    return longestword
}

console.log(findLongestString(marvelHeroes))