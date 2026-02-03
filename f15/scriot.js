// debounce

let input = document.querySelector("input");

function debounce(fnc, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args);
        },delay);
    };
}


// throttle

function throttle(fnc, delay){
    let timer =0;
    return function(...args){
        let now = Date.now();
        if(now - timer >= delay){
            timer = now;
            fnc(...args);
        }
    };
}

// debounce
input.addEventListener("input",debounce(function(dets){
    console.log(dets);
},1200));

// throttle


input.addEventListener("input",throttle(function(dets){
    console.log("run");
},1200));