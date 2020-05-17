import {fetchObject,createFetchObject,createApiLink,createApiLinkById} from "./ApiConfig";

async function getComments(){
    let url = createApiLink("commentsjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getCommentById(id) {
    let url = createApiLinkById("commentsjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function createComment(obj){
    let url = createApiLink('commentcreatejson')
    return await fetch(url,createFetchObject(obj))
}

export {getComments,getCommentById,createComment}