const student={
    fullName :"Ali",
    age:      20,
    massage:  "JS",
printHallo:function(){
    
    console.log("my print hallow function",this.massage)
}}                     //direct way of creating object


console.log(student)
student.printHallo();

//proptoType
//it is a by defult object inside the that object we created it has some properities and methed

let arr=["Apple","Mango","Banana"];    //taype of arr is object
console.log(arr)     //inside the array object is prototype object that has method of object push,pop,ect

//when an object is created by defult it inheriat properties from protoType

//creating our prototype

const employ={
    calculTex(){  // simpel way of careating function in object
      console.log("tex is 10%");
    }
}
employ.calculTex();
const Ali={        //now Ali is an object has defult prototype
    salary : 1000,

    calculTex(){          
        console.log("tex is 20%");
      }
}
                         //prototype is a reference of an  bject
Ali.__proto__=employ;    //Ali object inheriate employ's function

Ali.calculTex();// if an object have same function in itself and prototype it call it's own funcion

//classes in js

class Person{                //creating class
    fullName="mughees";
    age="21";
study(){
    console.log("Student of Cs");
}
}
let p1=new Person();             //creating object of class
p1.study();
console.log("name of student is ",p1.fullName);

class Myclass{
    constructor(){            //it is special function that call,s by defult when creating object
        console.log(" hi you are try to create object of Myclass");
    }
}

let c1=new Myclass();

 class Car{
    constructor(mylage,brand,number){   //constructor to inilizing values
        this.mylage=mylage;
        this.brand=brand;
        this.number=number;
    }
    car_details(){
        console.log("car mylage is",this.mylage);
        console.log("car brand is",this.brand);
        console.log("car number is",this.number);
    }
 } 
 let car1=new Car("30km","Honda","2244");
 car1.car_details();
 let car2=new Car("20km","Suczki","9988");
 car2.car_details();


 //single level inheritance
 class Perent{
constructor(fullName, age){
    this.fullName=fullName;
    this.age=age;
}
Perent_Details(){
    console.log("perent Name is",this.fullName);
    console.log("perent age is",this.age);
}
property(){
    console.log("Account in HBL");
}
Business(){
    console.log("Import Export");
}
 }

 
 class Chiled extends Perent{
    constructor(fullName,age){
        super( fullName,age);       //using super we invoke perent constrctute and pass values
    }
    Chiled_Details(chiled_name,chiled_age){
        console.log("chiled Name is",chiled_name);
        console.log("chiled age is",chiled_age);
    }
    property(){
        console.log("Account in UBL");
    }
    
 }

let chiled1=new Chiled("AKbar",70);
chiled1.Perent_Details();
chiled1.Chiled_Details("Ali",33);
chiled1.property();   //if same in perent and chiled class chiled function is accessed is called method overloading 


class Man{
    constructor(fullName,age){
   this.fullName=fullName;
   this.age=age;
    } 
    Bio(){
        console.log("His name is",this.fullName);
        console.log("His age is",this.age);
    }
    Education(info){
        console.log(" His Education is",info)
    }  
}
class Enginer extends Man{
    constructor(fullName,age,depart,salary){
         super(fullName,age);
         this.depart=depart;
         this.salary=salary;
    }
    job(){
        console.log("Enginer working Depart is",this.depart);
        console.log("Enginer Salary  is",this.salary);
    }
}

class Company extends Enginer{
    constructor(fullName,age,depart,salary){
        super(fullName,age,depart,salary);
    }
    Product(product){
        console.log("Company Builed's",product);
    }

}
let man1=new Company("Mohsan",20,"IT","1k");
man1.Bio();
man1.Education("12th");
man1.job();
man1.Product("website");

//Question
class User{
    constructor(fullName,email){
        this.fullName=fullName;
        this.email=email;
    }
    View_Data(){
        console.log("User name is",this.fullName);
        console.log("User Email is",this.email);
    }
}

class Admin extends User{
    
 EditData(fullName,email){
    this.fullName=fullName;
    this.email=email
 }           
}

let user1=new User("Hassan","hassam.com");
user1.View_Data();
let admin=new Admin();
admin.EditData("kaif","kaif.com");
admin.View_Data();
