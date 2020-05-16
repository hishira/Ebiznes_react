import {fetchObject, createApiLink,createApiLinkById} from "./ApiConfig";
async function getSubCategories(){
    let url = createApiLink('subcategoriesjson')
    return await fetch(url,fetchObject)
        .then(results=>results.json())
}
async function getSubcategoriesByCateogryId(categoryId) {
    let url = createApiLinkById('subcategoriesByCategoryjson',categoryId)
    return await fetch(url,fetchObject)
        .then(results=>results.json())

}
async function getSubcategoryById(id){
    let url = createApiLinkById("subcategoriesjson",id)
    return await fetch(url,fetchObject).then(data=>data.json())
}
export {getSubCategories,getSubcategoriesByCateogryId,getSubcategoryById}