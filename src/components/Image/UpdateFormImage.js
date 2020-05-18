import React from 'react'
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getImagesById} from "../../Api/ImagesApi";
import {updateImage} from "../../Api/ImagesApi";

class ImageUpdateForm extends React.Component {
    constructor() {
        super();
        this.state = {
            updatedImageId: -1,
            productId: -1,
            image: [],
            url: "",
            description: "",
        }
        this.updateImage = this.updateImage.bind(this)
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedImageId: params.id})
        await getImagesById(params.id).then(dane => this.setState({image: dane}))
        this.setState({
            productId: this.state.image.productId,
            url: this.state.image.url,
            description: this.state.image.description
        })
        console.log(this.state)
    }

    async updateImage(event) {
        event.preventDefault()
        console.log(this.state)
        await updateImage(this.state.updatedImageId,{
            url:this.state.url,
            description: this.state.description,
            product_id: this.state.productId
        })
        history.push('/images')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz obraz
                <form onSubmit={this.updateImage} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="url obrazu"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        placeholder={this.state.url}
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({url: event.target.value})}
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Opis"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        placeholder={this.state.description}
                        multiline
                        required
                        rows={4}
                        onChange={(event) => this.setState({description: event.target.value})}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='buttonStyle'
                    >
                        Create iamge
                    </Button>
                </form>
            </Container>
        )
    }
}

export default ImageUpdateForm