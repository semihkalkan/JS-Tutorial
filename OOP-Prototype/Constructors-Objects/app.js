
// console.log(this); //Global Scope

// const emp1 = {  //object literal
//     name : "Semih",
//     age :25,
//     showInfos : function() {console.log("Bilgileri Göster");}
// };

// const emp2 = {
//     name: "Kalkan",
//     age:25
// };

// emp1.salary = 4000;
// emp1.showInfos ();
// console.log(emp1);


function Employee (name,age,salary){  //yapıcı fonksiyon - Constructor

this.name = name ;
this.age = age ;
this.salary = salary;

this.showInfos = function(){

    console.log(this.name,this.age,this.salary);
}

}

const emp1 = new Employee("Semih",23,3333);
const emp2 = new Employee("Kalkan",25,5900);

emp1.showInfos();
emp2.showInfos();