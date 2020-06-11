import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import history from "../../history";
import {inject,observer} from "mobx-react";
import AdminPanel from "./AdminPanel";
import {singOut} from "../../Api/AuthApi";


function User(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
            const fetchData = async () => {
                const res = props.userStore.userIdentity
                setUser(res)
            }
            fetchData()
        }
    )
    async function logoutButton(){
        await singOut(props.userStore.userIdentity)
        props.userStore.setUser(null)
        window.localStorage.removeItem("user")
        history.push('/')
    }


    return (
        <div>
            <div>Witaj {user.firstName}</div>
            <Button onClick={logoutButton}>Log out</Button>
            <Button onClick={()=>history.push('/products')}> Produkty</Button>
            {
                user && user.role === "Admin"? (<AdminPanel/>):(<div></div>)
            }
        </div>
    )

}

export default inject(stores => ({
    userStore: stores.userStore
}))(observer(User))
