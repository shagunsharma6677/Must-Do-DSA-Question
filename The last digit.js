// Description
// You are given a number stored in a variable, with the namenumber
// Check whether the last digit of the number is divisible by 3 or not.
// If it is divisible by 3, then print "Divisible".
// Otherwise "Not Divisible".
// Input
// The first and the only line of the input contains the number stored in the variablenumber
// Constraints
// 1 <= N <= 99999
// Output
// If the value stored innumber, is divisible then printDivisible, else printNot Divisible
// Sample Input 1
// 126
// Sample Output 1
// Divisible

function theLastDigit(number) {
  // Write code here

  let lastDigit = number % 10;
  if (lastDigit % 3 === 0) {
    console.log("Divisible");
  } else {
    console.log("Not Divisible");
  }
}
