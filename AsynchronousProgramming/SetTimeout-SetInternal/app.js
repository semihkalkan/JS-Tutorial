// Set Timeout

setTimeout(function(){

    console.log("HEy");

},2000)


//SetInterval 

let i = 0;

let value = setInterval( function() {
    i++ ;
    console.log("Number : ",i);

},1000);

//Clear Internal

document.getElementById("btn").addEventListener("click",function(){

        clearInterval(value);
});



