// question 9
function oddSum(num){
    var i;
    var sum=0;
    for (i=0; i<12; i++){
        if (i%2 !== 0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(oddSum(12));