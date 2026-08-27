// 1. WAP to remove key with falsy value
// function removeFalsyValue(obj){
//     let newObj={}
//     for(let key in obj){
//         let value = obj[key]
//         if(value){
//             newObj[key]=value;
//         }
//     }
//     return newObj;
// }
// let obj={
//     name   : "ZIYA",
//     age    : 28,
//     isLogged:false,
//     add     :"SITKAHAN",
//     sharar : true
// }
// let result =removeFalsyValue(obj)
// console.log(result);



// 2. WAP to find the sum of all value in an object
// function sumofAllObjValue(obj){
//     let sum =0;
//     for(let key in obj){
//         sum+=obj[key]
//         }
//         return sum;
// }
// let result=sumofAllObjValue({
//     Math :80,
//     science: 90,
//     english :30,
//     history : 80
// })
// console.log(result);


// 3. WAP to check an object is empty or not
// function emptyObj(obj){
//     let arr=Object.keys(obj)
//     if(arr.length ===0)
//         return `Object is EMPTY`
//     else
//         return `Object is not EMPTY`
// }
// const obj={}
// let result = emptyObj(obj)
// console.log(result);


//  4. WAP to return the keys of any object as am array

// function objectKeys(obj){
//     return Object.keys(obj)
// }
// let obj={
//     name :"ziya",
//     rollno: 52,
//     math : 34,
//     scince :54,
//     english :60
// }
// let result = objectKeys(obj)
// console.log(result);


// function objectKeys(obj){
//     let arr=[]
//     for(let key in obj){
//         arr.push(key)
//     }
//     return arr;
// }
// let obj={
//     name :"ziya",
//     rollno: 52,
//     math : 34,
//     scince :54,
//     english :60,
//     Hindi :16
// }
// let result = objectKeys(obj)
// console.log(result);


// 5. WAP to count the number of keys in an Object
// function numberOfkeys(obj){
//     let arr =[]
//     for(let key in obj){
//         arr.push(key)
//     }
//     return arr.length;
// }
// let obj={
//     name :"ziya",
//     rollno: 52,
//     math : 34,
//     scince :54,
//     english :60,
//     Hindi :16
// }
// let result =numberOfkeys(obj)
// console.log(result);


// 7. WAP to find keys with highest value
function highestValue(obj){
    let max=0;
    for(let key in obj){
        let num =obj[key]
        if(num>max){
            max=num;
        }
    }
    return max;
}
let obj={
    a  : 15,
    b  :10,
    c  :19,
    d  :8,
    f  :5,
    g  :23
}
let result = highestValue(obj)
console.log(result)




