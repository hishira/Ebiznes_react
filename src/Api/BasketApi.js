import {fetchObject,createApiLink} from "./ApiConfig";

async function getBasktes() {
    let url = createApiLink("basketsjson")
    return await fetch(url,fetchObject).then(dane => dane.json())
}

export {getBasktes}