// Syntactic Sugar

//Old 

// function Employee (name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

// };

// Employee.prototype.showInfos = function(){

//     console.log("Ad: " + this.name + "Yaş: "+this.age + "Maaş "+this.salary);

// }

// const emp = new Employee ("Semih",23,3333);

// console.log(emp);

//--------------------------------------------------------------------------------------

class Employee {

    constructor(name,age,salary){
        this.name = name ;
        this.age = age;
        this.salary = salary ;
    }
    showInfos (){
        console.log("Ad:" + this.name + " Yaş:"+this.age + " Maaş:"+this.salary);
    }
}

const emp = new Employee ("Semih",23,3333);
// console.log(emp);

emp.showInfos();