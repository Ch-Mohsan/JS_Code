const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
let amount=document.querySelector("#money");
let selects=document.querySelectorAll("select");
let ganerteBtn=document.querySelector("#ganerte");
let massage=document.querySelector("#result");
let fromCurrency=document.getElementById("fromCurrency");
let toCurrency=document.getElementById("toCurrency");

for( let select of selects){
    for( let val in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=val;
        newoption.value=val;
        if(select.name=="fromCurrency"&& val=="USD"){
            newoption.selected="selected"
        }
        else if(select.name=="toCurrency"&& val=="PKR"){
            newoption.selected="selected"
        }
        select.appendChild(newoption);
    
    }
    select.addEventListener("change",(e)=>{
        updateImg(e.target);
    })
}
 const updateImg=(ele)=>{
 console.log(ele.value);
 let currCode=ele.value;
 let countryCode=countryList[currCode];
 let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
 let img =ele.parentElement.querySelector("img");
 console.log(img);
 img.src=newSrc;
 }
 ganerteBtn.addEventListener("click",async()=>{
    if(amount.value<1){
   amount.value=1;
    }
    const newURL = `${BASE_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
    let response= await fetch(newURL);
    let data= await response.json();
    let exchange=data[toCurrency.value.toLowerCase()];
    let finalvalue=exchange*amount.value;
    amount.value=finalvalue;
massage.innerHTML=`${fromCurrency.value} to ${toCurrency.value}=${finalvalue} `;
 })