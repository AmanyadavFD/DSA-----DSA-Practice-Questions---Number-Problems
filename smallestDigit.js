
function smallestDigit(num){
    let smallest = Infinity;

    while(num > 0){
        let rem = num % 10;
        if(rem < smallest){
            smallest = rem;
        }
        num = Math.floor(num/10);
    }
    return smallest
}
console.log(smallestDigit(583962))