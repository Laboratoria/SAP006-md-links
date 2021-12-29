import chalk from 'chalk';
import fs from 'fs';

function linksExtractor(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const linksArray = [];
    let temp;
    while((temp = regex.exec(text)) !== null) {
      linksArray.push({ [temp[1]]: temp[2] })
    }
    return linksArray;
  }
  
  function verify(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
  }
  
  async function getFile(endpointFile) {
    const encoding = 'utf-8';
    try {
      const text = await fs.promises.readFile(endpointFile, encoding)
      console.log(linksExtractor(text));
    } catch(erro) {
      verify(erro);
    }
  }
  


// const chalk = require('chalk');
// const fs = require('fs');

// fs.readFile(file, [encoding], [callback]);

// function verify(error){
//     throw new Error(chalk.red(error.code, 'Não encontrado'));
// }

// async function getFile(endpointFile) {
//     const encoding = 'utf-8';
//     try {
//         const text = await fs.promises.readFile(endpointFile, encoding)
//         console.log(chalk.green(text))
//     } catch(error){
//         verify(error)
//     } finally {
//         console.log(chalk.yellow('Operação concluída'));
//     }
// }

// function getFile(endpointFile){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(endpointFile, encoding)
//     .then((text) => console.log(chalk.green(text)))
//     .catch((error) => verify(error))
// }



// function getFile(endpointFile) {
//     const encoding = 'utf-8';
//     fs.readFile(endpointFile, encoding, (error, text) => {
//         if (error){
//             verify(error)
//         }
//         console.log(chalk.green(text));
//     });   
// }

export default getFile('./files/textOne.md');