// Description

// You are given two integers, stored in the variable with the following names

// L, W
// Also, you are given another two integers, stored in the variable with the following names

// length & width

// If the value stored in length is greater than the value stored in L and the value stored in width, is greater than the value stored in W, printUpload

// Else If the value stored in length is less than the value stored in L, printIncrease Length

// Else if the value stored in width, is less than the value stored in W, printIncrease Width

function profilePic(L, W, length, width) {
  //Write code here
  
  if(length> L){
      if(width> W){
          console.log("Upload");
          
      }else if (width < W) {
          console.log("Increase Width");
      } 
  }else if (length < L){
      console.log("Increase Length");
  }
}