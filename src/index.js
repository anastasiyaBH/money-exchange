// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {
            error: 'You are rich, my friend! We don\'t have so much coins for exchange'
        };
    }
    var exchange = {};

    if (currency <= 0){
        return exchange;
    }
    
    var coinDenomination = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1 
    };
    
    for (var key in coinDenomination) {
       var qt = Math.floor(currency / coinDenomination[key]);
       if(qt > 0) {
        exchange[key] = qt;
        currency = currency % coinDenomination[key];
       }     
    }
    return exchange;
}
