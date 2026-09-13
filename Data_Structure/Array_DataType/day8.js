// Set => A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.The values can be of any type, primitive values or objects.
// const data =[
//     "rahul",
//     "rohit",
//     11,121,11,"rahul"
// ]
// const unique = new Set(data)
// console.log(unique)
// for(let elm of unique){
//     console.log(elm);
// }
// unique.forEach((item)=>{
//     console.log(item)
// })
// const [a,b,c,d] =[...data]
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// WAP to duplicate from an arrays
// function removeDuplicate(data){
//     return new Set(data)
// }
// const data =[
//     "rahul",
//     "rohit",
//     11,121,11,"rahul"
// ]
// let result = removeDuplicate(data)
// console.log(result)

// WAP to fint the intersection of two arrays

// function intersection(arr1, arr2){
//     let unique1=new Set(arr1)
//     const res=arr2.filter((items)=>{
//         return unique1.has(items)
//     })
//     return res
// }
// const arr1 =[1,23,42,8,9,5,1,5,9,23]
// const arr2 =[1,28,48,8,9,51]
// let result = intersection(arr1, arr2)
// console.log(result)

// let num= [5,12,7,18,3,14]
// let max=0
// for(let i=0; i<num.length; i++){
//     if(num[i]<15){
//         max =num[i]
//     }
// }
// console.log(max)

// let arr= [5,12,7,18,3,14]
// let smallest = null;
// for(let num of arr){
//     if(num%2===0){
//         else if(num>smallest){
//             smallest=num
//         }
//     }
// }
// console.log(smallest)



// function outer(){
//     let c=0;
//     return function(){
//         c++;
//         return c;
//     }
// }

// let result =outer();
// console.log(result())
// console.log(result())
// console.log(result())
// console.log(result())


// function memoization(){
//     let cache={}
//     return function(n){
//         if(n in cache){
//             console.log("Stored Result....")
//             return cache[n];
//         }
//         console.log("Calculating.......")
//         cache[n] = n*n;
//         return cache[n]
//     }
// }
// let result=memoization()
// console.log(result(2))
// console.log(result(2))
// console.log(result(2))
// console.log(result(3))
// console.log(result(3))

// function add(a,b){
//     return a+b;
// }
// console.log(add(4,5));
// console.log(add(4,5));
// console.log(add(4,5));

// let total=0
// function add(n){
//     total+=n;
//     return total;
// }
// console.log(add(5));
// console.log(add(5));
// console.log(add(5));

// const greet = function(){
//     return "MOHD ZIYA SHAMEEM"
// }
// console.log(greet())

// function add(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function mul(a,b){
//     return a*b;
// }
// function div(a,b){
//     return a/b;
// }
// function operation(a,b, operator){
//     return operator(a,b)
// }
// let result=operation(25,20,div)
// console.log(result)


// function database(id, next){
//     console.log("Data ", id)
//     setTimeout(()=>{
//         if(next){
//             next()
//         }
//     }, 2000)
// }
// database(1,()=>{
//     database(2, ()=>{
//         database(3, ()=>{
//             database(4)
//         })
//     })
// })


// function database(id, next){
//     console.log("Data ",id)
//     setTimeout(()=>{
//         if(next){
//             next()
//         }
//     },3000)
// }
// database(1, ()=>{
//     database(2, ()=>{
//         database(3, ()=>{
//             database(4,()=>{
//                 database(5)
//             })
//         })
//     })
// })

// const obj={
//     name : "Mohd Ziya",
//     age  : 25
// }
// function greet(city, sal){
//     console.log(`My name is ${this.name} and I am from ${city} and my salary is ${sal}`)
// }
//  greet.apply(obj,["Ziya",30000]);

// let arr=[5,7,9,11,15,17]
// for(let i=0; i<arr.length; i++){
//     if(arr[i+1]-arr[i]!==2){
//         console.log(arr[i]+2)
//         break;
//     }
// }


// function reverseStr(str){
//     let arrStr=str.split(" ")
//     for(var word of arrStr){
//         for(var i=word.length; i>=0;i++){
            
//         }
//     }
// }
// let res=reverseStr("This is Javascript Code")
// console.log(res);

// console.log("Data 1")
// console.log("Data 2")
// console.log("Data 3")
// console.log("Data 4")

// const database = (id, next) =>{
//     console.log(id);
//     setTimeout(()=>{
//         if(next){
//             next()
//         }
//     },2000)
// }
// database(1,()=>{
//     database(2,()=>{
//         database(3,()=>{
//             database(4)
//         })
//     })
// })

// const database = (id) =>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log(id)
//             rej("Success")
//         },2000)
//     })
// }
// database(1).then(()=>{
//     return database(2)
// }).then(()=>{
//     return database(3)
// }).then(()=>{
//     return database(4)
// }).catch((err)=>{
//     console.log(err)
// })


// let p=new Promise((res, rej)=>{
//     console.log("Data")
//     // res(200)
//     rej(300)
// })
// p.then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     console.log(err)
// })

// function database(id){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log(id)
//             rej("FAIL")
//         })
//     })
// }
// database(1).then((resp)=>{
//     console.log(resp)
// }).catch((err)=>{
//     return database(2)
// }).catch(()=>{
//     return database(3)
// }).catch(()=>{
//     return database(4)
// }).catch(()=>{
//     return database(5)
// })



//  STACK =LIFO (Last In First Out) (Palte ek par ek rakhi ho)=> Jo last me add hui hai wo first me out hogi
// Operation of STACK
// pop=Remove and return the top element of the stack
// push=Add element to the top of stack
// Peek=Return the top element without removing it
// isEmpty=Check if the stack is empty
// Size = Return the number of element in the stack



// Write a function that can rearrange the data such that all the 0's are present before 1's.

//  Prototype

function Student(name, age){
    this.name = name;
    this.age =age;
}
let s1=new Student("MKL", 21)
console.log(s1)
let s2=new Student("ZIYA", 28)
console.log(s2)








































































