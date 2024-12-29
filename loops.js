//string is immuteable we cant chage ogrinal string

// for(i=0;i<5;i++){
//     console.log(i);
// }

// let sum=0;
// let n=prompt("Enter number");
// for(i=1;i<=n;i++){
//     sum+=i;
    
// }
// console.log("sum is =",sum);
// let a="Mohsan";
// let count=0;

// while(count<3){
//     console.log(a);
//     count++;
// }
// let j=10;
// do{
//     console.log("I am do loop");
// }
// while(j<10);

// let str="ch mohsan Ali";
// for(let val of str){   //for of use for strings tevers on char
//     console.log(val);
// }

// student={
//    fullname :"Ali",
//    age :25,
//    pass :true,
//    marks :1097,
// }
// for (let val in student){ //for in use for objects return keys
//     console.log(val,":",student[val]);
    
// }
// //question

// for(num=0;num<=100;num++){
//     if(num%2==0){
//     console.log("num",num);
//     }
// }
// let game=44;
// num=prompt("Enter your choice number! ");
// while(game!=num){
//     num=prompt("Your choice number is not match!");
    
// }
// console.log("Congrats you choice Correct!");


// let s="apna college";
// console.log("length of string =",s.length);
// console.log("char of string at indx 4 is",s[3]);
// let obj={
//    iteam:"pen",
//    price:155,
// }
// console.log("the price of",obj.iteam,"is",obj.price);
// let out=`the price of ${obj.iteam} is ${obj.price} rupees`  // template literals
// console.log(out);
// let output=`the result of\n 2+3*6 is ${2+3*6}`  // template literals
// console.log(output);
let string="ch MohsAn";
let string2="   ch   moHAan   Ali     Zafar    ";
// console.log("original",string.toUpperCase());  //to change in original string create a coppy 
// console.log(string.toLowerCase());
// console.log("original",string);
// console.log(string.split());
// console.log(string2.trim());      //cut start and end space
// console.log(string.slice(1,4));
// console.log(string.concat(string2));
//  console.log(string.replace("ch","CH"));
// console.log(string.charAt(3));    //retun char on given index
let fullname=prompt("Enter your name");
let len=fullname.length;
let username= "@"+fullname+len;
console.log(username);