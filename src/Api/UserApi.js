import {createFetchObject, createApiLink, fetchObject} from "./ApiConfig";

async function authUser(obj) {
    var url = createApiLink("authuser")
    return fetch(url,createFetchObject(obj)).then(dane=>dane.json())
}
async function checkUserLogin(name){
    var url = createApiLink('userexists')
    return fetch(url,createFetchObject(name)).then(dane=>dane.json())
}
async function createUser(user){
    var url = createApiLink('usercreatejson')
    return fetch(url,createFetchObject(user))
}
async function getUsers() {
    var url = createApiLink("usersjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {authUser,checkUserLogin,createUser,getUsers}