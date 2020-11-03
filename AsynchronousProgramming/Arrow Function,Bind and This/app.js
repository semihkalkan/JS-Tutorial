const person = {

    age:25,

    // tellAge : function (){
    //     console.log(this);
    //     console.log(this.age)
    // }

    tellAge : () => {

        console.log (this);
        
        console.log(this.age);

    }

    }


person.tellAge();