const fetchObject = {
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    method: "GET"
}
const fetchObjectDelete = {
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
    method: "DELETE"
}

function createApiLink(sub) {
    let url = `http://localhost:9000/${sub}`
    return url

}

function createFetchObject(obj) {
    return {
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        method: "POST",
        body: JSON.stringify(obj)
    }
}

function createFetchObjectWithToken(obj, token) {
    return {
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'X-Auth-Token': `${token}`
        },
        method: "POST",
        body: JSON.stringify(obj)
    }
}

function createFetchObjectWithOnlyToken(token) {
    return {
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'X-Auth-Token': `${token}`
        },
        method: "GET"
    }
}

function createAuthObject(obj) {
    return {
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
        ...obj
    }
}

function createAuthFetchObject(obj, token) {
    return {
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'X-Auth-Token': `${token}`
        },
        ...obj
    }
}

function createApiLinkById(sub, id) {
    let url = `http://localhost:9000/${sub}/${id}`
    return url
}

export {
    fetchObject,
    createApiLink,
    createApiLinkById,
    createFetchObject,
    fetchObjectDelete,
    createAuthFetchObject,
    createAuthObject,
    createFetchObjectWithToken,
    createFetchObjectWithOnlyToken
}