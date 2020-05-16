import {createApiLink,fetchObject,createApiLinkById} from "./ApiConfig";

async function getDelivers() {
    let url = createApiLink("deliverjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getDeliveById(id) {
    let url = createApiLinkById("deliverjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())

}

export {getDelivers,getDeliveById}