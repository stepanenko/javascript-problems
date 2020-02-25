
// TASK: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example: Given nums = [2, 7, 11, 15], target = 9
// Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1]

// My solution 1 (runtime 108ms):
function twoSum1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Solution 2 (runtime 52ms):
function twoSum2(nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};

// const output = twoSum2([2, 15, 11, 7, -2], 9);   // [ 0, 3 ]
const output = twoSum2([3, 3], 6);   // [ 0, 1 ]
console.log(output);



// Solution 3: O(n) - One-pass Hash Table
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
