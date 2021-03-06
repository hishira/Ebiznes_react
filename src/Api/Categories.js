import {fetchObject,createFetchObject, createApiLink,createApiLinkById,fetchObjectDelete,createFetchObjectWithToken} from "./ApiConfig";

async function getCategories() {
    let url = createApiLink('categoriesjson')
    return await fetch(url, fetchObject)
        .then(results => results.json())
}

async function getCategoriesWithSub() {
    let url = createApiLink("categorieswithsub")
    return await fetch(url, fetchObject)
        .then(results => results.json())

}
async function getCategoriesById(id) {
    let url = createApiLinkById("categoriesjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function createCategory(obj,token) {
    let url = createApiLink("createcategoryjson")
    return fetch(url,createFetchObjectWithToken(obj,token))
}
async function updateCategory(id,obj) {
    let url = createApiLinkById('updatecategoryjson',id)
    return await fetch(url,createFetchObject(obj))
}
async function deleteCategory(id){
    let url = createApiLinkById("deletecategoryjson",id)
    return await fetch(url,fetchObjectDelete)
}
function operateOnData(data) {
    let obj = {}
    let finalarray = []
    for (let i of data) {
        obj[i[1]] = {id: i[0], name: i[1], children: []}
    }
    for (let i of data) {
        obj[i[1]].children.push({id: i[3], name: i[4]})
    }
    for (let i of Object.keys(obj)) {
        finalarray.push(obj[i])
    }
    return finalarray
}

export {getCategories, getCategoriesWithSub, operateOnData,getCategoriesById,createCategory,updateCategory,deleteCategory}