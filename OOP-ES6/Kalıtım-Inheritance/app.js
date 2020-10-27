
class Person {      //SuperClass,BaseClass

    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
    showInfos(){
        console.log("İsim: "+ this.name +  " Yaş: " +this.age + " Maaş: " + this.salary);   
     }
}
class Employee extends Person {     //DerivedClass,SubClass,ChildClass

    constructor (name,age,salary){
        // this.name = name ;
        // this.age = age;
        super(name,age);
    
        this.salary = salary ;
    }
    showInfos(){
        console.log("İsim: "+ this.name +  " Yaş: " +this.age + " Maaş: " + this.salary);
    }
    toString(){
        console.log("Employee");
    }
    raiseSalary(amount){
        this.salary  += amount ;
    }
}

const emp = new Employee ("Semih",23,4000);
emp.raiseSalary(500);
// console.log(emp);
emp.showInfos();
// emp.toString();

