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

function intersection(arr1, arr2){
    let unique1=new Set(arr1)
    const res=arr2.filter((items)=>{
        return unique1.has(items)
    })
    return res
}
const arr1 =[1,23,42,8,9,5,1,5,9,23]
const arr2 =[1,28,48,8,9,51]
let result = intersection(arr1, arr2)
console.log(result)













