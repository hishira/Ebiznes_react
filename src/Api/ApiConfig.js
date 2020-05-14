
const fetchObject = {
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    method: "GET"
}
function createApiLink(sub) {
    let url = `http://localhost:9000/${sub}`
    return url

}
function createApiLinkById(sub,id){
    let url = `http://localhost:9000/${sub}/${id}`
    return url
}
export {fetchObject,createApiLink,createApiLinkById}