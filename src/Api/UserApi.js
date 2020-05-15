import {createFetchObject,createApiLink} from "./ApiConfig";

async function authUser(obj) {
    var url = createApiLink("authuser")
    return fetch(url,createFetchObject(obj)).then(dane=>dane.json())

}

export {authUser}