import {createApiLink, createApiLinkById, fetchObject} from "./ApiConfig";

async function getOrders() {
    let url = createApiLink("ordersjson")
    return await fetch(url, fetchObject).then(dane => dane.json())
}

async function getOrderById(id) {
    let url = createApiLinkById("ordersjson",id)
    return await fetch(url, fetchObject).then(dane => dane.json())
}

export {getOrders,getOrderById}