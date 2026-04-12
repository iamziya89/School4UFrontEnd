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
// this.myName="Ziya Shameem";
// this.age =29;
// console.log(this);

// let Student={
//     myName : "Mohd Ziya Shameem",
//     age    : 29,
//     passion:"Bakaiti",
//     IntroducemySelf : function(){
//         console.log(`My name is ${this.myName}, I am ${this.age} years old and my passion is ${this.passion}`);
        
//     }
// }
// let Student_1={
//     myName : "Anas Ziya",
//     age    : 30,
//     passion:"S/W Engineers",
//     IntroducemySelf : function(){
//         console.log(`My name is ${this.myName}, I am ${this.age} years old and my passion is ${this.passion}`);
        
//     }
// }
// console.log(Student);
// Student.IntroducemySelf();
// console.log(Student_1);
// Student_1.IntroducemySelf();
// this.myName = "MOHD ZIYA";
// this.age =26;
// console.log(this);



// function Student(name, age, passsion){
//     this.name =name;
//     this.age=age;
//     this.passion=this.passion;
//     this.greet=function() {
//         console.log(`My name is ${this.name} and I am ${this.age} years old`);
        
//     }
// }
// let s1=new Student("Mohd Ziya", 28, "Bakaiti")
// s1.greet();
// let s2=new Student("Anas Shameem", 30, "S/W Engineers")
// s2.greet();


// let obj={
//     myName : "Mohd Ziya",
//     age    :26,
//     passion: "Bakaiti",
//     introduceMyself : myself
// }

// let obj_1={
//     myName : "Mohammad Arbaz",
//     age    :29,
//     passion: "S/W Engg.",
//     introduceMyself : myself
// }

// let obj_2={
//     myName : "Anas Ziya ",
//     age    :30,
//     passion: "Application Engg.",
//     introduceMyself : myself
//     }
// function myself(){
//     console.log(`Hi all My name is ${this.myName}, I am ${this.age} years old and my passion is ${this.passion}.`);
// }
// obj.introduceMyself();
// obj_1.introduceMyself();
// obj_2.introduceMyself();



// function Student(){
//     return
//     {
//         myName = "Mohd Ziya";
//     age    = 30;
//     passion= "Bakaiti";
//     introduceMyself = function(){
//         console.log(`Hi all My name is ${this.myName}, I am ${this.age} years old and my passion is ${this.passion}.`);
//     }
//     }
// }
// let result=Student();
// console.log(result)


// function Student(m, a,p){
//     return{
//          m,
//         a,
//         p,
//         intromyself : function(){
//             console.log(`My name is ${this.m}, I am ${this.a} years old and my passion is ${this.p}`);
//         }
//     }
// }
// let result=Student("Anas Ziya", 28, "Bakaiti");
// console.log(result);
// result.intromyself();
// let result_1=Student("Ahmad Nawaz", 33, "S/w Engg")
// console.log(result_1);
// result_1.intromyself();


function Student(age, name){
    this.name=name;
    this.age = age;
    this.greet=function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
let obj1=new Student(28, "Ziya");
obj1.greet();
console.log(obj1);
let obj2=new Student(33, "ARBAZ");
obj2.greet();
console.log(obj2);





























































