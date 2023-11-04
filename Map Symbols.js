// Description
// You are given a number stored in a variable with the nameN
// You have to map the following symbols starting from the valueN
// The mapping is such that the difference between the values of two characters, is 2
// '!','@','#','$','%','^','&','*'
// For example, consider the value stored inN = 10, then the required output will be
// !-10
// @-12
// #-14
// $-16
// %-18
// ^-20
// &-22
// *-24
// Input
// The first and the only line of the input contains the value stored inN
// Output
// Print the mapping for the symbols starting fromN, as shown in the problem statement
// Sample Input 1
// 20
// Sample Output 1
// !-20
// @-22
// #-24
// $-26
// %-28
// ^-30
// &-32
// *-34

function mapSymbols(N) {
  // Write code here

  let arr = ["!", "@", "#", "$", "%", "^", "&", "*"];
  for (let i = 0; i < 8; i++) {
    arr[i] = arr[i] + "-" + N;
    N = N + 2;
    console.log(arr[i]);
  }
}
