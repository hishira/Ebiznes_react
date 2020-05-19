import {fetchObject,createFetchObject, createApiLink,createApiLinkById,fetchObjectDelete} from "./ApiConfig";
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
async function createSubcategory(obj){
    let url = createApiLink("subcategorycreatejson")
    return await fetch(url,createFetchObject(obj))
}
async function updateSubcategory(id,obj) {
    let url = createApiLinkById("updatesubcategoryjson",id)
    return await fetch(url,createFetchObject(obj))
}
async function deleteSubcategory(id) {
    let url = createApiLinkById("deletesubcategoryjson",id)
    return await fetch(url,fetchObjectDelete)

}
export {getSubCategories,getSubcategoriesByCateogryId,getSubcategoryById,createSubcategory,updateSubcategory,deleteSubcategory}