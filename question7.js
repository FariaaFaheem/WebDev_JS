// question 7
function sortNums(arr){
    arr.sort(function(a, b){return a - b});
    return arr;
}
arr=[5,3,6,23,88,12];
console.log(sortNums(arr));