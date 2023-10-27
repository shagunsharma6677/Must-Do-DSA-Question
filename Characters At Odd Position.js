// Description
// You are given a string whose size is stored in a variable with the nameN, stored in a variable with the namestr
// You have to print all the characters in the string, which are present at odd indexes
// For example, consider the string stored instr = "nrupul", and the value stored inN = 6, then the output will be
// r
// p
// l
// The characters stored at odd positions arer - index 1,p - index 3,l - index 5, hence they are printed, each character on a new line
// Note : The indexing in the string starts from 0
// Input
// The first line of the input contains the value stored inN
// The next line of the input contains the value stored instr
// Output
// Print the characters at odd indexes, as shown in the problem statement, each character on a new line
// Sample Input 1
// 6
// ankush
// Sample Output 1
// n
// u
// h

function charAtOddPos(N, str) {
  //write code here
  for (let i = 0; i <= N - 1; i++) {
    if (i % 2 !== 0) {
      console.log(str[i]);
    }
  }
}
