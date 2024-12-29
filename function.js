function myfun(){     //function without parameters
    console.log("Hallow Js!");
}
myfun();
function sum(a,b){    //a and b is parameters
    return a+b;
}
let res=sum(2,6);           //here is 2,3 is argument
console.log("sum is =",res);


function mul(a,b){    //a and b is parameters
    let c= a*b;
    
    console.log("multiply is=",c);
}
mul(5,7);

const arrowSub=(a,b)=>{    //arrow function arrowSub is like a veriable which store arrow function
    return a-b;
}
console.log("result of sub arrow function is =",arrowSub(3,8));


const arrowMul=(a,b,c)=>{
    console.log("result of Mul arrow function is =",a*b*c);
}
arrowMul(3,4,5);

const print_hallow=()=>{
    console.log("Hallow javaScript!");
}
print_hallow();

function countWovel(str){
 let count=0;   
    for(val of str){
        if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u"){
         count++;   
        }
    }
    console.log("the number of vowel in your string =",count);
}
countWovel("bcd");

const wovel=(str)=>{
    let count=0;
    for(val of str){
        if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u"){
         count++;   
        }
    }
    console.log("the number of vowel in your string =",count);

}
wovel("abcde");


//forEach function  when function associated with obj it called a method
//forEach use for array
//in js function can use as parameter or returns
//callBack is a funtion which pass as a parameter to another function

let arr=[1,2,3,4];
arr.forEach(function printValue(val){
    console.log(val);
})

// generly  pass an arrow function in forEach
let color=["pink","blue","black","brown"];
color.forEach((val,idx,color)=>{ //  optional we can pass here val,idx,array it self
    console.log(val,idx,color);
})

//these function takes an other function as paramerters or return is call higher order function
//forEach is a higher order function

let num=[21,42,63,84,95];
num.forEach((val)=>{
    console.log(val*val);
})

//Map method similler to forEach but return a new array
let names=["Ali","Ahmad","Usman"];
let fullName=names.map((val)=>{ // map use to create a new array
    return "ch_"+val;
})
console.log("original array",names);
console.log("new array",fullName);

// filter method used to filter out values based on some condition

let number=[1,2,3,3,5,5,7,4,9,66,66,99];
let out=number.filter((val,idx,number)=>{
    if(val==number[idx+1])
        return val;
})

console.log("same values of array",out);

//reduce metond which use when  multipal input one out
let numarray=[1,2,3,4,5,6];
let sumArray=numarray.reduce((pre,curr)=>{ //previous value and current value
    return pre+curr;
})
console.log("sum of numbers",sumArray);

//Question

let numarray2=[1,2,3,4,56,34];
let largevalue=numarray2.reduce((pre,curr)=>{ //previous value and current value
    return pre>curr? pre:curr;
})
console.log("Largeest number of Array",largevalue);

let marks=[33,44,55,90,97,93,91];
let finalMarks=marks.filter((val)=>{
    return val>90;
})
console.log("the marks  of student which sorced 90+",finalMarks);

let size=prompt("Enter the size of array");
let ar=[];
for(i=0;i<size;i++){
    let el=prompt("Enter the element of array");
    ar[i]=el;
}
console.log("this is your array",ar);


let totel= ar.reduce((pre,curr)=>{
    return pre+curr;
})
console.log("sum of your array numbers",totel);


let product= ar.reduce((pre,curr)=>{
    return pre*curr;
})
console.log("product of your array numbers",product);
