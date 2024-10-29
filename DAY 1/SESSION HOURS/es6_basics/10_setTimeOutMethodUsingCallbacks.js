function performTask(callBack, timeTaken){
    setTimeout(callBack, timeTaken)
    // setTimeout(function(){
    //     console.log("Task completed...");
    // }, 2000)
}

function downloadFile(){
    console.log("Download completed...");
}
performTask(downloadFile, 5000)