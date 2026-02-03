// call:

let obj= {
    name: "Arun",
    age: 87
};

function sos(){
    console.log(this.age);
}
sos.call(obj);
