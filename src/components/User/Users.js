import React from "react";
import {getUsers,deleteUser} from "../../Api/UserApi";
import Button from "@material-ui/core/Button";
import history from "../../history";
class Users extends React.Component{
    constructor() {
        super();
        this.state = {users: []}
        this.updateUserhandle = this.updateUserhandle.bind(this)
        this.deleteHandle = this.deleteHandle.bind(this)
    }
    async deleteHandle(id){
        await deleteUser(id)
        history.go(0)
    }
    updateUserhandle(id){
        history.push(`/userupdate/${id}`)
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
                    <Button onClick={this.updateUserhandle.bind(this,u.id)}>Update</Button>
                    <Button onClick={this.deleteHandle.bind(this,u.id)}>Delete</Button>
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