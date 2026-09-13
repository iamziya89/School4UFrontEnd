// // console.log("MOHAMMAD ZIYA SHAMEEM");
// function Students(name, age){
//     this.name = name;
//     this.age=age;
//     // this.introduceMyself=function (){
//     //     console.log(`My name is ${this.name}, and My age is ${this.age} years old`)
//     // }
// }
// let s1=new Students("ZIYA", 24)
// console.log(s1);
// // s1.introduceMyself()
// let s2=new Students("ANAS", 28)
// console.log(s2)
// // s2.introduceMyself();
// Students.prototype.introduceMyself= function (){
//         console.log(`My name is ${this.name}, and My age is ${this.age} years old`)
//     }



// function BankAccounts(myName, balance=0){
//     this.myName = myName;
//     this.balance=balance;
//     this.deposit=function(balance){
//         this.balance+=balance
//     }
//     this.withdraw=function(balance){
//         this.balance-=balance;
//     }
// }
// let s1=new BankAccounts("ZIYA", 200)


/*
console.log("data1");
console.log("data2");
console.log("data3");
*/


/*
console.log("Data_1");
setTimeout(()=>{
    console.log("Data_2"); // It will be print after 2 second matlab hamara execution ruka nahi
},2000)
console.log("Data_3");
console.log("Data_4");
*/

//  CALL BACK
// const Add = (a,b) =>{
//     return a+b;
// }
// const Sub = (a,b) =>{
//     return a-b;
// }
// const Mul = (a,b) =>{
//     return a*b;
// }
// const Div = (a,b) =>{
//     return a/b;
// }

// const Oparation =(a,b,operator)=>{
//     return operator(a,b)
// }
// console.log(Oparation(15,3,Add))
// console.log(Oparation(15,3,Sub))
// console.log(Oparation(15,3,Mul))
// console.log(Oparation(15,3,Div))


// CALLBACK HELL : Callback Hell is a situation where multiple callbacks are nested inside one another, making the code complex and hard to maintain.

// function database(id){
//     console.log("Data : ", id)
// }
// database(1)
// database(2)
// database(3)


//  function database(id,next){
//     console.log("Data ", id)
//     setTimeout(()=>{
//         if(next){
//             next()
//         }
//     }, 4000)
// }
// database(1, ()=>{
//     database(2,()=>{
//         database(3,()=>{
//             database(4);
//         })
//     })
// })



 //Promises
//  let promise=new Promise((res,rej)=>{
//     console.log("data");
//     res(200)
//  })
//  promise.then((res)=>{
//     console.log(res)
//  }).catch((err)=>{
//     console.log(err)
//  })



// let promise=new Promise((res,rej)=>{
//     console.log("data");
//     rej(200)
//  })
//  promise.then((res)=>{
//     console.log(res)
//  }).catch((err)=>{
//     console.log(err)
//  })


// function database(id){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("Datab", id)
//             res("Success")
//         }, 6000)
//     })
// }
// let p1=database(1);
// p1.then((res)=>{
//     console.log("Balle Balle");
// })



//  PROMISE CHAINING (peomise hell) :Promise Hell is when we create too many chained .then() calls, making the code difficult to read and maintain.

// function database(id){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("Datab", id)
//             res("Success")
//         }, 2000)
//     })
// }
// database(1).then(()=>{
//     database(2).then(()=>{
//         database(3).then(()=>{
//             database(4)
//         })
//     })
// })



// function database(id){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("error", id);
//             resolve("Reject Promise")
//         })
//     },3000)
// }
// let p1=database(1);
// p1.then((res)=>{
//     console.log("Success");
// }).catch((e)=>{
//     console.log(e)
// })



//  Async-Awaits
// function server(id){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log(id)
//             res("success")
//         }, 3000)
//     })
// }

// async function result(){
//     await server(1)
//     await server(2)
//     await server(3)
// }
// result()


// let url = 'https://official-joke-api.appspot.com/random_joke'
// async function getJokes(){
//     let joke=await fetch(url)
//     let resp=await joke.json()
//     console.log(`${resp.setup} = ${resp.punchline}`)
// }
// getJokes();






































