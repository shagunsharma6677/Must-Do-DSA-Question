// Description

// You are given a number stored in a variable with the nameN

// You have to printNlines such that on each line you find the sum of all even numbers in the range of[1,i], whereirepresents all the numbers in the range of[1,N]

// For example, consider the value stored inN = 3

// Then, first we find the sum of all even numbers, in the range of [1,1], which comes out to be zero, as there are no even numbers in the range

// Then, we find the sum of all even numbers, in the range of [1,2], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Finally, we find the sum of all even numbers in the range of [1,3], which comes out to be 2, as there is only 1 even number (2). Hence, the sum becomes 2

// Therefore, the final output becomes

// 0
// 2
// 2

// Input
// The first and the only line of the input contains the value stored inN

// Output
// PrintNlines such that on each line you find the sum of all even numbers in the range of[1,i], whereirepresents all the numbers in the range of[1,N], as shown in the problem statement

// Sample Input 1

// 4
// Sample Output 1

// 0
// 2
// 2
// 6

function evenSumAgain(num) {
  // Write code here

  for (let i = 1; i <= num; i++) {
    let sum = 0;
    for (let j = 1; j <= i; j++) {
      if (j % 2 === 0) {
        sum = sum + j;
      }
    }
    console.log(sum);
  }
}
