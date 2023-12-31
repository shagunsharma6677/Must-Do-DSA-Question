// Description
// You are given a positive number, stored in a variable with the namenum
// You need to find the factorial of the number.
// In simple words, the factorial of a number is the product of all positive integers less than or equal to a given positive integer.
// For example, you are given a numbernum = 5.
// According to the definition, the factorial ofnumwill be5*4*3*2*1 = 120, which is the required answer.
// Note: Factorial of 0 is 1.
// Input
// The first and the only line of the input contains the value stored in the variable with the namenum
// Output
// Print the factorial of the numbernumas mentioned in the problem.
// Sample Input 1
// 5
// Sample Output 1
// 120

function factorialOfNumber(num) {
  //Write the code

  let product = 1;
  for (let i = num; i >= 1; i--) {
    product = product * i;
  }
  console.log(product);
}
