#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg)
    .command('key', 'Manage API Key')
    .command('check', 'Check currency price Info')
    .parse(process.argv);

