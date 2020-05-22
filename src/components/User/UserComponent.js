import React from "react";
import {Route} from "react-router-dom";
import Users from "./Users";
import User from "./User";

class UserComponent extends React.Component{
    render() {
        return (
            <div>
                <Route path='/users' component={Users}/>
                <Route path='/user/:id' component={User}/>
            </div>
        );
    }
}
export default UserComponent