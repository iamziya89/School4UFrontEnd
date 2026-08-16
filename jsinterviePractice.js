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


// function Student(age, name){
//     this.name=name;
//     this.age = age;
//     this.greet=function(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// let obj1=new Student(28, "Ziya");
// obj1.greet();
// console.log(obj1);
// let obj2=new Student(33, "ARBAZ");
// obj2.greet();
// console.log(obj2);

// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(add(10,20));

// let total=0;
// function add(num){
//     total+=num;
//     return total;
// }
// console.log(add(10));
// console.log(add(10));

// console.log(function(a,b){
// return a*b;
// }(4,5))

// (function(a,b){
//     console.log(a*b);
// })(14,5);

//  CallBack functionnnnnnnnn

// const sum=(a,b)=>{
//     console.log(a+b);
// }

// function calculate(a,b,callback){
//     callback(a,b)
// }
// calculate(5,11,sum)


// const product=(a,b,c)=>{
//     console.log(a*b*c)
// }
// function calculate(a,b,c,callback){
//     callback(a, b, c)
// }
// calculate(2,3,4,product)

// const divide=

// function product(a,b,c){
//     console.log(a*b*c);
// }
// function calculate(a,b,c,callback){
//     callback(a,b,c)
// }
// calculate(10,20,30,product)

// function calculate(a,b,c,callback){
//     callback(a,b,c)
// }
// calculate(20,30,40,(a,b,c)=>{
//     console.log(a*b*c);
// })

// function database(id, nextdata){
//     setTimeout(()=>{
//         console.log(id);
//         if(nextdata){
//             nextdata()
//         }
//     }, 2000)
// }
// console.log("Data 1:");

// database(1, ()=>{
//     console.log("Data 2:");
    
//     database(2,()=>{
//         console.log("Data 3:");
//         database(3)
//     })
// })



// function calculate(a,b,c,callback){
//     callback(a,b,c);
// }
// calculate(15,25,35, (a,b,c)=>{
//     console.log(a+b+c);
// })

// function sum(a,b){
//     console.log(a+b);
// }
// function calculate(a,b,callback){
//     callback(a,b)
// }
// calculate(20,30,sum)

// function database(id, nextdata){
//     setTimeout(()=>{
//         console.log(id);
//         if(nextdata){
//             console.log(nextdata);
//         }
//     },3000)
// }
// database(1,()=>{
//     database(2,()=>{
//         database(3)
//     })
// });

// function database(id, nextdata){
//     setTimeout(()=>{
//         console.log(id);
//         if(nextdata){
//             nextdata();
//         }
//     },3000)
// }
// console.log("Data 1 :");

// database(1,()=>{
//     console.log("Data 2 :");
//     database(2, ()=>{
//         console.log("Data 3 :");
//         database(3)
//     })
// })


//  Promises

// function sum(a,b){
//     console.log(a+b);
// }
// function calculate(a, b, callback){
//     callback(a,b)
// }
// calculate(150, 120, sum)

// function calculate(a,b,c,cb){
//     cb(a,b,c)
// }
// calculate(10,20,30, (a,b,c)=>{
//     console.log(a+b+c);
// })


// function database(id, nextdata){
//     setTimeout(()=>{
//         console.log(id);
//         if(nextdata){
//             nextdata()
//         }
//     }, 3000)
// }
// console.log("Data 1:");
// database(1, ()=>{
//     console.log("Data 2:");
//     database(2, ()=>{
//         console.log("Data 3:");
//         database(3, ()=>{
//             console.log("Data 4:");
//             database(4)
//         })
//     })
// })


// function outer(){
//     let count =0;
//     return function(){
//         count++;
//         return count;
//     }
// }
// let myFun=outer()
// console.log(myFun());
// console.log(myFun());
// console.log(myFun());

//  function memoization(){
//     let cache ={};
//     return function(n){
//         if(n in cache){
//             console.log("Return Stored Result : ")
//             return cache[n]
//         }
//         cache[n] = n*n;
//         console.log("Calculating : ")
//         return cache[n]
//     }
//  }
//  let myFun = memoization();
//  console.log(myFun(5));
//  console.log(myFun(5));
//  console.log(myFun(6));



// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(100)(20)(30));


// let sum=(a,b)=>{
//     console.log(a+b);
// }
// let calculate = (a,b,callback) =>{
//     callback(a,b);
// }
// calculate(10,20, sum)

// let calculate = (a,b,cb)=>{
//     cb(a,b)
// }
// calculate(20,30, (a,b)=>{
//     console.log(a+b);
// })


// function database(id, nextdata){
//     setTimeout(()=>{
//         console.log(id);
//         if(nextdata){
//             nextdata();
//         }
//     },2000)
// }
// console.log("Data 1");
// database(1, ()=>{
//     console.log("Data 2");
//     database(2, ()=>{
//         console.log("Data 3");
//         database(3, ()=>{
//             console.log("Data 4");
//         })
//     })
// })
// console.log(p);
// let p= new Promise((resolve, reject) => {
//     console.log("Data");
//     resolve(200)
// })

// function database(id){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Data", id);
            
//             res("success")
//         },3000)
//     })
// }
// database(1).then(()=>{
//     database(2).then(()=>{
//         database(3).then(()=>{})
//     })
// })

// function database(id){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Error", id);
//             rej("error")
//         },2000)
//     })
// }
// database(1).catch(()=>{
//     database(2).catch(()=>{
//         database(3).catch(()=>{

//         })
//     })
// })


// function database(id,nextdata){
//     setTimeout(()=>{
//         console.log(id);
//         if(nextdata){
//             nextdata()
//         }
//     },2000)
// }
// console.log("data 1");
// database(1,()=>{
//     console.log("data 2");
//     database(2,()=>{
//         console.log("data 3");
//         database(3,()=>{
//             console.log("data 4");
//         })
//     })
// })




// let p=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej("errors")
//     },10000)
// })

// function database(id) {
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("Error", id);
//             rej('success')
//         },2000)
//     })
// }
// database(1).then(()=>{
//     database(2).then(()=>{
//         database(3).then(()=>{
//             database(4)
//         })
//     })
// })

// database(1).catch(()=>{
//     database(2).catch(()=>{
//         database(3).catch(()=>{
//             database(4)
//         })
//     })
// })

// async function sum(a,b){
//     console.log(a+b);
// }

// function server(id){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("data",id);
//             res("success")
//         },2000)
//     })
// }
// const result =async ()=>{
//     await server(1)
//     await server(2)
//     await server(3)
//     await server(4)
// }
// result();


// async function getjokes(){
//     let jokes= await fetch("https://official-joke-api.appspot.com/jokes/programming/random");
//     let result = await jokes.json();
//     console.log(result.setup+result.punchline);
// }

// async function getdata() {
//     let jokes =await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
//     let result =await jokes.json();
//     console.log(result[0].punchline);
// }
// getdata();


// function calculate(a,b,callback){
//     callback(a,b)
// }
// calculate(12,18,(a,b)=>{
//     console.log(a+b)
// })
// calculate(22,28,(a,b)=>{
//     console.log(a+b)
// })



// function getdata(id,nextdata){
//     setTimeout(()=>{
//         console.log(id)
//     if(nextdata){
//         nextdata()
//     }
//     },2000)
// }
// console.log("Data 1");
// getdata(1,()=>{
//     console.log("Data 2");
//     getdata(2, ()=>{
//         console.log("Data 3");
//         getdata(3, ()=>{
//             console.log("Data 3");
//             getdata(4, ()=>{
//                 console.log("Data 4");
//             })
//         })
//     })
    
// })



// let p=new Promise((res, rej)=>{
//     setTimeout(()=>{
//         rej("success")
//     },5000)
// })
// p.then((r)=>{
//     console.log(r);
//     }).catch((err)=>{
//         console.log(err);
//     })

// function getdata(id){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("Error", id);
//             rej("reject")
//         },3000)
//     })
// }
// getdata(1).then(()=>{
//     getdata(2).then(()=>{
//         getdata(3).then(()=>{
//             getdata(4).then(()=>{

//             })
//         })
//     })
// }).catch(()=>{
//     getdata(11).catch(()=>{
//         getdata(12).catch(()=>{
//             getdata(13).catch(()=>{

//             })
//         })
//     })
// })

// let btn=document.getElementById('btn')
// async function getdata(){
//     let head=document.getElementById('head');
    
//     let jokes =await fetch("https://official-joke-api.appspot.com/jokes/random");
//     let res=await jokes.json();
//     head.innerHTML=`${res.setup}+ <br/> ${res.punchline}`;
// }
// btn.addEventListener('click', ()=>{
//     getdata();
// })



// A pure function always return the same output for the same input and has no side effect.
// function sum(a, b){
//     return a+b;
// }
// console.log(sum(10, 20));
// console.log(sum(10, 20));


// let total =0;
// function sum(num){
//     total+=num;
//     return total;
// }
// console.log(sum(5));
// console.log(sum(5));

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(10, 20));
// console.log(sum(10, 20));

// let total=0;
// function sum(num){
//     total+=num;
//     return total;
// }
// console.log(sum(10));
// console.log(sum(10));

// console.log(function(a,b){
//     return a+b;
// }(4,8));

// function greet(city, state){
//   return ( `My name is ${this.name}, I am ${this.age} years old and i am from ${city} ${state}`)
// }
// const obj={
//     name    : "MOHD ZIYA SHAMEEM",
//     age     :  29
// }
// console.log(greet.call(obj, ["Delhi", "UP"]))

// const person = {
//     name : "Mohammad Ziya Shameem",
//     age  : 34
// }
// function greet(city){
//     return `Hello My name is ${this.name}, I am ${this.age} years old and I am from ${city}`
// }
// const newgreet = greet.bind(person);
// console.log(newgreet("delhi"))

// const person ={
//     name  : 'ZIYA SHAMEEM',
//     age   :  25
// }
// function greet(city, country){
//     console.log(`My name is ${this.name}, I am ${this.age} years old and i am from ${city} ${country}`);
// }
// const newFun =greet.bind(person);
// newFun("Tanda", "Ambedkar Nagar")


// const obj={
//     name  : "MOHD ZIYA",
//     age   :25
// }
// function greet(city, pin){
//     console.log(`My name is ${this.name}, I am ${this.age} years old and I m from ${city} and PIN ${pin}`)
// }
// const newFun = greet.bind(obj)
// newFun("Tanda","224190")
// console.log(this);

// const user={
// fname  : "MOHD",
// lname : "ZIYA",
// fullName : function(){
// console.log(`${this.fname} ${this.lname}`)
// }
// }
// user.fullName();

// const user = {
//   name: "Ziya",

//   greet: () => {
//     console.log(this.name);
//   }
// };

// user.greet();


// console.log(this);
// function chai(){
//   console.log(this);
// }
// chai();





















































































































 





































































































































