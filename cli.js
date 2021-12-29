import getFile from './index.js';
// import chalk from 'chalk';
// const getFile = require('./index');

const route = process.argv;

console.log(getFile(route[2]));