// Description

// You are given an array of N integers. You need to printYesif 42 is present in array, else printNo.


// Input
// Input Format :

// First line contains number of integers N present in the array.

// Second line contains  N  space separated integers.

// Constraints :

// 1 <= N <= 100


// Output
// Output "Yes" or "No" based on condition mentioned above.


// Sample Input 1 

// 5
// 3 7 0 9 8
// Sample Output 1

// No

function equalTo42(size,arr) {
    //write code here
    
    let count=0;
    for( let i=0; i<=arr.length-1; i++){
        if (arr[i]===42){
            count++;
        } else {
            continue;
        }
    }
    if (count===0){
        console.log("No");
    } else {
        console.log("Yes");
    }
}