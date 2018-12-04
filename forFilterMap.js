'use strict';

const turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtleFilter(array) {
    const newArr = array.filter(arr => arr[0] >= 0);
    const finalArr = newArr.filter(arr => arr[1] >=0);
    return finalArr;
}

function turtleMap(array) {
    let filteredArray = turtleFilter(array);
    let mappedArray = filteredArray.map(item => item.reduce((a, b) => a+b));
    return mappedArray;
}

function turtleForEach(array) {
    let filteredAndMapped = turtleMap(turtleFilter(array));
    console.log(filteredAndMapped);

    filteredAndMapped.forEach(item => console.log(item));
}

console.log(turtleFilter(turtleMovement));
console.log(turtleMap(turtleMovement));
console.log(turtleForEach(turtleMovement));