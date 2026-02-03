// p = document.querySelector("p");

// function abc (){
//     p.style.color = "yellow";
// }

// p.addEventListener("dblclick",abc);


// let input = document.querySelector("input");
// input.addEventListener("input",function(val){
//     if(val.data !== null){
//     console.log(val.data);
//     }
// })


let h = document.querySelector("h3");
window.addEventListener("keydown",function(val){
    if(val.key === " "){
        h.textContent = "SPC";
    }
    else{
        h.textContent = val.key;
    }

});