let hr=document.getElementById("hour");
let hm=document.getElementById("minit");
let hs=document.getElementById("second");
let hbox=document.getElementById("nHour");
let mbox=document.getElementById("nMinet");
let sbox=document.getElementById("nSecond");
let timmer=document.getElementById("outer");
let check=false;
let fullHours



function ampm(fullHours){

     let AM = document.createElement("span")
    AM.classList.add("ampm");
    timmer.appendChild(AM);

if(fullHours<=12){
    AM.innerHTML="AM"
}
else{
    AM.innerHTML="PM"
}

}

function Time(){
let date=new Date();
let hh=date.getHours()%12; //for 12 formate
fullHours=date.getHours();
let mm=date.getMinutes();
let ss=date.getSeconds();
hbox.innerHTML=hh+":h";
mbox.innerHTML=mm+":m";
sbox.innerHTML=ss+":s";


let hRotation=30*hh+mm/2;
let mRotation=6*mm;
let sRotation=6*ss;

hr.style.transform=`rotate(${hRotation}deg)`;
hm.style.transform=`rotate(${mRotation}deg)`;
hs.style.transform=`rotate(${sRotation}deg)`;
}

Time();
ampm(fullHours);
setInterval(Time,1000)
