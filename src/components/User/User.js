import React, {useState, useEffect} from "react";
import Button from "@material-ui/core/Button";
import history from "../../history";
import {inject, observer} from "mobx-react";
import AdminPanel from "./AdminPanel";
import {singOut} from "../../Api/AuthApi";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))

function User(props) {
    const [user, setUser] = useState({})
    const classes = useStyles()
    useEffect(() => {
            const fetchData = async () => {
                const res = props.userStore.userIdentity
                setUser(res)
            }
            fetchData()
        }
    )

    async function logoutButton() {
        await singOut(props.userStore.userIdentity)
        props.userStore.setUser(null)
        window.localStorage.removeItem("user")
        history.push('/')
    }


    return (
        <div>
            <div style={{marginTop: "1rem"}}>Witaj {user.firstName}</div>
            <div className={classes.root}>
                <Button variant='contained' onClick={()=>history.push('/userorders')} color='primary'>User orders</Button>
            </div>
            <Button onClick={logoutButton}>Log out</Button>
            <Button onClick={() => history.push('/products')}> Produkty</Button>
            {
                user && user.role === "Admin" ? (<AdminPanel/>) : (<div></div>)
            }
        </div>
    )

}

export default inject(stores => ({
    userStore: stores.userStore
}))(observer(User))
