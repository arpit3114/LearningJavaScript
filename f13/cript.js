// prototype inheratance

let coffee = {
    color: "dark",
    drink: function(){
    console.log("gut gut gut");
    },
}


let latte = Object.create(coffee);
latte.taste= "worst";
