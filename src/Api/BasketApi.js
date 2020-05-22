import {fetchObject,createFetchObject,createApiLink,createApiLinkById} from "./ApiConfig";

async function getBasktes() {
    let url = createApiLink("basketsjson")
    return await fetch(url,fetchObject).then(dane => dane.json())
}
async function getBasketById(id) {
    let url = createApiLinkById("basketjson",id)
    return fetch(url,fetchObject).then(data => data.json())
}
async function createBasket(obj) {
    let url = createApiLink('createbasketjson')
    return await fetch(url,createFetchObject(obj))
}
async function addProductBasket(obj) {
    let url = createApiLink("addproductsbasket")
    return await fetch(url,createFetchObject(obj))
}
async function getProductsFromBasket(id){
    let url = createApiLinkById('getproductsbybasket',id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
export {getBasktes,getBasketById,createBasket,addProductBasket,getProductsFromBasket}