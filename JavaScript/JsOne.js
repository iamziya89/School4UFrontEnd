// // for (let i=1; i<=100; i++){
// //     if(i%2===0){
// //         console.log("Even : ",i)
    
// // }
// // }

// //  Vowel and consonent count in string

// // let str="Mohammad ZIya Shameem";
// // let vowelCount=0;
// // let consonentCount=0;

// // for(let ch of str){
// //     if(ch==='a' || ch==='e'|| ch==='i' || ch==='o' || ch==='u' || ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U'){
// //         vowelCount++;
// //     }
// //     else{
// //         consonentCount++;
// //     }
// // }
// // console.log("vowelCount : ", vowelCount);
// // console.log("consonentCount : ", consonentCount);

// // function VowelCount(str){
// //     let vcount=0;
// //     let concount=0;
// //     for (let ch of str){
// //         if(ch==='a' || ch==='e'|| ch==='i' || ch==='o' || ch==='u' || ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U'){
// //             vcount++;
// //         }
// //         else{
// //             concount++;
// //         }
// //     }
// //     console.log("vowelCount : ",vcount);
// //     console.log("consonentCount : ",concount);
    
// // }
// // VowelCount("AlphamK")


// // Calculate the sum of n natural number

// // let sumofNumber=(n)=>{
// //     let sum=0;
// //     if(n>0){
// //         for(let i=1; i<=n; i++){
// //             sum+=i;
// //         }
// //     }
// //     else{
// //         return 'Please enter the positive number, You have entered the negative number'
// //     }
// //     return `The sum of first ${n} natural number will be : ${sum}`
// // }
// // console.log(sumofNumber(3));

// // Calculate the sum of number from m to n
// function sumofNum(m,n){
//     let sum=0;
//     if(m>=0 || n>=0){
//         for(let i=m; i<=n; i++){
//             sum+=i
//         }
//     }
//     else{
//         return `Pleae enter both number, ${m} and ${n} in [ositive respectively] `
//     }
//     return `The sum of number from ${m} to ${n} will be : ${sum}`
// }
// console.log(sumofNum(1,5));

// Making Guess number game

// let computerNumber = Number(Math.floor(Math.random()*100+1));
// let guess=Number(prompt("Please enter the number"))
// console.log(guess);



// let factorial =(n)=>{
//     let fact=1;
//     for(let i=1; i<=n; i++){
//         fact*=i;
//     }
//     return `The factorial of number ${n} will be ${fact}`
// }
// console.log(factorial(6));

// function firstletterCapitalize(str){
//     console.log(str.charAt().toUpperCase()+ str.slice(1));
    
// }
// firstletterCapitalize("manas")

// let priceDiscount =(price, disc) =>{
//     let finalPrice=price - ((price*disc)/100)
//     return finalPrice;
// }
// console.log(priceDiscount(5000, 20));

// STRINGS
// let str=new String("Manas Kumar Lal");
// console.log(str);

// let str="Hellow\nHow Are You";
// console.log(str);

// let str="HelloWorld"
// for(let ch=0; ch<str.length; ch++){
//     console.log(str[ch]);
    
// }

// for(let key in str){
//     console.log(key);
// }

// let str="          Hellow Ziya SMeemeem          ";
// let strUpper=str.toUpperCase();
// let strLower=str.toLowerCase();
// console.log(strUpper+" \n "+ strLower);
// let trimmedStr=str.trim();
// console.log(trimmedStr);

// let fname="Mohammad";
// let lname="Ziya"
// console.log(fname+" " +lname);

// let str="My father name is Mohd Ziya Shameem";
// let str2=str.includes("Ziya  ");
// console.log(str.indexOf('h'));

// let str="I am a boy, and I am a boy";
// console.log(str.replace("boy", "girl"));
// console.log(str.replaceAll("boy", "girl"));

// let str="MohLd ZiyLa ShameLem"
// console.log(str.split('L'));

// function fullName(username){
//     return `@${username.toLowerCase()}_${username.length}`
// }
// console.log(fullName('AnasZiya'));

// function charCount(str, ch){
//     let c=0;
//     for(let val of str){
//         if(val.toLowerCase()===ch.toLowerCase()){
//             c++;
//         }
//     }
//     return c;
// }
// console.log(charCount("Mohammadmm",'m'));


// let str="Hellow My name is Mohd Ziya Shameem. How are you.";
// console.log(str.split(' ').length);

// let str=new String("Ziya Shameem");
// console.log(str.length);

// let arr=[20];
// let cArr=new Array(20).fill(0)
// console.log(arr.length);
// console.log(cArr.length);

// let arr=[12,3,"ziya",false, null, undefined,]
// console.log(arr);
// arr.push(90009);
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift(121)
// console.log(arr);
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr);

// let arr=[15, 24, "Mohd", false, 24];
// let newArr=arr.slice(1,4);
// console.log(newArr);
// console.log(arr);
// arr.splice(3,2);
// console.log(arr);

// let arr=["MOHD","ZIYA",[1,2,3,["Arbaz", "Anas"]],"Abbu"]
// console.log(arr.flat(Infinity));

// let n=25;
// let arr=new Array(n).fill(0);
// let newArr=arr.map((item, index)=>{
//     arr[index]=[index]+1
//     return item

// })
// console.log(newArr)






























































































