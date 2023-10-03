// Description
// You are given five numbers, stored in the variables with the following name
//  one, two, three, four, five
// You have to declare another variablesum1, such thatsum1 = one + two + three
// Also, you have to declare another variablesum2, such thatsum2 = four + five
// Finally, you have to print the output of the following operation
//  sum1 > sum2 (This operation prints true, if sum1 is greater than sum2, else it prints false)

// Sample Input 1
// 1 2 3 4 5
// Sample Output 1
// false

function sumAndCompare(one, two, three, four, five) {
  // Write code here
  let sum1 = one + two + three;
  let sum2 = four + five;
  console.log(sum1 > sum2);
}
