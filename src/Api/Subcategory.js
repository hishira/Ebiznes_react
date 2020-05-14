const fetchObject = {
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    method: "GET"
}
async function getSubCategories(){
    return fetch("http://localhost:9090/subcategoriesjson ",fetchObject)
        .then(results=>results.json())
}
export {getSubCategories}