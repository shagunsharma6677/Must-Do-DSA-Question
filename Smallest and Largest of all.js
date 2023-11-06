// Description
// Given an array,arrwhich hasNintegers.
// You need to print the smallest and largest element present in the array each on new lines.
// Input
// Input Format
// The first line contains an integerN.
// The second line containsNspace separated integers, which are integers of arrayarr.
// Constraints
// 1 <= N <= 100
// Output
// Output Format
// One first line, print minimum of all elements.
// On the second line, print the maximum of all elements.
// Sample Input 1
// 4
// -2 0 8 4
// Sample Output 1
// -2
// 8

function smallestAndLargestOfAll(n, arr) {
  //write code here

  let mini_Bag = -Infinity;
  let max_Bag = +Infinity;

  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] > mini_Bag) {
      mini_Bag = arr[i];
    }
  }
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] < max_Bag) {
      max_Bag = arr[i];
    }
  }
  console.log(max_Bag);
  console.log(mini_Bag);
}
