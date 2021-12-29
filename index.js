import chalk from 'chalk';
import fs from 'fs';


function linksExtractor(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^*$#\s].[^\s]*)\)/gm;
  const linksArray = [];
  let temp;

  while((temp = regex.exec(text)) !== null) {
    linksArray.push({ [temp[1]]: temp[2] })
  }
  console.log(chalk.yellow('O total de links encontrado é: ' + linksArray.length))
  return linksArray.length === 0 ? 'Sem links' : linksArray;

}


function verify(error) {
  throw new Error(chalk.red(error.code, 'Não encontrado'));
}


function getFile(endpointFile){
    const encoding = 'utf-8';
    fs.promises
    .readFile(endpointFile, encoding)
    .then((text) => console.log(linksExtractor(text)))
    .catch((error) => verify(error))
}



// async function getFile(endpointFile) {
//   const encoding = 'utf-8';
//   try {
//       const textFile = await fs.promises.readFile(endpointFile, encoding)
//       console.log(linksExtractor(textFile));
//   } catch(erro) {
//       verify(erro)
//   } finally {
//     console.log(chalk.yellow('Operação concluída'));
//   }
// }

export default getFile;
//('./files/textOne.md');

