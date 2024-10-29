var myNum = 500
console.log("Before and outside of function : ", myNum);
function changeVal(){
    myNum = 1500
    if(true){
        var myNum = 3500
        console.log("Inside if and inside the function: ", myNum);
    }
    console.log("Before and outside of function : ", myNum);
}
changeVal()
console.log("My Num: ", myNum);