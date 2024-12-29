// let arr=[1,2,4,6,4,7,8];  //gernaly we store same type of data 
// console.log(arr);
// console.log("size of array",arr.length);
// let s=["Ali","Ahmad","Usman","Hafiz","Mohsan","Mughees"];  //gernaly we store same type of data 
// console.log(s);
// console.log("data type of array",typeof(s)); // arrays like object but index is used as key

// let marks=[33,44,55,66,77]; 
// console.log("before",marks);   //vale at index 2
// marks[2]=88;    //arrys is muteable we change them
// console.log("After",marks);
// for(val of marks){
//     console.log(val);
// }

// let student=[85,97,44,37,76,60];
// let size=student.length;
// let sum=0;
// let avarge=0;
// for(val of student){
//     sum=sum+val;
//    }
// console.log(sum);
// avarge=sum/size;
// console.log("student avarage marks is =",avarge);

// iteam=[250,645,300,900,50];
// indx=0;
// for(i=0;i<iteam.length;i++){
//     console.log("without discount",iteam[i]);
// let off=iteam[i]/10;
// iteam[i]-=off;
// indx++;
// console.log("with discount",iteam[i]);
// }
// let=a=[13,44,66,88,0];
// let b=["a","b","c"];
// a.push(99);
// console.log("after push 99",a); //add at last in orginal array
// a.pop();
// console.log("after pop",a); //delete at last in orginal array
// a.toString();
// console.log("after convert array to string ",a);
// console.log("cancat array a and array k ",a.concat(b));  // not change in original string
// a.unshift(12); //add at start
// console.log("add 12 at start in a",a);
// a.shift(); //delete from start
// console.log("delete from start in a",a);
// console.log("values from 1 to 3 index",a.slice(1,4));// return values from 1 to 3 index not change in original
// let x=[101,102,103,104];
// // console.log(x.splice(1,2));//start forn indx 1 and delete 2 value and return
// // console.log("array x after splice",x);   //change in original string
// console.log(x.splice(1,3,202));//start forn indx 1 and add 2 value 
// console.log("array x after splice",x);
// console.log(x.splice(1,0,555));

// //Question
let list=["Bloonberg","Microsoft","Uber","goggle","IBM","Netliflx"];
console.log("This is my Array",list);
list.shift()
console.log("After remove first iteam",list);
list.splice(1,1,"Olx")
console.log("After remove Uber  and add Olx iteam",list);
list.push("Amazon");
console.log("After add Amzon at End",list);