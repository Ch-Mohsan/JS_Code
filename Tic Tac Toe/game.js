let pentenes=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let draw=document.querySelector("#draw");
let text=document.querySelector("#masge");
let newbtn=document.querySelector("#new");
let resetbtn=document.querySelector("#reset");
let boxes=document.querySelectorAll(".box");
let turn=true;
let game_hide=()=>{
    draw.classList.add("hide");
}

let game_draw=()=>{
    draw.classList.remove("hide");
}

let hide_masage=()=>{
    text.classList.add("hide");
 }
 
hide_masage();
game_hide();

let button =boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    if(turn){
    box.innerText="O";
    box.classList.remove("oclass");
    box.classList.add("xclass");
     turn=false;

     }
    else{
            box.innerText="X";
            box.classList.remove("xclass");
    box.classList.add("oclass");
            turn=true;
        }
        box.disabled=true;
        winner();
        })
})

let show_masage=(m)=>{
    
    text.innerText= text.innerText+m;
    text.classList.remove("hide");
    
    

 }
let p1,p2,p3;
let count=0;
let winner=()=>{
    
    for( p of pentenes){
             p1= boxes[p[0]].innerText;
         p2= boxes[p[1]].innerText;
            p3= boxes[p[2]].innerText;
            
           
    
      if(p1 !="" && p2 != ""&& p3 != "" ) {
        
             if(p1==p2&&p2==p3){

            disabledButton();
            show_masage(p1);
 
         }
         else if(p1!=p&&p2!=p3){
             count++;
             console.log(count);
             if(count>8){
                disabledButton();
                game_draw();
             }
         }
        }
    }
}
let disabledButton=()=>{
   boxes.forEach((box)=>{
    box.disabled=true;
    
   })
}
let EnableButton=()=>{
    boxes.forEach((box)=>{
    turn=false;
    count=0;
     box.disabled=false;
     box.innerText="";
     box.classList.remove("oclass");
     box.classList.remove("xclass");
     hide_masage();
     game_hide();
    })
 }
 
 newbtn.addEventListener("click",EnableButton);
 resetbtn.addEventListener("click",EnableButton);