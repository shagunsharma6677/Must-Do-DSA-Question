// Division Task Ended
// Description

// You are given a number N.

// Let’s say you derive a variablexwhich is equal to the floor of a number you get when32is divided byN.

// In casexis 0, printToo Low
// In case it is not possible to generate a valid number, print-1
// In all other cases, printx.

// Input
// Input Format :

// First line contains N


// Constraints :

// 0 <= N <= 100


// Output
// Output string or number based on the conditions mentioned above.


// Sample Input 1 

// 4
// Sample Output 1

// 8
// Sample Input 2 

// 3
// Sample Output 2

// 10

function divisionTask(N) {
    // Write code here
    
    let x=Math.floor(32/N);
    if (x===0){
        console.log("Too Low");
    } else if (N===0) {
        console.log("-1");
    } else {
        console.log(x);
    }
    }