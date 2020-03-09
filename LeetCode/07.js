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



// Solution 2 from comments: (runtime 56ms, memory 35.7MB)
let reverse2 = function(x) {    
  let negative = x < 0;
  let reversed = 0;
  
  if (negative) {
      x *= -1;
  }
  
  while (x > 0) {
      reversed = (reversed * 10) + (x % 10);
      x = Math.floor(x / 10);
  }
  
  if (reversed > (2 ** 31 - 1)) {
      return 0;
  }
  
  return negative ? (reversed * -1) : reversed;
};


const output = reverse2(-123);
console.log(output);


// https://leetcode.com/problems/reverse-integer/
// https://www.youtube.com/watch?v=XpvNcex-rc0&list=PLko32sysgiEPGS4bXBRyZMo9ztcHmPI1z&index=7&t=0s