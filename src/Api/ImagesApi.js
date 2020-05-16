import {createApiLink,fetchObject} from "./ApiConfig";

async function getImages() {
    let url = createApiLink("imagesjson")
    return await fetch(url,fetchObject).then(dane=>dane.json())
}

export {getImages}