class Person{
    constructor(public firstName:string, public lastName:string){

    }
    name(){
       return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou(){
        return `Hi I ${this.name()}`;
    }
}
let personObj = new Person('Abhilash', 'Reddy');
console.log(personObj.whoAreYou());

class Student extends Person{
    constructor(firstName:string, lastName:string, public marks:number){
        super(firstName,lastName);
    }
    whoAreYou(){
        return `${super.whoAreYou()} and I got ${this.marks} marks`;
    }
}
let studentObj = new Student("Abhilash", "Reddy", 100);
console.log(studentObj.whoAreYou());