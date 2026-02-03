function createPencil(name, price, color, company){
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    // this.write = function(text){
    //     let h1 = document.createElement("h1");
    //     h1.textContent = text;
    //     h1.style.color = color;
    //     document.body.appendChild(h1);
    // };
}

// prototype
    createPencil.prototype.write = function(text){

        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }


let pencil1 = new createPencil("natraj",10, "black","Natraj");
let pencil2 =new createPencil("doms",10,"red","Doms");