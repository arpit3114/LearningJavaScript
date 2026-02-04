// set interval leak
let count =0;
// const int = setInterval(()=> {
//     if(count < 5){
//         count++;
//         console.log(count);
//     }
//     else console.log("it is working");
// },500);


// fixing time interval leak:

const int = setInterval(()=> {
    if(count < 5){
        count++;
        console.log(count);
    }
    else {
        console.log("done");
        clearInterval(int);
    }
},500);