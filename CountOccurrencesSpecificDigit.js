/*
    Count Occurrences of a Specific Digit
    Question: Count how many times a given digit appears in the number.

    Input:

    Number: 45545325
    Digit: 5

    Output:
    4
*/

function countOccurrenceNum(num,x){
    let count = 0;

    while(num > 0){
        let rem = num % 10;
        if(x === rem){
            count++;
        }
        num = Math.floor(num / 10);
    }
    return count
}
console.log(countOccurrenceNum(45545325, 5))