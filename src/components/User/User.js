import React from "react";
import {getUserById} from "../../Api/UserApi";

class User extends React.Component{
    constructor() {
        super();
        this.state = {
            user: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getUserById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.login}
                        </div>
                        <div>
                            {d.email}
                        </div>
                    </div>

                )
            })
            this.setState({user: com})

        }).catch(e => this.setState({user: []}))
    }

    render() {
        return (
            <div>
                {this.state.user}
            </div>
        )
    }
}
export default User