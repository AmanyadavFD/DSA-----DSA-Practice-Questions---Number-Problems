/*
4. Reverse a Number

Question: Reverse the given number.

Input: 12345;

Output: 54321
*/

function reverseNumber(num){
    let rev = 0;
    while(num > 0){
        let rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num/10);
    }
    return rev;
}
console.log(reverseNumber(12345))