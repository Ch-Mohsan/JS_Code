console.log("first js");
//Attributes
let div=document.querySelector("div");
console.dir(div);
//aceess by id
let id=div.getAttribute("id"); // it returens value of id
console.log(id);

let ph=document.querySelector("p");
console.dir(ph);
//aceess by id
let cl=ph.getAttribute("class"); // it returens value of class
console.log(cl);

//set the value of attributes
ph.setAttribute("class","newPhara");
let newName=ph.getAttribute("class"); // it returens  new value of class
console.log(newName);

//style attributes
let box1=document.querySelector("#box1");
box1.style.backgroundColor="white";    // we  can change style  
console.log(box1);
 
//create new elements 
let btn= document.createElement("button");   //create new button
btn.innerText="click me";                    //write text
btn.style.color="green";
box1.after(btn);                     //show on screan

let newdiv=document.createElement("div");
newdiv.innerText="This is new div";
btn.after(newdiv);
newdiv.style.height="200px";
newdiv.style.width="200px";
newdiv.style.margin="15px";
newdiv.style.backgroundColor="pink";
console.log(newdiv);

let inner=document.createElement("div");
inner.innerText="This is inner div";
inner.style.height="50px";
inner.style.width="100px";
inner.style.backgroundColor="blue"

//appandChiled add inside anoter div
newdiv.appendChild(inner);

//remove eiements
btn.remove();
//remove chiled
newdiv.removeChild(inner);

 //Question
 let mybutton=document.createElement("button");
 mybutton.innerText="click me!";
let body=document.querySelector("body");
body.prepend(mybutton);
mybutton.style.backgroundColor="red";
mybutton.style.color="white";

let hp=document.querySelector(".pclass");
console.log(hp);
// hp.setAttribute("class","newclass");   //it overwrite class properties
hp.classList.add("newclass");           //add one more class
let classlist=hp.classList;    //return list of classes
console.log(classlist);     
hp.classList.remove("newclass"); // remove the peoperties of class