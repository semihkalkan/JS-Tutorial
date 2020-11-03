
// const langs = ["Python","Java","C++"];

// langs.forEach(function(lang){

//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click",function(){
// console.log("click");
// });

// function proccess1 (callback){
//     setTimeout(() => {
//         console.log("Proccess 1")
//         callback();
//     }, 3000);
// }

// function proccess2 (){
//     setTimeout(() => {
//         console.log("Proccess 2");
//     }, 2000);
   
// }

// proccess1 (proccess2);

const langs = ["Python","Java","C++"];

function addLang(lang,callback){

    setTimeout(() => {
        langs.push(lang);
        console.log("added");
        callback();
    }, (2000));
}

function getAllLangs(){
    setTimeout(() => {
        langs.forEach(function(lang){
            console.log(lang);
        })
    }, 1000);
}

addLang("Javascript",getAllLangs);
