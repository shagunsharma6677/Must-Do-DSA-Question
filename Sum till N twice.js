// Description
// You are given a numbernumstored in a variable with the namenum
// You have to find the sum of firstnumnatural numbers in the range of1 to num, including the value stored innumitself, but each number should be added twice
// For example, consider the value stored innum = 3, therefore, the sum of firstnumnatural numbers issum = 1 + 2 + 3, but each number has to be added twice
// Therefore,sum = 1 + 1 + 2 + 2 + 3 + 3 = 12, which is the required answer
// Input
// The first and the only line of input contains the value stored innum
// Output
// Print the value ofsumas shown in the problem statement
// Sample Input 1
// 3
// Sample Output 1
// 12

function sumTillNTwice(num) {
  //Write the code

  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum = sum + i * 2;
  }
  console.log(sum);
}
