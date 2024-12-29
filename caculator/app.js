let input=document.querySelector("input");
let buttons=document.querySelectorAll("button");
let str="";
buttons.forEach((key)=>{
   key.addEventListener("click",(e)=>{
     if(e.target.innerHTML=="="){
try{      
      str=eval(str);
      input.value=str;}
      catch(e){
         alert("inviled input");
         
      }

    }
    else if(e.target.innerHTML=="AC"){
          str="";
          input.value=str;
    }
    else if(e.target.innerHTML=="Del"){
       str= str.substring(0,str.length-1);
        input.value=str;
    }
    else
    {str+=e.target.innerHTML;
    input.value=str}
      
   })

})