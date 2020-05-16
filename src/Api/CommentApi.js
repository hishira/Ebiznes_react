import {fetchObject,createApiLink,createApiLinkById} from "./ApiConfig";

async function getComments(){
    var url = createApiLink("commentsjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getCommentById(id) {
    var url = createApiLinkById("commentsjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getComments,getCommentById}