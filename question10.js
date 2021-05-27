// question 10
function isPrime(num){    
    if (num > 1){
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                console.log(num + " is not a prime number.");
                return 0;
            }
        }  
        console.log(num + " is a prime number.");
        return 1;
   }
   console.log(num + " is not a prime number.");
   return 0;
}
isPrime(23);