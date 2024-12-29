let add=document.getElementById("add");
let input=document.getElementById("input");
let list=document.getElementById("list");
let contanter=document.querySelector(".container");

function cut(){
    let cut=document.createElement("button");
    cut.innerText="x"
    cut.classList.add("cut");
    input.before(cut);
    cut.addEventListener("click",()=>{
        input.value="";
    })
}
cut();

add.addEventListener("click",()=>{
 if(input.value!=""){
    let row=document.createElement("div");
    row.classList.add("content");
    list.appendChild(row);

    let phara=document.createElement("p");
    phara.classList.add("text");
    phara.innerHTML=input.value;
    row.appendChild(phara);

    let box=document.createElement("input");
    box.type="checkbox";
    box.classList.add("box");
    phara.prepend(box);

    let remove=document.createElement("button");
    remove.innerHTML="X";
    remove.classList.add("removeClass");
    row.appendChild(remove);
       checbox(box,phara);  
       removeContent(remove,row); 
       
 
 }
 else{
    alert("Please enter first your texk")
 }       
})

function checbox(box,phara){
    box.addEventListener("input",()=>{
          if(box.checked){
            phara.classList.add("line");
        }
        else{
            phara.classList.remove("line");
        }
    
    
    })    
}


function removeContent(remove,row){
   remove.addEventListener("click",()=>{
    
     list.removeChild(row)  
    
    

   })
}