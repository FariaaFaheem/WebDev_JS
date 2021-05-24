// question 3
function factorial(num){
    if (num==1 || num==0){
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}
var num = 6;
console.log("Factorial of " + num + " is " + factorial(num) );