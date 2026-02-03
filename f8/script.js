// function
function abc(){
    console.log(this);
}
abc();

// global
console.log(this);

// method 
let obj = {
    name: "Arpit",
    age: 56,
    gogo: function(){
        console.log(this.name);
    }
};
obj.gogo();

// event handler
document.querySelector("h1").addEventListener("click",function(){
    console.log(this.style.color = "red");
});
   
// class 
class Bc{
    constructor(){
        this.a = 50;
        console.log("hello");
    }
}
let v = new Bc();

// function inside method:

let bob = {
    name: "Darsh",
    age: 85,
    gigi: function(){
        let b = () =>{
            console.log(this);
        };
       b();
    }
};
bob.gigi();