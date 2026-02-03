let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit",function(value){
    value.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div")
    profile.classList.add("profilrpics");

    let img = document.createElement("img");
    img.setAttribute("src","https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg");


    let h3 = document.createElement("h3");
    h3.textContent = "lovde Raj";

    let h5 = document.createElement("h5");
    h5.textContent = "Java Developer";

    let p = document.createElement("p");
    p.textContent = "lorem bfeebwfi fhew fhewfewfwpefe9w wueguwegEUG OUG  g9rugruegu ure g rgrgu9 gg8e g8ewygew8y wegy eygwe9ygew8gyw7ygw7w yg8g8ywg9wg89wg";

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    
    card.appendChild(p);

    main.appendChild(card);
});


