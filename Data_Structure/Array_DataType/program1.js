// 1. WAP to add an element at the end of an arrays

// let arr =["MOHD", "MUSHEER", "ARBAZ"];
// arr.push("ANAS ZIYA")
// console.log(arr);


// 2. WAP to add an element at the begining of an arrays
// let arr =["MOHD", "MUSHEER", "ARBAZ"];
// arr.unshift("ANAS ZIYA")
// console.log(arr);


// 3. WAP to remove an element at the last of an arrays
// let arr =["MOHD", "MUSHEER", "ARBAZ"];
// arr.pop();
// console.log(arr);


// 4. WAP to remove an element at the begining of an arrays
// let arr =["MOHD", "MUSHEER", "ARBAZ"];
// arr.shift();
// console.log(arr);


// 5. WAP to find the length of an array
// let arr = [13, 25, 45, 65, "MOHD"]
// console.log(arr.length);



// 6. WAP to loop through all the elements of an arrays
// let arr=[21, 43, 22, 76, 109, 120]
// for( let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// 7. WAP to to loop all element of an arrau by suing for of loops
// let arr=[21, 43, 22, 76, 109, 120]
// for(let element of arr){
//     console.log(element);
// }


// 8. WAP to to loop all element of an arrau by suing for each loops
// let arr=[21, 43, 22, 76, 109, 120]
// arr.forEach((items, index)=>{
//     return `${items}*10`
// })
// console.log(arr)


// 9. WAP to check a particular element exist of not in the given array

// let arr=[21, 43, 22, 76, 109, 120]
// let elm=43

// for(let i=0; i< arr.length; i++){
//     if(arr[i]===elm){
//         console.log(`The element ${elm} exist in array at index number ${i}`);
//     }
// }



// let arr =["MOHD", "ZIYA", "ANAS", "ARBAZ", "ARIF"];
// let count = arr.indexOf("ZIYAA");
// console.log(count);
// if(count!==-1){
//     console.log(`Element exists`);
// }
// else{
//     console.log(`Element Doesn't exists`);
// }
// IndexOf ki property ye hai ki agar element present hai to positive +1 dega agar array me element nahi present hai to -1 dega


// let isExists = arr.includes("ANASmm");
// console.log(isExists);
// includes property true ya false deta hai agar element array me exists karta hai to true aur agar exists nahi karta hai to false deta hai.


// 10. WAP to create a new array using the map() function and make each element in lowercase
// let arr =["MOHD", "ZIYA", "ANAS", "ARBAZ", "ARIF"];
// let newArr=arr.map((items, index)=>{
//     let low =items+" XYZ";
//     return low;
// })
// console.log(newArr);



//  WAP to create a new function using the filter function
let arr=[15,24, 36, 25, 100]
let newArr = arr.filter((items)=>items%2 === 0)
console.log(newArr);


