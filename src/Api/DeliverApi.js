import {createApiLink,fetchObject,createFetchObject,createApiLinkById,fetchObjectDelete} from "./ApiConfig";

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
async function deleteDeliver(id) {
    let url = createApiLinkById("deletecdeliverjson",id)
    return await fetch(url,fetchObjectDelete)
}
export {getDelivers,getDeliveById,createDeliver,updateDeliver,deleteDeliver}