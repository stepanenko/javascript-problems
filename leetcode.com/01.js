
// TASK: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example: Given nums = [2, 7, 11, 15], target = 9
// Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1]

// My solution 1:
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// My solution 2:
// try to use arr.reduce(acc, el):

console.log(twoSum([2, 15, 11, 7, -2], 9)); // works
// console.log(twoSum([3, 3], 6)); // works

// From comments (fastest runtime solution):
// const twoSum = function(nums, target) {
//     const comp = {};
//     for(let i=0; i<nums.length; i++){
//         if(comp[nums[i] ]>=0){
//             return [ comp[nums[i] ] , i]
//         }
//         comp[target-nums[i]] = i
//     }
// };


// From comments: O(n) - One-pass Hash Table
// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (var i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i);
//     }
// }


// https://leetcode.com/problems/two-sum/
