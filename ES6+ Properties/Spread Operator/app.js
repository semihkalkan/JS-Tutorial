
const langs = ["Python","C++","Java","PHP"];

console.log(langs[0],langs[1],langs[2],langs[3]);

//spread operator

console.log(...langs);

const langs2 = ["JavaScript","C#",...langs];

console.log(langs2);

const numbers3 = [1,2,3,4,5,6,7,8,9];

const [a,b,...number2] = numbers3;

console.log (a,b);
console.log (number2);

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

addNumbers(numbers[0],numbers[1],numbers[2]);

addNumbers(...numbers);

