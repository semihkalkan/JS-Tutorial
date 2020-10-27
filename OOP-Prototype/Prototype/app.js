function Employee(name,age){
    this.name = name;
    this.age = age ;
    // this.showInfos = function(){
    //     console.log("İsim: " + this.name + "Yaş: " + this.age);
    // }
}
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + "Yaş: " + this.age);
}
const emp1 = new Employee ("Semih",23);
const emp2 = new Employee ("Mustafa",25)
emp2.showInfos();
console.log(emp1);
console.log(emp2);




