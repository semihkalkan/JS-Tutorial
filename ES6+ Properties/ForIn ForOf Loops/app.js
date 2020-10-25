const person = {
    name:"Semih",
    age:23,
    salary:3000
};

const langs = ["Python","Java","C++","Php"];

const name = "Semih";

        //For In

for(let prop in person){

    console.log(prop,person[prop]);
}

for ( let index in langs){
    console.log(index,langs[index]);
}

        //String

for (let index in name ){

    console.log(index,name[index]);
}

        //For Of

// for (let value of person){ hatalı kullanım (array benzeri)

//     console.log(value);
// }

for ( let value of langs){

    console.log(value);
}

        //String

for ( let character of name){

    console.log(character);
}
