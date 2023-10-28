// Description
// You are given a string, whose size is stored in a variable with the nameN
// The string is stored in a variable with the namestr
// You have to printtrue, if the string contains at least one vowel, otherwise printfalse
// For example, consider the value stored inN = 6, and the value stored instr = "nrupul", then the output will betrue, since the string contains the vowelutwice
// Note : The string only contains lowercase English alphabets
// Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u
// Input
// The first line of the input contains the value stored inN
// The next line contains the value stored instr
// Output
// Printtrue, if the value stored instrcontains at least one vowel, otherwise printfalse
// Sample Input 1
// 4
// stvr
// Sample Output 1

function checkVowel(N, str) {
  //write code here

  bag = 0;

  for (let i = 0; i <= N - 1; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      (str[i] === "o") | (str[i] === "u")
    ) {
      bag++;
    } else continue;
  }

  if (bag === 0) {
    console.log("false");
  } else {
    console.log("true");
  }
}
