let myNum = 800
console.log("Outside the function ", myNum);
function changeVal(){
    myNum = 5000
    console.log("Inside the function outside if (before)", myNum);
    if(true){
        myNum = 7000
        console.log("Inside the function and inside the if", myNum);
    }
    console.log("Inside the function outside if (after)", myNum);
}
changeVal()
console.log("Outside the function (after function call)", myNum);
