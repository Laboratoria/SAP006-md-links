import chalk from 'chalk';
import fs from 'fs';

// const chalk = require('chalk');
// const fs = require('fs');

// fs.readFile(file, [encoding], [callback]);

function verify(error){
    throw new Error(chalk.red(error.code, 'Não encontrado'));
}

function getFile(endpointFile) {
    const encoding = 'utf-8';

    fs.readFile(endpointFile, encoding, (error, text) => {
        if (error){
            verify(error)
        }
        console.log(chalk.green(text));
    });
    
}

export default getFile('./files/textOne.md');