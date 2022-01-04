import getFile from '../index.js';

const arrayResult = [
    {
        Markdown: 'https://pt.wikipedia.org/wiki/Markdown'
    }
]

describe('getFile::', () => {
    it('must be a function', () => {
        expect(typeof getFile).toBe('function');
    })
    it('return a array with results', async () => {
        const result = await getFile('/Users/CaroAlvim/Desktop/Laboratoria/SAP006-md-links/files/text-for-test.md')
        expect(result).toEqual(arrayResult);
    })
    it('must return a msg "No links"', async () => {
        const result = await getFile('/Users/CaroAlvim/Desktop/Laboratoria/SAP006-md-links/files/text_no_links.md')
        expect(result).toBe('Sem links');
    })
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect (getFile('/Users/CaroAlvim/Desktop/Laboratoria/SAP006-md-links/files'))
        .rejects.toThrow(/não há arquivo no caminho/)
      })
})

