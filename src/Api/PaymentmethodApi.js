import {createApiLink,createApiLinkById,fetchObject,createFetchObject,fetchObjectDelete} from "./ApiConfig";

async function getPayemntMethods(){
    let url  = createApiLink("paymentmethodsjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getPaymentMethodById(id) {
    let url = createApiLinkById("paymentmethodsjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function createPaymentMethod(obj){
    let url = createApiLink('paymentmethodcreatejson')
    return await fetch(url,createFetchObject(obj))
}
async function updatePaymentMethod(id,obj){
    let url = createApiLinkById("updatepaymentmethodjson",id)
    return await fetch(url,createFetchObject(obj))
}
async function deletePaymentMethod(id){
    let url = createApiLinkById("deletepaymentmethodjson",id)
    return await fetch(url,fetchObjectDelete)
}
export {getPayemntMethods,getPaymentMethodById,createPaymentMethod,updatePaymentMethod,deletePaymentMethod}