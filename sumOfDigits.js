/*
    Sum of digits
    Find the sum of all digits in a Given Number.

    input: 5829
    output:24
*/
function sumOfDigits(num){
    let sum = 0;
    while(num > 0){
        let lastDigit = num % 10;

        sum = sum + lastDigit;
        num = Math.floor(num/10);
    }
    return sum;
}

const sumOfDigitsOutPut = sumOfDigits(5829);
console.log(sumOfDigitsOutPut)

// console.log(5829 % 10)