// Description

// You are given a number stored in a variable with the nameN

// You are given another number stored in a variable with the nameK

// You have to map all the numbers in the range of[1, N], including the values stored inN, such that the mapping begins fromK

// For example, consider the value stored inN = 5, andK = 10, then the required output will be

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

// Input
// The first line of the input contains the value stored inN

// The next line of the input contains the value stored inK

// Output
// Print the output as shown in the problem statement

// Sample Input 1

// 5
// 10
// Sample Output 1

// 1-10
// 2-11
// 3-12
// 4-13
// 5-14

function mapNumbers(N, K) {
  //write code here

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i === j) {
        console.log(i + "-" + K++);
      }
    }
  }
}
