class User{

    constructor(name, address, username, email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "Lala";
    }

    write(Text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name} : ${Text}`
        document.body.appendChild(h1);
    }
}


let u1 = new User("Arpit","Raebareli","bob","hey@hey.com");
let u2 = new User("nob","hil","basb","hey@hey.com");

class Admin extends User{

    constructor(name, address, username, email){
        super(name, address, username, email);
        this.role ="GodFather";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(ele){
            ele.remove();
        })
    }
}

let a1 = new Admin("Admin01","usa","kin","hgy@id.com");