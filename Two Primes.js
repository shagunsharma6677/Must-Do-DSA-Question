// Description
// You are given two numbers, stored in variables with the following namesa, b
// If both the numbers are prime, printTrue, else printFalse
// Input
// The first and the only line of input contains the value stored ina, brespectively
// Output
// Print the output as explained in the problem statement
// Sample Input 1
// 11 17
// Sample Output 1

function twoPrimes(a, b) {
  //write code here

  let factor = 0;
  let bag = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      factor++;
    }
  }

  for (let i = 1; i <= b; i++) {
    if (b % i === 0) {
      bag++;
    }
  }

  if (bag === 2 && factor == 2) {
    console.log("True");
  } else {
    console.log("False");
  }
}
