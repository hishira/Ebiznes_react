import React from "react";
import {updateProduct, getProductById} from "../../Api/Products";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import NumberFormat from "react-number-format";
import Button from "@material-ui/core/Button";

class ProductUpdateForm extends React.Component{
    constructor() {
        super();
        this.state = {
            updatedProductId: -1,
            product: [],
            name: "",
            cost: 0,
            count: 0,
            producer: 0,
            categoryId: 0,
            subcategoryId: 0,
        }
        this.updateProducthandle = this.updateProducthandle.bind(this)
    }

    async updateProducthandle(event) {
        event.preventDefault()
        await updateProduct(this.state.updatedProductId,{
            name: this.state.name,
            cost: parseInt(this.state.cost),
            count: parseInt(this.state.count),
            producer: this.state.producer,
            categoryId: this.state.categoryId,
            subcategoryId: this.state.subcategoryId
        })
        history.push('/products')

    }

    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedProductId:params.id})
        await getProductById(params.id).then(data=>this.setState({product: data}))
        this.setState({
            name: this.state.product.name,
            cost: this.state.product.cost,
            count: this.state.product.count,
            producer: this.state.product.producer,
            categoryId: this.state.product.categoryId,
            subcategoryId: this.state.product.subcategoryId
        })
        console.log(this.state)
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz produkt
                <form onSubmit={this.updateProducthandle} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="nazwa produktu"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        placeholder={this.state.name}
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({name: event.target.value})}
                    />
                    <TextField
                        label="Cena"
                        onChange={(event) => {
                            this.setState({cost: event.target.value})
                        }}
                        name="cost "
                        id="cost"
                        placeholder={this.state.cost}
                        fullWidth
                        required
                        InputProps={{
                            inputComponent: NumberFormat,
                        }}
                    />
                    <TextField
                        label="ilosc w magazynie"
                        onChange={(event) => {
                            this.setState({count: event.target.value})
                        }}
                        name="count "
                        id="count"
                        fullWidth
                        required
                        placeholder={this.state.count}
                        InputProps={{
                            inputComponent: NumberFormat,
                        }}
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Producent"
                        variant="outlined"
                        margin="normal"
                        name='producer'
                        id='producer'
                        fullWidth
                        placeholder={this.state.producer}
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({producer: event.target.value})}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='buttonStyle'
                    >
                        Update Product
                    </Button>
                </form>
            </Container>
        )
    }
}
export default ProductUpdateForm