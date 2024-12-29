//Arithmatic Operator
let a=3;
let b=5;
console.log("a=",a,"b=",b);
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a**b=",a**b);
console.log("a%b=",a%b);

//Assignment Opertor
let c=2;
let d=5;

console.log("c=+2=",c+=2);
console.log("c=*2=",c*=2);

// compersion opertor
let s=3;
let t="3";
console.log("a==b",s==t);   //convert string to nyumber
console.log("a===b",s===t);    //not equal if data type not same
console.log("a!==b",s!==t);     //convert the result


let age= prompt("Enter your age");
if( age>=18){
    console.log("you can vote");
}
else if(age<18){
    console.log("youe connot vote") 
}
else{
    console.log("Inviled")
}

let marks=prompt("Enter your marks");
if(marks>=90 && marks>80){
    console.log("your Garde is A+");
}
else if(marks>=80 && marks>70){
    console.log("your Garde is A");
}
else if(marks>=70 && marks>60){
    console.log("your Garde is B+");
}
else if(marks>=60 && marks>50){
    console.log("your Garde is B");
}
else {
    console.log("Inviled")

}