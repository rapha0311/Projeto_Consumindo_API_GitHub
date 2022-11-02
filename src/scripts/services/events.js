import { baseurl } from "/src/scripts/variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseurl}/${userName}/events?per_page=10`)
    return await response.json()

    
}


export { getEvents }