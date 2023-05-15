//Write a function that takes a number parameter in kilometers converts the number to miles. Return the converted number.

//Example: 1 kilometer is equal to .6214 miles. If you enter 10 it should return 6.21 miles.

let value = 5

function convertKilometersToMiles(kilometers) {
    let miles = (kilometers * 0.6214)
    return miles;
}

console.log(convertKilometersToMiles(value))