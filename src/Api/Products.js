import {fetchObject, createApiLink,createApiLinkById} from "./ApiConfig";

async function getProducts() {
    let url = createApiLink("productsjson")
    return fetch(url, fetchObject)
        .then(results => results.json())
}
async function getProductsBySubCategoryId(id){
    let url = createApiLinkById("productssubcategoryjson",id)
    return fetch(url,fetchObject)
        .then(dane => dane.json())
}

export {getProducts,getProductsBySubCategoryId}