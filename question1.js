// question 1
function isDivisible(num){
    if (num%3 == 0){
        return true;
    }
    return false;
}
var num = 4;
if (isDivisible(num)){
    console.log(num + ' is divisible by 3.');
}
else{
    console.log(num + ' is not divisible by 3.');
}