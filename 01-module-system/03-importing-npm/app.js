// command for run this program: npm install

// npm command notes:
// npm init
// npm i validator@10.8.0

// const validator = require("validator");
import validator from 'validator';
import chalk from 'chalk';

console.log(validator.isEmail("this-is-a-test@hotmail.com"));
console.log(validator.isHexColor("#ed2226"));
console.log(chalk.green.bold("Hello world."));