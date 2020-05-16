import {createApiLink,fetchObject} from "./ApiConfig";

async function getPayemntMethods(){
    let url  = createApiLink("paymentmethodsjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getPayemntMethods}