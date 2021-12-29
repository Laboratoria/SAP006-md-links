import fetch from 'node-fetch';

async function statusCheck(arrayURLs) {
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url)
        return res.status; 
    }))
    return arrayStatus;
}

function arrayUrlMaker(arrayLinks){
    return arrayLinks.map(objLink => Object.values(objLink).join())
}

async function validateURL(arrayLinks) {
    const links = arrayUrlMaker(arrayLinks)
    const statusLinks = await statusCheck(links)
    return statusLinks;
}

export default validateURL;