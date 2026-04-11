/*
Object literals
let Student={
    myName      : "Mohd ZIya Shameem",
    age         :  28,
    passion     : "Bakaiti",
    introduce   :int
    // introduce   :function(){
    //     // console.log(this);
        
    //     console.log(`My name is ${this.myName}, I am ${this.age} years Old my passion is ${this.passion}`);
    // }
}

let Student1={
    myName      : "Shameem",
    age         :  29,
    passion     : "Software Engineers",
    introduce   :int
}
function int(){
        // console.log(this);
        console.log(`My name is ${this.myName}, I am ${this.age} years Old my passion is ${this.passion}`);
    }
Student.introduce();
Student1.introduce();

Object literals
*/

//  Factory Function
// function Myobj(name, age, passion){
//     return{
//         myName  : name,
//     age,
//     passion ,
//     introduce   :function(){
//         // console.log(this);
        
//         console.log(`My name is ${this.myName}, I am ${this.age} years Old my passion is ${this.passion}`);
//     }
//     }
// }
// let result=Myobj("Arbaz", 30, "Software Engineers");
// console.log(result);

// let result2=Myobj("Mohd Ziya", 34, "Data Engineers");
// result.introduce();
// result2.introduce();
// console.log(result2);

// Constructor Function
// this.name="Mohammad";
// this.age=28;
// this.name="Anas"
// console.log(this);

// function Student(name, age, passion){
//     this.name = name;
//     this.age  =age;
//     this.passion=passion;
//     return this
// }
// let s1=new Student("Ziya", 29, "Bakaiti")
// let s2=new Student("Anas", 19, "Software")
// console.log(s1);
// console.log(s2);

// let Student = {
//     myname : "Mohd Ziya Shameem",
//     age  :29,
//     passion : "Bakaiti",
//     introduceMySelf : function(){
//         // console.log(`My name is ${this.myname}, I am ${this.age} years old and my passion is ${this.passion}`);
//         console.log(this);  
//     }
// }
// Student.introduceMySelf();

// let Student={
//     myName : "Mohd Ziya Shameem",
//     age : 39,
//     passion : "S/W Engineer",
//     myfun: xyz
// }
// let Student2={
//     myName : "Anas Ziya ",
//     age : 25,
//     passion : "Civil Engineer",
//     myfun: xyz
// }
// let Student3={
//     myName : "Arbaz",
//     age : 20,
//     passion : "Mechanical Engineer",
//     myfun: xyz
// }
// function xyz(){
//     console.log(`My name is ${this.myName}, I am ${this.age} years Old and I am a ${this.passion}`);
// }
// Student.myfun();
// Student2.myfun();
// Student3.myfun();

// function Student(myName, age, passion){
//     return {
//     myName ,
//     age,
//     passion,
//     myFun: function(){
//         console.log(`My name is ${this.myName}, I am ${this.age} years Old and I am a ${this.passion}`);
//     }
// }
// }
// let result=Student("ARBAZ", 20, "Bakaiti");
// let result2=Student("ANAS", 25, "S/w Engg");
// console.log(result);
// console.log(result2);
// result.myFun();
// result2.myFun();
// this.name="Mohd Ziya";
// this.age=25;
this.myName="Ziya Shameem";
this.age =29;
console.log(this);


















