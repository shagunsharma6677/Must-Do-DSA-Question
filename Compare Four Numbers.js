// Description

// You are given four numbers stored in variables with the following names

// one, two, three, four

// If the value of both the following expression is true, printYes, else printNo

// 1. one > two

// 2. three > four

// Sample Input 1
// 1 2 4 3
// Sample Output 1
// No

function compareFourNumbers(one, two, three, four) {
  // Write code here

  if (one > two && three > four) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
