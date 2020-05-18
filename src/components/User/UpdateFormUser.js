import React from "react";
import {getUserById,updateUser} from "../../Api/UserApi";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import history from "../../history";

class UserUpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
            updatedUserId: -1,
            user: [],
            login: "",
            email: "",
            password: "",
        }
        this.updateUser = this.updateUser.bind(this)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedUserId: params.id})
        await getUserById(params.id).then(dane => this.setState({user: dane}))
        this.setState({
            login: this.state.user.login,
            email: this.state.user.email,
            password: this.state.user.password
        })
        console.log(this.state)
    }

    async updateUser(event) {
        event.preventDefault()
        console.log(this.state)
        await updateUser(this.state.updatedUserId,{
            login: this.state.login,
            email: this.state.email,
            password: this.state.password
        })
        history.push('/users')
    }

    render() {
        const {styles} = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <div >
                    <Typography component="h1" variant="h5">
                        Update
                    </Typography>
                    <form  onSubmit={this.updateUser} autoComplete="off">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            placeholder={this.state.email}
                            onChange={(event) => this.setState({email:event.target.value})}
                            required
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            autoComplete="username"
                            autoFocus
                            placeholder={this.state.login}
                            onChange={(event) => this.setState({login:event.target.value})}
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Update user
                        </Button>

                    </form>
                </div>
            </Container>

        )
    }
}
export default UserUpdateForm