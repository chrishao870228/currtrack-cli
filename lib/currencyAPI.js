const axios=require('axios');
const colors = require('colors');

class currencyAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.exchangeratesapi.io/latest';
    }
    
    async getPriceData(exchangeOption, currOption) {
        try {
            const url = this.baseUrl +'?base='+currOption+'&symbols='+exchangeOption;
            const response = await axios.get(url);
            let output = '';

            // response.data(rates => {
            //     output += `rates: ${rates.symbol.yellow}$ (${rates.name}$ | Price: ${rates.price.green})\n`; 
            // });
            
            output = `Rates: ${response.data.rates.CNY} CNY for 1 ${response.data.base}`;
            
            return output;
        }catch(err) {
            console.error(err);
        }
    }
    async getCNYrate(currOption) {
        try {
            const url = this.baseUrl +'?base='+currOption+'&symbols=CNY';
            const response = await axios.get(url);
            
            return `${response.data.rates.CNY} CNY / USD`;
        }catch(err) {
            console.error(err);
        }
    }
}
module.exports = currencyAPI;