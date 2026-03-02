// Write a function sumArray that takes an array of numbers and returns the sum of all elements.

// Example: sumArray([5, 10, 15]) should return 30.

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([5, 10, 15]));
