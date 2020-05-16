import {createApiLink,createApiLinkById,fetchObject} from "./ApiConfig";

async function getImages() {
    let url = createApiLink("imagesjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
async function getImagesById(id) {
    let url = createApiLinkById("imagesjson",id)
    return await fetch(url,fetchObject).then(dane=>dane.json())
}
export {getImages,getImagesById}