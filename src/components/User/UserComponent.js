import React from "react";
import {Route} from "react-router-dom";
import Users from "./Users";
import User from "./User";
import UserUpdateForm from "./UpdateFormUser";

class UserComponent extends React.Component{
    render() {
        return (
            <div>
                <Route path='/users' component={Users}/>
                <Route path='/user/:id' component={User}/>
                <Route path='/userupdate/:id' component={UserUpdateForm}/>
            </div>
        );
    }
}
export default UserComponent