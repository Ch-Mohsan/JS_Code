const URL = "https://cat-fact.herokuapp.com/facts";
let button=document.querySelector("button");
let phara=document.querySelector("p");

//by using async await
const getfacts = async () => {
    
        let response = await fetch(URL);  // Send API request
        let data = await response.json(); // Convert the response to JSON format
        console.log(data[0].text); //get facts text form 0 index
         phara.innerText=data[0].text;
        console.log(data[1].text); //get facts text form 1 index
        phara.innerText=phara.innerText+data[1].text
        

    }
    //type of reequest
    //fatch request
    //post request
    //delete request
    //patch request (to update data)

    // recponse status code
    //200 neans everthing ok successfull
    //404 neans clinet side error our misstake
    //500 meas server errors
    //header have additional information in api's

//by using .then(promise chaining)
// const getfacts=()=>{
//    fetch(URL)
//    .then((response)=>{
//     return response.json();
//    })
//    .then((data)=>{
//     console.log(data[0].text);
//     phara.innerText=data[0].text;
//    })
// }    

button.addEventListener("click",()=>{

    getfacts();

})

