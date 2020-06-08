import {fetchObject,createFetchObject,createApiLink} from "./ApiConfig";

async function createAddres(obj){
    let url = createApiLink("createaddress")
    return await fetch(url,createFetchObject(obj)).then(dane=>dane.json())
}
export {createAddres}