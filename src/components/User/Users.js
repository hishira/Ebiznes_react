import React from "react";
import {getUsers} from "../../Api/UserApi";

class Users extends React.Component{
    constructor() {
        super();
        this.state = {users: []}
    }
    componentDidMount() {
        getUsers().then(dane=>{
            let us = dane.map(u=>{
                return (
                <div key={u.id}>
                    <div>
                        Login : {u.login}
                    </div>
                    <div>
                        Email : {u.email}
                    </div>
                </div>
                )
            })
            this.setState({users: us})
        })
    }
    render() {
        return (
            <div >
                {this.state.users}
            </div>
        )
    }
}
export default Users