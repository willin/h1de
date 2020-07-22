#! /usr/bin/env node

const h1de = require('.');

const [, , command, ...args] = process.argv;

console.log(h1de[command](...args));
