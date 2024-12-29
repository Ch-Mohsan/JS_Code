//DOM is document Object Model it is created  wehen page is load 
// Dom is way to access html code in js file and it is used to dinamically change(run time)
// window is an object that is created by browser   
console.log(window);       
// document is object of window which have HTML code

console.log(window.document);  //it prints without ptoperties just code
console.dir(window.document)   //it print with properties
document.body.childNodes[3].innerTest="abcd";

//selecting by id
let hd=document.getElementById("heading-id"); //it returen value of h1
console.dir(hd);    //it prints properties of h1 heading
//if id is not exist it return null

//selecting by class
let mc=document.getElementsByClassName("myclass"); //it returns collection of html elements
console.dir(mc);  //it prints collection(div,button)
//if class is not exist it return empty collection

//selecting by tag-name
let tag=document.getElementsByTagName("p");
console.dir(tag);    //it prints collection

//Query selector acssess id,class,tag
let el=document.querySelector(".myclass");  //returns just first one
console.dir(el);
let els=document.querySelectorAll("p");  //returns all tages
console.dir(els); //it print node list

//properties
//tageName
let h=document.getElementById("heading-id");
console.dir(h);
//console.log(h.tagName); //it prints tage name of single elements not for collection

//inerText
let t=document.querySelector(".mydiv");
console.dir(t);
console.log(t.innerText); //it prints text of mydiv amd its chiledNodes
console.dir(t.innerHTML); //it print HTML code with tages as a string
t.innerText="abcde";     //we can set inner text
t.innerHTML="<idv> my furits div</div>";  

//textContent
let ht=document.querySelector(".text");
console.dir(ht);
console.dir(ht.textContent);   //it prints text of hiden elements
//Question
let h2=document.querySelector("h2");
console.log(h2);
h2.innerText=h2.innerText+"From Apna College Student";


let d1=document.querySelectorAll(".box");
console.log(d1);
d1[0].innerText="my div1";
d1[1].innerText="my div2";
d1[2].innerText="my div3";


//Attributies
let ph=document.querySelector("p")