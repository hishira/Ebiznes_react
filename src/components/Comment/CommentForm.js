import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getUsers} from "../../Api/UserApi";
import {getProducts} from "../../Api/Products";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import './CommentForm.css'
import {createComment} from "../../Api/CommentApi";
import history from "../../history";
class CommentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            userId: 0,
            users: [],
            productId: 0,
            products: []
        }
        this.createComment = this.createComment.bind(this)
    }

    async componentDidMount() {
        await getUsers().then(dane => {
            console.log(dane)
            this.setState({userId: dane[0].id})
            this.setState({users: dane})
        })
        await getProducts().then(dane => {
            console.log(dane)
            this.setState({productId: dane[0].id})
            this.setState({products: dane})
        })
    }

    async createComment(event) {
        event.preventDefault()
        console.log(this.state.title, this.state.content, this.state.userId, this.state.productId)
        await createComment({
            title: this.state.title,
            content: this.state.content,
            product_id: this.state.productId,
            user_id: this.state.userId
        })
        history.push('/comments')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz kommentarz
                <form onSubmit={this.createComment} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="tytul komentarza"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({title: event.target.value})}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Tresc"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rows={4}
                        onChange={(event) => this.setState({content: event.target.value})}
                    />
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={this.state.productId}
                        fullWidth
                        onChange={(event) => this.setState({productId: event.target.value})}
                        className="selectStyle"
                    >
                        {this.state.products.map(prod => {
                            return (
                                <MenuItem key={prod.id} value={prod.id}>
                                    {prod.name}
                                </MenuItem>
                            )
                        })}
                    </Select>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={this.state.userId}
                        fullWidth
                        onChange={(event) => this.setState({userId: event.target.value})}
                        className="selectStyle"
                    >
                        {this.state.users.map(user => {
                            return (
                                <MenuItem key={user.id} value={user.id}>
                                    {user.login}
                                </MenuItem>
                            )
                        })}
                    </Select>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='buttonStyle'
                    >
                        Create comment
                    </Button>
                </form>
            </Container>
        )
    }
}

export default CommentForm