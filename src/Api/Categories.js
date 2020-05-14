const fetchObject = {
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    method: "GET"
}
    async function getCategories() {
        return fetch("http://localhost:9090/categoriesjson ", fetchObject)
            .then(results => results.json())
    }

    async function getCategoriesWithSub() {
        return fetch("http://localhost:9090/categorieswithsub ", fetchObject)
            .then(results => results.json())

    }
    function operateOnData(data) {
        let obj = {}
        let finalarray = []
        for (let i of data) {
            obj[i[1]] = {id: i[0], name: i[1], children: []}
        }
        for (let i of data) {
            obj[i[1]].children.push({id: i[3], name: i[4]})
        }
        for (let i of Object.keys(obj)) {
            finalarray.push(obj[i])
        }
        return finalarray
    }

export {getCategories,getCategoriesWithSub,operateOnData}