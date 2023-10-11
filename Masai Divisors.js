// Description

// You are provided 3 integers: left, right and k.
// Your task is to write a program that finds out the count of all such numbers between lefts and right (both inclusive) which are divided by k.

function masaiDivisors(left, right, k) {
  //write code here

  let count = 0;
  for (let i = left; i <= right; i++) {
    if (i % k == 0) {
      count++;
    }
  }
  console.log(count);
}
