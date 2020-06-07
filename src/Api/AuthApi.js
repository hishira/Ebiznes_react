import {createAuthFetchObject, createApiLink, createAuthObject} from "./ApiConfig";

function authenticate(provider, queryParams) {
    let url = createApiLink(`authenticate/${provider}?${queryParams}`)
    console.log(url)
    return fetch(url,
        createAuthObject({
            method: "GET",
            credentials: "include"
        }))
        .then(dane => {
            if (dane.status >= 400) {
                throw new Error('Bad response from server');
            }
            return dane
        }).then(dane => dane.json())
        .catch(err => console.log(err))
}

function singOut(user) {
    return fetch(createApiLink("singOut"), createAuthFetchObject({}, user.token))
}

export {authenticate, singOut}