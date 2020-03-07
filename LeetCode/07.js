// Reverse Integer

// TASK: Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
// My solution 1 (runtime 88ms, memory 35.9 MB):
var reverse = function(x) {
  let num;

  if (x < 0) {
    num = x.toString().slice(1).split('').reverse().join('') * -1;
  } else {
    num = +x.toString().split('').reverse().join('');
  }

  if (num > Math.pow(2, 31) || num < Math.pow(-2, 31)) return 0;

  return num;
};

const output = reverse(-1534236469);
console.log(output);



// https://leetcode.com/problems/reverse-integer/