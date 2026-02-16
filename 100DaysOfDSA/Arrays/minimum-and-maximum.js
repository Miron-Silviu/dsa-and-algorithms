'use strict';

// Implement a function findMinMax that takes an array of numbers and returns an object with the smallest and largest numbers.

function findMinMax(arr) {
  let minMax = {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
  return minMax;
}

const minMaxResult = findMinMax([3, 5, 7, 2, 8]);
console.log(minMaxResult);
