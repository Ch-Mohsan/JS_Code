// // nessting of callback is called call back Hell
// function hallo(nexthallo){
//     setTimeout(()=>{
//         console.log("Hallo after 3s"); 
//         if(nexthallo){
//           nexthallo();
//         }
         
//     }, 3000) //this  function print hallo after 3 s
    
// }
// console.log("calling hallo 1st time.........");
// hallo( ()=>{ 
//     console.log("calling hallo 2nd time.........");
//     hallo(()=>{
//         console.log("calling hallo 3rd time.........");
//         hallo()
//     });
// });

//exampel 2

// function getData(id,nextData){
//     setTimeout(()=>{
//         console.log("data",id);
//         if(nextData){
//             nextData();
//         }
//     },4000)
// }

// console.log("getting data1..........");
// getData(123,()=>{
//     console.log("getting data2..........");
//     getData(456,()=>{
//         console.log("getting data3..........");
//         getData(789)
//     });
// })

//promiss
//three state of promise is pending ,fullfill(resovel) and reject
function getPromise(){
    return promise=new Promise( (resolve,reject)=>{  //resolve,reject are two handlers created by js
           console.log("I am promise");
           resolve(123);
         //reject("error accord")  //it show an error promise state is reject and result is error
    })
}

// let promise1=getPromise();
// console.log(promise1);        //promise state is fullfilled and result is 123

//we cannot create promise its return by API's


//when promse is fullfill we use .then
//when promse is fullfill we use .catch
//use of ane then inside another is called promiss chain

// let promise2=getPromise();
// promise2.then((result)=>{
//   console.log("promiss is fullfilled",result);
// })
// promise2.catch((result)=>{
//    console.log("promiss is reject",result);
// })  



// function Info(info){
//  return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("info",info);
//         resolve("success");
//     },2000)
//  })
// }

// function Info2(info){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            console.log("info",info);
//            resolve("success");
//        },2000)
//     })
//    }
   

//    function Info3(info){
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//            console.log("info",info);
//            resolve("success");
//        },2000)
//     })
//    }

// console.log("fatching info1.......");
// let p1=Info("888");
// p1.then((result)=>{
//     console.log(result);

//     console.log("fatching info2.......");
// let p2=Info("777");
// p2.then((result)=>{
//     console.log(result);

// console.log("fatching info3.......");
//     let p3=Info3("888");
// p3.then((result)=>{
//     console.log(result);
    
// })
// })
// })


//aysch await

async  function fatchData(info){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("info",info);
            resolve("success");
        },3000)
    })
}
async function outFun(){
    console.log("getting data1...........");
await fatchData("222");
console.log("getting data2...........");
await fatchData("33");
}
outFun();

//IIFE avoid uncessery code 
//Immediately Invoked function Expression 
//IIFE execute just one time and no need to call
(function(){
    console.log("hallo js without call me");
})();    //function make without name and with it into () and writ (); on end

//arrow function
(()=>{
    console.log("hallow i am Arrow function in IIFE...........");
})();
//ayschon function
(async()=>{
    console.log("Hallo i am asyc function in  IIFE..........");
})