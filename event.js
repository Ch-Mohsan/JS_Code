//event heandingly in js
let btn= document.querySelector("button");
btn.onclick=(evt)=>{
    console.log("lam button 1 from js");
    let age=26;
    age++;
    console.log(age);
    console.log(evt);   //evt is event objct that has even info
     console.log(evt.type);                  //type of event
     console.log(evt.target);                //target of event
     console.log(evt.clientX,evt.clientY);
}

//js event have property on inline heandinly
//when we hendel an even and try it again do so function will over write 
let box=document.querySelector("div");
box.onmouseover=()=>{
    console.log("your are in the box ");
}
box.onmouseover=(evt)=>{
    console.log("your are in the box henderler2 ");
    console.log(evt);   //evt is event objct that has even info
     console.log(evt.type);                  //type of event
     console.log(evt.target);                //target of event
     console.log(evt.clientX,evt.clientY);   //possition of event
}

//event listner
let btn2= document.querySelector("#mybtn");
btn2.addEventListener("click",(evt)=>{
   console.log("don't tuch me");
   console.log(evt);
})

btn2.addEventListener("click",(evt)=>{
    console.log("please tuch me");   // add multipal eventlinser
    console.log(evt);
 })

 const myfun=()=>{
    console.log("my js function");
 }

 btn2.addEventListener("click",myfun);  //pass function
 btn2.removeEventListener("click",myfun) //remove function


let mood=document.querySelector("#mood");
let body=document.querySelector("body");
 let col="white";
 mood.addEventListener("click",()=>{
    if(col=="white"){
    
    body.classList.add("darkClass")
    body.classList.remove("liteClass");

    col="black";
      }
      else{
        
         body.classList.add("liteClass");
         body.classList.remove("darkClass");
        col="white";
      }

 })

 let con=true;
 let pic=document.querySelector("#pic");
 let change=document.querySelector("#change");
 change.addEventListener("click",()=>{
   
   if(con){
      pic.classList.add("hide");
      con=false;
      change.inneText="show";
}
else{

   pic.classList.remove("hide");
      con=true;}
 })



