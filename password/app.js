let salider=document.querySelector("#salider");
let saliderValue=document.getElementById("silidervalue");
let upperCase=document.getElementById("upperCase");
let lowerCase=document.getElementById("lowerCase");
let numbers=document.getElementById("numbers");
let symbol=document.getElementById("symbol");
let generteBtn=document.getElementById("generteBtn");
let clearBtn=document.getElementById("clearBtn");
let showbox=document.getElementById("showbox");


let outPut=""
let allCharact="";
let uppLatter="ABCDEFGHIJKLMOPQRSTUVWXYZ";
let lowerLatter="abcdefghijklmnopqrstuvwxyz"
let nums="1234567890";
let specialChar="!@#$%^&*";

saliderValue.value=salider.value;
salider.value;
    
salider.addEventListener("input",()=>{
        
    saliderValue.innerHTML=salider.value;
    
})
generteBtn.addEventListener("click",()=>{
    
    showbox.value=createPassword(allCharact);
    
})


function createPassword(allCharact){
    allCharact+=upperCase.checked? uppLatter:""
    allCharact+=lowerCase.checked? lowerLatter:"";
    allCharact+=numbers.checked?nums:"";
    allCharact+=symbol.checked?specialChar:"";
    console.log(allCharact)
    
   for(i=0;i<salider.value;i++){
    let index= Math.floor(Math.random()*71)
   outPut+=allCharact.charAt(index);
   }
   return outPut;
}
clearBtn.addEventListener("click",()=>{
    showbox.value="";
    allCharact="";
})