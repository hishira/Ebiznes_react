import {createApiLink,fetchObject} from "./ApiConfig";

async function getDelivers() {
    let url = createApiLink("deliverjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getDelivers}