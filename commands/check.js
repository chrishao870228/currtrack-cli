const KeyManager = require('../lib/KeyManager');
const CurrencyAPI = require('../lib/currencyAPI');

const check = {
    async price(cmd) {
        try {
            
            const api = new CurrencyAPI();
            
            const priceOutputData = await api.getPriceData(cmd.exchange, cmd.curr);
            console.log(priceOutputData);
        } catch(err) {
            console.error(err);
        }

    },

    async CNY(cmd) {
        try {
            const api = new CurrencyAPI();
            
            const priceOutputData = await api.getCNYrate(cmd.curr);
            console.log(priceOutputData);
        } catch(err) {
            console.error(err);
        }
    }
};
module.exports = check;