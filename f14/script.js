// MODULE PATTERN

let Bank = (function (){
    
    let accountBalance = 12000;
    function balance(){
        console.log(accountBalance);
    }

    function withdraw(val){
        if(val <= accountBalance){
            accountBalance = accountBalance - val;
            console.log("Rest balance " + accountBalance);
        }
        else console.log("failed");
    }

    return {
        balance,
        withdraw
    };

    // revealing module pattern
    //     return {
    //     check: balance,
    //     remain: withdraw
    // };
    
})();