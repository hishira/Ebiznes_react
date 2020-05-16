import {createApiLink,fetchObject} from "./ApiConfig";

async function getOrders(){
    let url = createApiLink("ordersjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getOrders}