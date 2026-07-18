/*
    Count Even and Odd Digits

    Question: Count how many even and odd digits are present in the given number.

    Input : 583962
    Output: {
            even: 3,
            odd: 3
            }
*/

function countEvenOdd(num){
    let countObj = {
        even:0,
        odd:0,
    }

    while(num > 0){
        let rem = num % 10;
        if(rem % 2 === 0){
            countObj["even"]++ 
        }else{
            countObj["odd"]++ 
        }
        
        num = Math.floor(num/10);
    }   
    return countObj;
}
console.log(countEvenOdd(583962));