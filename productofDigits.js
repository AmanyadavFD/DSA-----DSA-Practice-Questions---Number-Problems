/*
3. Product of Digits

Question:** Find the product of all digits in a given number.


Input: 234

Output: 24
*/

function productDigits(num){
    let product = 1;

    while(num > 0){
        let lastDigit = num % 10;
        product = product * lastDigit;
        num = Math.floor(num / 10);
    }
    return product
}
console.log(productDigits(234));