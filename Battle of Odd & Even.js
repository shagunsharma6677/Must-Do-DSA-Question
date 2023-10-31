// Description

// You are given an arrayarrofNintegers.

// You need to printOdd, if thesum of all odd numberspresent in the array is greater thansum of all the even numberspresent in the array, or else printEven.

// Input
// Input Format :

// First line contains N which is the number of elements present in the array.

// Second line contains N space separated integers which are the elements of array.

// Constraints :

// 1 <= N <= 100

// 1 <= arr[i] <= 100

// Output
// Print either "Odd" or "Even" depending upon the condition mentioned above.

// Sample Input 1

// 4
// 1 2 3 4
// Sample Output 1

// Even

function battleOfOddAndEven(n, arr) {
  //write code here

  let even_sum = 0;
  let odd_sum = 0;
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] % 2 === 0) {
      even_sum = even_sum + arr[i];
    } else {
      odd_sum = odd_sum + arr[i];
    }
  }

  if (odd_sum > even_sum) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}
