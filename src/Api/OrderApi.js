import {createApiLink, createApiLinkById, fetchObject,createFetchObject} from "./ApiConfig";

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

export {getOrders,getOrderById,createOrder}