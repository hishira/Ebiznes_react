import {createApiLink,createApiLinkById,fetchObject} from "./ApiConfig";

async function getPayemntMethods(){
    let url  = createApiLink("paymentmethodsjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getPaymentMethodById(id) {
    let url = createApiLinkById("paymentmethodsjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getPayemntMethods,getPaymentMethodById}