import {fetchObject,createApiLink,createApiLinkById} from "./ApiConfig";

async function getBasktes() {
    let url = createApiLink("basketsjson")
    return await fetch(url,fetchObject).then(dane => dane.json())
}
async function getBasketById(id) {
    let url = createApiLinkById("basketjson",id)
    return fetch(url,fetchObject).then(data => data.json())
}
export {getBasktes,getBasketById}