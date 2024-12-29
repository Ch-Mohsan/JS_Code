console.log("Hellow js!");
myname="mohsan";    // it is not good to create veriable without let or constent
console.log(myname);
var num=123;        //it is old datatype not use now days       
var num=12345;

let age=20;
// let age=23;      // connot create same veriable with let
age=23;             // we can update value of let veriable
console.log(age);
const number=1234;
//num=1235;          // we cannot update value of const veriable
let a=null;
console.log(a);       //type of a is null
let b;
//const c;              //it is not allowed const veriable without initialization
console.log(b);       //type of b is undefined

s1="abc";                
s2=123;
console.log(s1+s2);               //addition of string in js          

const student={             //student object

   fullName : "ali",        //key:value
    myage   :  12,
    hight   :5.7,
    muslim  :true,

 }
 console.log(student);
//we can update keys's value of student object even it is const
 student.myage=24;     
 console.log(student.myage); 

 //Question

 const  product={
       produtName : "pen",
       price : 270,
       offer: "50%",
       raiting: 4,
       isdeel :true
 }
 console.log(product);

 const photo={
    user_name: "sharahda",
   fallowing:"968k",
    fallower : 890,
    posts:765,
    isfallow:true,
    id:"@sharhda",
    bio :"apna college"
 }
 console.log(photo);
 console.log(photo);    //type of photo is object
 console.log(typeof photo["user_name"]);    //type of username is string