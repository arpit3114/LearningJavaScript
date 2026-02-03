class CreatePencil{

    constructor(name, company, price, color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    erase(){
        document.body.querySelectorAll("h1").forEach(function(ele){
            ele.remove(); 
        })

    }

    lal(){
        document.body.querySelectorAll("h1").forEach((ele)=>{
           if(ele.style.color === this.color){
                ele.remove();
           }
        })
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

}

let p1 = new CreatePencil("Natraj","nat",10,"white");
let p2 = new CreatePencil("Doms","doms",15,"green");
