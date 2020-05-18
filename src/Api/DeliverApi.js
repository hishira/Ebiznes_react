import {createApiLink,fetchObject,createFetchObject,createApiLinkById} from "./ApiConfig";

async function getDelivers() {
    let url = createApiLink("deliverjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getDeliveById(id) {
    let url = createApiLinkById("deliverjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function createDeliver(obj){
    let url = createApiLink('delivercreatejson')
    return await fetch(url,createFetchObject(obj))
}
async function updateDeliver(id,obj){
    let url = createApiLinkById("updatedeliverjson",id)
    return await fetch(url,createFetchObject(obj))
}
export {getDelivers,getDeliveById,createDeliver,updateDeliver}