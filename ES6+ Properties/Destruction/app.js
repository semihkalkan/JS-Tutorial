
let number1, number2;

arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

console.log ( number1 , number2);

// Destructing

[number1,number2] = arr ;

console.log ( number1 , number2);

const [number1,number2] = arr ;

console.log ( number1 , number2);

//Object Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1,c:number2,e:number3} = numbers ;

console.log(number1.number2,number3);

//Function Destructing 

const getLangs = () => [Python,Java,C++];

const [lang1,lang2,lang3] = getLangs;

console.log(lang1,lang2,lang3);

//Object Eg

const person = {
    name:"Semih",
    year:1993,
    salary :3000,
    showInfos : () => console.log("bilgiler gösteriliyor")


}

const {name:isim,year:yıl,salary:maas,showInfos:bilgileriGoster} = person ;

console.log(isim,yıl,maas);

bilgileriGoster();