import {fetchObject,createApiLink} from "./ApiConfig";

async function getComments(){
    var url = createApiLink("commentsjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getComments}