// shallow copy deep copy
let user = {
    name: "Naman",
    age: 56,
    social: {
        facebook: {
            ac1:"hey@gmail.com",
            ac2: "lol@gmail.com"
        },
        twitter: {
            free: {
                ac1: "lala@gmail.com"
            },
            paid: {
                ac1: "hho@gmail.com"
            }
        }
    }
};

function makeDeepCopy(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj;
    }

    let copiedVal = Array.isArray(obj) ? [] : {};
    let keys = Object.keys(obj);

    for(let i =0; i< keys.length; i++){
        copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
    }
    return copiedVal;
}

let v1 = makeDeepCopy(12);
let v2 = makeDeepCopy({name: "Harsh", age : 23});
let v3 = makeDeepCopy(user);

v3.social.facebook.ac1 = "changed";