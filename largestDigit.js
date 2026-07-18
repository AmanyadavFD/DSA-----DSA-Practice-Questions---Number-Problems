/*
    Largest Digit

    Find the largest digit in the given number.

    Input:
        583962

    Output:
        9
*/

function largestDigit(num){
    let largest = -Infinity;

    while(num > 0){
        let rem = num % 10;
        if(rem > largest){
            largest = rem;
        }
        num = Math.floor(num / 10)
    }
    return largest;
}
console.log(largestDigit(583962))