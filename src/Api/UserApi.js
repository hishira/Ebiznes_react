import {createFetchObject, createApiLink,createApiLinkById, fetchObject,fetchObjectDelete} from "./ApiConfig";

async function authUser(obj) {
    let url = createApiLink("authuser")
    return fetch(url,createFetchObject(obj)).then(dane=>dane.json())
}
async function checkUserLogin(name){
    let url = createApiLink('userexists')
    return fetch(url,createFetchObject(name)).then(dane=>dane.json())
}
async function createUser(user){
    let url = createApiLink('usercreatejson')
    return fetch(url,createFetchObject(user))
}
async function getUsers() {
    let url = createApiLink("usersjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getUserById(id) {
    let url = createApiLinkById("usersjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function updateUser(id,obj) {
    let url = createApiLinkById("updateuserjson",id)
    return await fetch(url,createFetchObject(obj))
}
async function deleteUser(id) {
    let url = createApiLinkById("deleteuserjson",id)
    return await fetch(url,fetchObjectDelete)
}

export {authUser,checkUserLogin,createUser,getUsers,getUserById,updateUser,deleteUser}