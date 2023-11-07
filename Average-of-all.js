// Description

// You are given anarrwhich hasNintegers.

// Write a program to print the ceil ofaverage of integerspresent in the array.

// Note:- The ceil value of the given whole numberKis the smallest integer value greater or equal to aK.

// For example:-

// if the value of K = 3.679, the ceil value of K is 4
// if the value of K = 5, the ceil value of K is 5.

// Input
// Input Format :

// First line contains N, which is the number of elements present in array.

// Second line contains N space separated integers, which are elements of array.

// Constraints :

// 1 <= n <= 100

// Output
// You need to output ceilof the average of numbers present in array.

// Sample Input 1

// 4
// 2 5 0 9
// Sample Output 1

// 4

function averageOfAll(n, arr) {
  //write code here
  let sum = 0;
  for (let i = 0; i <= n - 1; i++) {
    sum = sum + arr[i];
  }
  console.log(sum / n);
}
