import React, {useState, useEffect} from "react";
import {getUserById} from "../../Api/UserApi";
import {useAuth} from "../../context/auth";
import Button from "@material-ui/core/Button";
import history from "../../history";

async function getuserApi(id) {
    return await getUserById(id)
}

function User() {
    const [user, setUser] = useState({})
    const {authTokens,setAuthTokens } = useAuth()

    useEffect(() => {
            const fetchData = async () => {
                const res = await getUserById(authTokens.id)
                setUser(res)
            }
            fetchData()
        }
    )
    function logoutButton(){
        setAuthTokens()
        history.push('/')
    }


    return (
        <div>
            <div>Witaj {user.login}</div>
            <Button onClick={logoutButton}>Log out</Button>
        </div>
    )

}

export default User
