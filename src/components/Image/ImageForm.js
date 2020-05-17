import React from "react";
import {getUsers} from "../../Api/UserApi";
import {getProducts} from "../../Api/Products";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import {createImage} from "../../Api/ImagesApi";

class ImageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "",
            description: "",
            productId: 0,
            products: []
        }
        this.createImage = this.createImage.bind(this)
    }

    async componentDidMount() {
        await getProducts().then(dane => {
            console.log(dane)
            this.setState({productId: dane[0].id})
            this.setState({products: dane})
        })
    }

    async createImage(event) {
        event.preventDefault()
        console.log(this.state.url, this.state.description, this.state.productId)
        await createImage({
            url: this.state.url,
            description: this.state.description,
            product_id: this.state.productId
        })
        history.push('/images')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz obraz
                <form onSubmit={this.createImage} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="url obrazu"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
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
                        multiline
                        required
                        rows={4}
                        onChange={(event) => this.setState({description: event.target.value})}
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

export default ImageForm