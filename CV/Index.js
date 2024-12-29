let createBtn=document.getElementById("create");
let viewBtn=document.getElementById("view");
let loginBox=document.getElementById("loginBox");
let loginBtn=document.getElementById("login");
let loader=document.getElementById("loader");
let userEmail=document.getElementById("email");
let userpass=document.getElementById("pass");

createBtn.addEventListener("click",()=>{

loader.classList.remove("hide");
setTimeout(()=>{
  window.location.href="CreateCv.html";  
},2000)
})
viewBtn.addEventListener("click",()=>{

  loader.classList.remove("hide");
  setTimeout(()=>{
    loader.classList.add("hide");
    loginBox.classList.remove("visible");
  },2000)
  })
loginBtn.addEventListener("click",()=>{
  loader.classList.remove("hide");
setTimeout(()=>{
  window.location.href="viewCv.html";  
},2000)
})