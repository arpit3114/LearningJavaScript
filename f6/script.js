let abc = document.querySelector(".abcd");

abc.addEventListener("mouseover",function(){
    abc.style.backgroundColor = "white";
});

abc.addEventListener("mouseout",function(){
    abc.style.backgroundColor= "red";
});