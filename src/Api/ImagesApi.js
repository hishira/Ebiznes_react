import {createApiLink,createApiLinkById,fetchObject,createFetchObject} from "./ApiConfig";

async function getImages() {
    let url = createApiLink("imagesjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getImagesById(id) {
    let url = createApiLinkById("imagesjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function createImage(obj) {
    let url = createApiLink('imagecreatejson')
    return await fetch(url,createFetchObject(obj))
}
async function updateImage(id,obj) {
    let url = createApiLinkById("updateimagejson",id)
    return await fetch(url,createFetchObject(obj))
}
export {getImages,getImagesById,createImage,updateImage}