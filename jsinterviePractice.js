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

// fetch('https://fakestoreapi.com/products', {
//     method : 'GET'
// })

// .then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// async function getData(){
//     let res =await fetch('https://fakestoreapi.com/products');
//     let data =await res.json()
//     console.log(data);
// }
// getData();

// let p= fetch('https://fakestoreapi.com/products', {method : 'GET'})
// p
// .then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// let p=fetch('https://jsonplaceholder.typicode.com/photos')
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// async function getData(){
//     let res= await fetch('https://jsonplaceholder.typicode.com/photos?_limit=100');
//     let data =await res.json();
//     console.log(data);
// }
// getData();

// Data Structure


// Prototypes => In JavaScript, a prototype is an object that allows objects to inherit properties and methods from it. It helps us share common methods between multiple objects instead of creating a separate copy for each object.

// function Student(name, age){
//     this.name = name;
//     this.age =age;
//     // this.introduceMyself=function(){
//     //     console.log(`My name is ${this.name} and my age is ${this.age}`)
//     // }
// }
// let s1=new Student("MKL", 21)
// console.log(s1)
// // s1.introduceMyself()
// let s2=new Student("Ziya", 25)
// console.log(s2)
// // s2.introduceMyself()
// Student.prototype.introduceMyself = function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)
// }
// console.log(Student.prototype)



// // 

// function BankAccount(holdername, balance=0){
//     this.holdername=holdername;
//     this.balance=balance;
    // this.deposit=function(){
    //     this.balance+=balance;
    // }
    // this.withdraw=function(){
    //     this.balance-=balance;
    // }
// }
// BankAccount.prototype.deposit=function(balance){
//         this.balance+=balance;
//     }
// BankAccount.prototype.withdraw=function(balance){
//         this.balance-=balance;
//     }
// let ziyaAcc=new BankAccount("MOHD ZIYA", 1000)
// let arbazAcc=new BankAccount("ARBAZ", 1500)
// let anasAcc=new BankAccount("ANAS ZIYA", 2000);
// console.log(ziyaAcc)
// console.log(arbazAcc)
// console.log(anasAcc)


// Class and Object
// class Car{
//     constructor(name, color, milege){
//         this.name=name;
//         this.color=color;
//         this.milege=milege;
//     }
//     stop(){
//         return `${this.name} is STOPPING.......`;
//     }
//     start(){
//         return `${this.name} STARTINGS>>>>>`;
//     }
// }
// let BMW=new Car("BMW", "Red",45)
// let Toyota=new Car("TOYOTA", "Blue",35)
// let Eon=new Car("EON", "Black",20)
// console.log(BMW, Toyota, Eon);
// console.log(BMW.start())
// console.log(BMW.stop())



//  FOUR PILLERS OF OOOPS => Abstraction, Encapsulation, Inheritance, Polymorphism

// 1. ABSTRACTION = Abstraction means hiding complex implementation details and showing only the essential features to the users.

// class Car{
//     fuel =100;
//     burnFuel(){
//         this.fuel-=1
//     }
//     start(){
//         this.burnFuel();
//         console.log("Car is Starting")
//     }
// }
// let buggati= new Car();
// buggati.burnFuel();
// buggati.burnFuel();
// buggati.burnFuel();
// buggati.burnFuel();
// buggati.burnFuel();
// console.log(buggati)




// 2. Encapsulation = Hiding data inside objects and provide security.
// 3. Inheritance = Using properties and methods from another object/class.
// 4. Polymorphism = Same method behaving differently based on the objects.

// 1.  Swap Value without using the third Variables
// let x=5;
// let y=10;
// [x,y] = [y,x]
// console.log(x)
// console.log(y)

//  2nd Methods
// let x=5;
// let y=10;
// x=x+y;
// y=x-y
// x=x-y
// console.log(x)
// console.log(y)




// 2. Reverse a String without reverse method
// pls note Reverse method doesn't work with string, it always work with array
// let str="ZIYA"
// let rev=""
// for(let i=str.length-1; i>=0; i--){
//     rev+=str[i]
// }
// console.log(rev)


//  Second Method (function) to reverse string
// function reverseString(str){
//     let rev ="";
//     for(let i=str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     return rev;
// }
// let result = reverseString("ABC")
// console.log(result)


// // Third Methods
// let str="AMEEM";
// let rev=str.split('').reverse().join("");
// console.log(rev);

// //  Check Weather string is Pallindrome or not
// function pallindrome(str){
//     let rev=""
//     for(let i=str.length-1; i>=0; i--){
//         rev+=str[i]
//     }
//     if(rev===str){
//         return `${str} is a PALLINDROME`
//     }
//     else{
//         return `${str} is a NOT A PALLINDROME`
//     }
// }
// let result = pallindrome('1210');
// console.log(result)




// Count Vowel in Strings

// // Sum of all natural numbers from 1 to n
// function sumOfNaturalNumbers(num){
//     let sum=0;
//     for(let i=1; i<=num; i++){
//         sum+=i
//     }
//     return sum;
// }
// let result = sumOfNaturalNumbers(6)
// console.log(result);

// //  Find the sum of digits of Numbers
// function sumDigit(n){
//     let sum=0;
//     while(n>0){
//         rem=n%10;
//         sum+=rem;
//         n=Math.floor(n/10);
//     }
//     return sum;
// }
// let result =sumDigit(127)
// console.log(result);


// // Count the number of digit in number
// function numberOfDigit(num){
//     let c=0;
//     num=Math.abs(num)
//     while(num>0){
//         num=Math.floor(num/10)
//         c++
//     }
//     return c;
// }
// let result = numberOfDigit(2037417)
// console.log(result);

// Given an integer x, return true if x is a pallindrome and false otherwise.

// var isPallindrome=function(x){

// }


// localStorage.setItem('name', 'Ziya')
// localStorage.setItem('AGE', '30')
// localStorage.setItem('addValue', 'xjdgbdbd')
// console.log(localStorage.getItem('name'));
// console.log(localStorage.getItem('AGE'));
// console.log(localStorage.getItem('addValue'));
// localStorage.removeItem('addValue') //addvalue key remove ho jayegi
// localStorage.clear() // Sab clear ho jayega

// // Exact same command session storage ke liye bhi use hogi


// localStorage.setItem('myName', 'MOHD ZIYA')
// localStorage.setItem('age', '30')
// localStorage.setItem('address', 'SITKAHAN TANDA AMBEDKAR NAGAR')
// // console.log(localStorage.getItem('address'));
// console.log(localStorage.key(0)) // Matlab 0th index pe jo key hai us key ko return karega 
// console.log(localStorage.key(1))
// console.log(localStorage.key(2))
// console.log(localStorage.key(3))
// console.log(localStorage.length); // Ye length dega



// How to store diff diff data type using storage

// // Check Weather the bunber is pallindrome or not

// function isPallindrome(x){
//     let copyNum=x, reverseNum=0;
//     while(copyNum>0){
//         let lastNum= copyNum%10;
//         reverseNum=reverseNum*10+lastNum;
//         copyNum=Math.floor(copyNum/10)
//     }
//     return x===reverseNum
// }
// let result=isPallindrome(12210)
// console.log(result);


//  Fibonacci series
// function fib(n){
//     let prev=0, curr=1, next;
//     if(n<2){
//         return n
//     }
//     else{
//         for(i=2; i<=n; i++){
//             next=prev+curr;
//             prev=curr;
//             curr=next;
//         }
//         return `${prev}, ${curr}, ${next}`;
//     }
// }
// console.log(fib(5))



// //  Fibonacci series
// let n1=0, n2=1;
// console.log(n1);
// console.log(n2);
// for(var i=3; i<10; i++){
//     var n3=n1+n2;
//     console.log(n3)
//     n1=n2
//     n2=n3
// }
// // Fibonacci Series
// function fibonacci(n) {
//     let n1 = 0;
//     let n2 = 1;

//     console.log(n1);
//     console.log(n2);

//     for (let i = 3; i <= n; i++) {
//         let n3 = n1 + n2;

//         console.log(n3);

//         n1 = n2;
//         n2 = n3;
//     }
// }

// fibonacci(10);






//  MISSING NUMBERS
// function missingNum(num){
//     let sum=0;
//     for(let i=0; i<num.length; i++){
//         sum+=num[i]
//     }
//     return ((num.length)*(num.length+1)/2)-sum;
// }
// console.log(missingNum([0,1,2,4]));


// //  REDUCE METHOD
// const num=[1,2,3,4,5]
//  let sum=0;
//  for(let i=0; i<num.length; i++){
//     sum+=num[i]
//  }
// console.log(sum);

// // OOper Jo sum ka code likha hai same code humne resuce ka bhi likha hai yaha acc jo hai wo sum ka kaam kar raha hai aur 0 se initialize kiya gya hai aur currValue jo hai wo ek ek kar ke arr se nikal rahe hai
// const num=[1,2,3,4,5]
// let n=num.reduce((acc, currValue)=>{
//     return acc+currValue;
// })
// console.log(n);




// const product=[
//     {name : "Shirts", price : 2000},
//     {name : "T-Shirts", price : 1000},
//     {name : "Jeans", price : 2500},
//     {name : "Lower", price : 500}
// ]
// let sum = product.reduce((acc, product)=>{
//     return acc+product.price;
// },2000)
// console.log(sum);






































































































































































 





































































































































