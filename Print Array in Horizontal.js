// Description
// You are given an array, whose size is stored in a variable of sizen
// The array is stored in a variable with the name,arr
// You have to traverse the array, and print each element on a new line
// For example, the value stored inN = 5, and the array isarr = [1 2 3 4 5]
// Therefore, the required output will be
// 1 2 3 4 5

// Sample Input 1
// 5
// 1 2 3 4 5
// Sample Output 1
// 1 2 3 4 5

function printHorizontalArray(N, arr) {
  //write code here

  let bag = "";
  for (let i = 0; i <= arr.length - 1; i++) {
    bag = bag + arr[i] + " ";
  }
  console.log(bag);
}
