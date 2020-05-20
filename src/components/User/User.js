import React, {useState, useEffect} from "react";
import {getUserById} from "../../Api/UserApi";
import {useAuth} from "../../context/auth";
import Button from "@material-ui/core/Button";
import history from "../../history";
import {inject,observer} from "mobx-react";

async function getuserApi(id) {
    return await getUserById(id)
}

function User(props) {
    const [user, setUser] = useState({})
    //const {authTokens,setAuthTokens } = useAuth()

    useEffect(() => {
            const fetchData = async () => {
                const res = await getUserById(props.basketStore.userIdentity.id)
                setUser(res)
            }
            fetchData()
        }
    )
    function logoutButton(){
        props.basketStore.setUser(null)
        history.push('/')
    }


    return (
        <div>
            <div>Witaj {user.login}</div>
            <Button onClick={logoutButton}>Log out</Button>
            <Button onClick={()=>history.push('/products')}> Produkty</Button>
        </div>
    )

}

export default inject('basketStore')(observer(User))
