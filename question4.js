// question 4
function secondLarge(arr){
    var x;
    arr.sort(function(a, b){return b - a }); // descending order
    for (x=1; x<arr.length; x++)
        if (arr[x] !== arr[0]){ return arr[x] ;}
    }

var arr=[3,7,98,18,98,17,67];
console.log(secondLarge(arr));
