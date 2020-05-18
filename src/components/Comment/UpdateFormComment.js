import React from 'react'
import {getCommentById, updateComment} from "../../Api/CommentApi";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class CommentUpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
            updatedCommentId: -1,
            comment: [],
            title: "",
            content: "",
            productId: -1,
            userId: -1
        }
        this.updateComment = this.updateComment.bind(this)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedCommentId: params.id})
        await getCommentById(params.id).then(dane => this.setState({comment: dane}))
        this.setState({
            title: this.state.comment.title,
            content: this.state.comment.content,
            productId: this.state.comment.productId,
            userId: this.state.comment.userId
        })
        console.log(this.state)
    }

    async updateComment(event) {
        event.preventDefault()
        console.log(this.state)
        await updateComment(this.state.updatedCommentId, {
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
                <form onSubmit={this.updateComment} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="tytul komentarza"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        placeholder={this.state.title}
                        rowsMax={4}
                        onChange={(event) => this.setState({title: event.target.value})}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Tresc"
                        variant="outlined"
                        placeholder={this.state.content}
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rows={4}
                        onChange={(event) => this.setState({content: event.target.value})}
                    />
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

export default CommentUpdateForm