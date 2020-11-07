
function getData (data) {   //Promise objesi döndüren fonksiyon

return new Promise (function(resolve,reject){

    setTimeout(function(){

        if (typeof data === "string"){
            resolve(data);
        }
        else {
            reject(new Error("Lütfen string bir değer giriniz"));
        }
    },5000);
});


}

getData(22)
.then(response => console.log("Gelen Değer " + response))
.catch(err => console.error(err));

function addTwo(number){

    return new Promise ((resolve,reject) => {
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2);
            }
            else{
                reject(new Error("Lütfen bir sayı giriniz"))
            }
        },3000) 
    });
}

addTwo(10)
.then( response => {
    console.log(response);
    return response +2 ;
}).then(response2 => console.log(response2))
.catch(err => console.log(err));

