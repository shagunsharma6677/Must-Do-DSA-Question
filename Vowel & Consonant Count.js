Description

You are given a string, stored in a variable with the name,str

The size of the string is stored in another variable with the nameN

You have to find the count of vowels, and consonants in the string, and print it

For example, consider the value stored instr = "nrupul", and the value stored inN = 6, then the vowels, in the string isu, which is present twice. Therefore, the count of vowels becomes 2, and the rest of the characters are consonants, so the count of consonants becomes 4. Therefore, the required output will be

2 4
Note : All characters in the string are lowercase English alphabets

Note : The vowels in the English alphabet are the following - a,e,i,o,u. All the characters are considered as consonants

Input
The first line of the input contains the value stored inN

The next line contains the value stored instr


Output
Print the number of vowels, and number of consonants, present in the string stored instr

Sample Input 1 

6
ankush
Sample Output 1

2 4

function vowelAndConsonantCount(N, str) {
  //write code here
  
  let count=0;
  for (let i=0; i<=N-1; i++){
    if (str[i]==="a" || str[i]==="e"|| str[i]==="i"|| str[i]==="o"| str[i]==="u"){
        count++;
    } 
      }
          console.log(count, str.length-count);
          
      }
