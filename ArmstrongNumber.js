/*
    Armstrong Number
    Check whether the given number is an Armstrong number.

    Input:
    153

    Output:
    true
*/

function armstrongNumber(num){
    let count = 0;
    let totalSum = 0;
    let originalNum = num;
    let copyOfNum = num;
    while(num > 0){
        num = Math.floor(num / 10);
        count++;
    }
    
    while(copyOfNum > 0){
        let rem = copyOfNum % 10;
        totalSum +=  rem ** count;
        copyOfNum = Math.floor(copyOfNum / 10);
    }
   

    if(totalSum === originalNum){
        return true;
    }else{
        return false;
    }
}

console.log(armstrongNumber(370));
console.log(armstrongNumber(371));
console.log(armstrongNumber(407));
console.log(armstrongNumber(123));
console.log(armstrongNumber(9474));