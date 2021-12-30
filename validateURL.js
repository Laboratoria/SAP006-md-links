import fetch from 'node-fetch';

function handleErrors(error) {
    throw new Error(error.message);
}

async function statusCheck(arrayURLs) {
    try {
        const arrayStatus = await Promise
        .all(arrayURLs.map(async url => {
            const res = await fetch(url)
            return res.status; 
        }))
    return arrayStatus;
    } catch(error){
        handleErrors(error)
    }
}

function arrayUrlMaker(arrayLinks){
    return arrayLinks.map(objLink => Object
        .values(objLink).join());
}

async function validateURL(arrayLinks) {
    const links = arrayUrlMaker(arrayLinks)
    const statusLinks = await statusCheck(links)
    
    const results = arrayLinks.map((obj, indice) => ({ 
        ...obj,
        status: statusLinks[indice] 
    }))
    return results;
}

export default validateURL;