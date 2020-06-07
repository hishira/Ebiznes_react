import {fetchObject,createFetchObject,createApiLink,createApiLinkById,fetchObjectDelete,createFetchObjectWithToken} from "./ApiConfig";

async function getComments(){
    let url = createApiLink("commentsjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getCommentById(id) {
    let url = createApiLinkById("commentsjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function createComment(obj,token){
    let url = createApiLink('commentcreatejson')
    return await fetch(url,createFetchObjectWithToken(obj,token))
}
async function updateComment(id,obj){
    let url = createApiLinkById('updatecommentjson',id)
    return await fetch(url,createFetchObject(obj))
}
async function deleteComment(id) {
    let url = createApiLinkById("deletecommentjson",id)
    return await fetch(url,fetchObjectDelete)
}
async function getCommentByProductId(id) {
    let url = createApiLinkById("commentbyprod",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getComments,getCommentById,createComment,updateComment,deleteComment,getCommentByProductId}