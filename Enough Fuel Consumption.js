// Description

// You are given two numbers, stored in the variable with the following names

// fuel, distance

// Find the value of required, such that

// required = fuel*distance 

// If the value ofrequiredis greater than 50, printEnough, else printGo On

function enoughFuelConsumption(fuel, distance) {
    //write code here
    
    let required = fuel*distance
    if (required>50) {
        console.log("Enough");
    }else {
        console.log("Go On");
    }
}