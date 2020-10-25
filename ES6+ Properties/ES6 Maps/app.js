// Maps - Key - Value

let myMap = new Map(); 

console.log(myMap);

const key1 = "Semih";
const key2 = {a:10,b:20};
const key3 = () => 2;

//set

myMap.set(key1,"String Değer");
myMap.set(key2,"Object literal değer");
myMap.set(key3,"Function Değer");

//get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

//Map boyutu

console.log(myMap.size);

const cities = new Map ();

cities.set("Ankara",5);
cities.set("istanbul",15);
cities.set("izmir",4);

//forEach

cities.forEach(function(value,key){

    console.log(key,value);

})

//forOf

for (let [key,value] of cities){
    console.log(key,value);
}

//map keys

for(let key of cities.keys()){
    console.log(key);
}

//map values 

for ( let value of cities.values()){
    console.log(value);
}

//arraylarden map oluşturma

const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map (array);


console.log(lastMap);

//mapplerden array oluşturma

const cities2 = new Map ();

cities2.set("Ankara",5);
cities2.set("istanbul",15);
cities2.set("izmir",4);

const array2 = Array.from(cities2);
//[["Ankara",5]["İstanbul",15]["İzmir",4]]
console.log (array2);
