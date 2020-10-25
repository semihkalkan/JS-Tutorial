
let a = "Semih";
let b = "Semih";

if ( a === b ){

    console.log("eşit");
}

let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if(array1===array2){

    console.log("Eşit");
}

const person1 = {
    name:"Semih",
    age:23

}

const person2 = {
    name:"Semih",
    age:23
}

if(person1===person2){

    console.log("Eşit2");
}

const cities = new Map ();
const key = [1,2,3];


cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set(key,"Array")

console.log(cities.get(key));
