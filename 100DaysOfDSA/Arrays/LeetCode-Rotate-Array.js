'use strict ';

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// function rotate(arr, num) {
//   return [...arr.slice(-num), ...arr.slice(-num)];
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

function rotateArray(nums, k) {
  k = k % nums.length;

  if (k === 0) {
    return;
  }

  let lastElements = nums.splice(nums.length - k, k);
  nums.unshift(...lastElements);
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
