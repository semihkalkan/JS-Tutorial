//Sets (Kümeler)

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Semih");
myset.add([1,2,3]);
myset.add({a:1,b:2});

const myset2 = new Set([100,3.14,"Semih"]);

// console.log(myset);
// console.log(myset2);

//size
// console.log(myset.size);

//delete method

// myset.delete("Semih");

// console.log(myset);

//Has Method

// console.log(myset.has("Semih"));
// console.log(myset.has(3.14));
// console.log(myset.has([1,2,3]));

//forEach

myset.forEach(function(value){
    console.log(value);
})

//forOf

for (let value of myset){

    console.log(value);

}

//set to array

const array = Array.from(myset);

console.log(array);
