import {createApiLink, createApiLinkById, fetchObject,createFetchObject,createFetchObjectWithOnlyToken,createFetchObjectWithToken} from "./ApiConfig";

async function getOrders() {
    let url = createApiLink("ordersjson")
    return await fetch(url, fetchObject).then(dane => dane.json())
}

async function getOrderById(id) {
    let url = createApiLinkById("ordersjson",id)
    return await fetch(url, fetchObject).then(dane => dane.json())
}
async function createOrder(obj){
    let url = createApiLink("ordercreatejson")
    return await fetch(url,createFetchObject(obj))
}
async function createorderByToken(obj,token){
    let url = createApiLink("ordercreatejson")
    return await fetch(url,createFetchObjectWithToken(obj,token))
}
async function getOrdersByUser(token){
    let url = createApiLink("orderbyuser")
    return await fetch(url,createFetchObjectWithOnlyToken(token)).then(dane=>dane.json())
}

export {getOrders,getOrderById,createOrder,getOrdersByUser,createorderByToken}