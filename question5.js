// question 5
function isRollNo (str){
    var sub = str.slice(4,5);
    if (Number(str.slice(0,3)) && Number(str.slice(6,8)) ) {
        console.log("Good");
    }
}
isRollNo("2019ee003");