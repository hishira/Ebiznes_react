import {fetchObject,createFetchObject, createApiLink,createApiLinkById,fetchObjectDelete} from "./ApiConfig";

async function getProducts() {
    let url = createApiLink("productsjson")
    return await fetch(url, fetchObject)
        .then(results => results.json())
}
async function getProductsBySubCategoryId(id){
    let url = createApiLinkById("productssubcategoryjson",id)
    return await fetch(url,fetchObject)
        .then(dane => dane.json())
}
async function getProductById(id) {
    let url = createApiLinkById("productsjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function createProduct(obj) {
    let url = createApiLink('productcreatejson')
    return await fetch(url,createFetchObject(obj))
}
async function updateProduct(id,obj){
    let url = createApiLinkById("updateproductjson",id)
    return await fetch(url,createFetchObject(obj))
}
async function deleteProduct(id) {
    let url = createApiLinkById("deleteproductjson",id)
    return await fetch(url,fetchObjectDelete)
}
export {getProducts,getProductsBySubCategoryId,getProductById,createProduct,updateProduct,deleteProduct}