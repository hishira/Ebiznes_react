import React from "react";
import {Route, Redirect} from 'react-router-dom'
import {inject,observer} from "mobx-react";

function PrivateRoute({component:Component,...rest}){

    return (
        <Route
            {...rest} render={(props)=>
            rest.userStore.userIdentity? (
            <Component {...props}/>
            ):(
                <Redirect to='/login'/>
            )
        }/>
    )
}
export default inject(stores => ({
    userStore: stores.userStore
}))(observer(PrivateRoute))