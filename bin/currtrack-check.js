const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check price of currency')
    .option('--exchange <type>', 'Add sepecific exchange types in CSV format, only one', 'CNY')
    .option('--curr <currency>', 'Change the currency', 'USD')
    .action((cmd) => check.price(cmd));

program
    .command('CNY')
    .description('Check CNY rate')
    .option('--curr <currency>', 'Change the currency', 'USD')
    .action((cmd) => check.CNY(cmd));

program.parse(process.argv);