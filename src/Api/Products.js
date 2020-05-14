import {fetchObject, createApiLink} from "./ApiConfig";

async function getProducts() {
    let url = createApiLink("productsjson")
    return fetch(url, fetchObject)
        .then(results => results.json())
}

export {getProducts}