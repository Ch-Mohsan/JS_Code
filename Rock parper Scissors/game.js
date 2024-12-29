let userScore=0;
let CompScore=0;
let rock_id;
let paper_id;
let scissor_id;
let id;
let Comp_id;
let userWin =true;
let userText=document.querySelector("#playerrun");
let compText=document.querySelector("#comprun");
let sms=document.querySelector("#masage");

compChoice=()=>{
    let option=["rock","paper","scissor"];
    let Rindex=Math.floor(Math.random()*3);
    let comp_id=option[Rindex];
    return comp_id;
}

let ScoreBord=(userWin)=>{
    if(Comp_id==user_id){
        sms.innerText="Game Draw";
        console.log("game draw");
    }
    else if(userWin){
        sms.innerText="You win";
        console.log("you win");
    userScore++
    userText.innerText=userScore;
}
    else{
        sms.innerText="you lose";
    console.log("you lose")
CompScore++
compText.innerText=CompScore;
}
}

play_game=(player_id)=>{
    user_id=player_id;
    Comp_id=compChoice();
    console.log("comper choice",Comp_id);
    console.log("your choice",player_id);
     if(user_id=="rock"){
    userWin=compChoice=="paper"? false:true;
    userWin=compChoice=="scissor"? true:false;}

    else if(user_id=="paper"){
        userWin=compChoice=="rock"? true:false;
        userWin=compChoice=="scissor"? false:true;
    }
        else{
            userWin=compChoice=="paper"? false:true;
        userWin=compChoice=="rock"? false:true;}
        console.log(userWin);
        ScoreBord(userWin);
       
        

        }



let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>[
   choice.addEventListener("click",()=>{
    
    let myid=id=choice.getAttribute("id");

    play_game(myid);
   })
])
