// console.log("MOHD ZIYA SHAMEEM");

//  ARRAY
// const arr=new Array(5).fill("ZIYA");
// console.log(arr);

// const arrof =Array.of("ZIYA", "SHAMEEM");
// console.log(arrof);

// const arrfrom=Array.from("SHAMEEM AHMAD")

// console.log(arrfrom);

// let arr =[2,2,2,4,4]
// let str=""
// for(let elm of arr){
//     str+=elm
// }
// console.log(typeof str);

// var plusOne = function(digits) {
//     let str="";
//     let arr=[]
//     for(let elm of digits){
//         str+=elm
//     }
//     let numStr=parseInt(str)+1;
    
// };

// console.log(plusOne([1,2,3]))



// OOPs Concept
// const date=new Date();
// console.log(date.toLocaleString())



//  OBJECT LITERALS


// let Students1={
//     myName  : "MOHD",             // Properties
//     age   :28,
//     address:"Sitkahan Tanda",   // Properties
//     fullAdd: intro
// }
// let Students2={
//     myName  : "ARBAZ",             // Properties
//     age   :30,
//     address:"Aligarh Tanda",   // Properties
//     fullAdd: intro
// }
// let Students3={
//     myName  : "ANas",             // Properties
//     age   :34,
//     address:"Delhi Tanda",   // Properties
//     fullAdd: intro
// }
// function intro(){
//         console.log(`My name is ${this.myName}, my age is ${this.age} and my address is ${this.address}`);    // Mentod
//     }
// Students1.fullAdd()
// Students2.fullAdd()
// Students3.fullAdd()



// //  FACTORY FUNCTIONS
// function Students(names,age, address){
//     return {
//     myName : names,             // Properties
//     age,
//     address,   // Properties
//     fullAdd: function(){
//         console.log(`${this.myName} , ${this.age} and ${this.address}`)
//     }
// }
// }
// let s1 = Students("ANAS ZIYA", 34, "SITKAHAN TANDA")
// s1.fullAdd()
// let s2 = Students("ARBAZ", 38, "MUSHAN TANDA")
// s2.fullAdd()
// let s3 = Students("Musheer", 32, "Continua Kids")
// s3.fullAdd()


// 3. Constructor Functions : A constructor function is a regular function used with the new keyword to create multiple objects with the same structure.

// function Students(myName, age, address){
//     this.myName = myName;
//     this.age = age;
//     this.address=address;
// }
// let s1=new Students("ZIYA", 29, "MUSHAN")
// let s2=new Students("Musheer", 25, "ILTIFATGANJ")
// console.log(s1)
// console.log(s2)

// const arr = new Array(5,6,7)
// console.log(arr)
// console.log(typeof arr)    //o/p : object
// console.log(typeof Array)  //o/p : function

// 

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, num) => { return acc + num; }, 0);
// console.log(sum); // 10


// const user = { name: "Ziya", age: 30, city: "Delhi" };
//  const { name, age } = user; 
// console.log(name); // Ziya
// console.log(age); // 30
// const numbers = [10, 20, 30];
//  const [first, second] = numbers;
//  console.log(first); // 10 
// console.log(second); // 20

// function Students(myName, age){
//     this.myName=myName;
//     this.age=age;
// }
// let s1=new Students("ZIYA", 35)
// console.log(s1)

function Students(name, age){
    this.name=name;
    this.age=age;
}
let s1=new Students("ZIYA", 28)
console.log(s1)
















































