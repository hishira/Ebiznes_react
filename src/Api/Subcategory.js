import {fetchObject, createApiLink,createApiLinkById} from "./ApiConfig";
async function getSubCategories(){
    let url = createApiLink('subcategoriesjson')
    return fetch(url,fetchObject)
        .then(results=>results.json())
}
async function getSubcategoriesByCateogryId(categoryId) {
    let url = createApiLinkById('subcategoriesByCategoryjson',categoryId)
    return fetch(url,fetchObject)
        .then(results=>results.json())

}
export {getSubCategories,getSubcategoriesByCateogryId}