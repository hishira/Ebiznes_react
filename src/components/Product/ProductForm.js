import React from "react";
import {getCategories} from "../../Api/Categories";
import {getSubCategories} from "../../Api/Subcategory";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import NumberFormat from "react-number-format";
import {createProduct} from "../../Api/Products";
import history from "../../history";
import {inject, observer} from "mobx-react";

class ProductForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            cost: 0,
            count: 0,
            producer: 0,
            categoryId: 0,
            subcategoryId: 0,
            categories: [],
            subcategories: []
        }
        this.createProductHandle = this.createProductHandle.bind(this)
        this.checkGoodCategories = this.checkGoodCategories.bind(this)
    }

    checkGoodCategories(categoryId, subcategoryId) {
        for (let i of this.state.categories) {
            if (i.id === categoryId) {
                for (let j of this.state.subcategories) {
                    if (j.id === subcategoryId) {
                        if (i.id !== j.categoryId) {
                            alert("Bledna podkategoria");
                            return true;
                        }
                    }
                }
            }
        }
    }

    async createProductHandle(event) {
        event.preventDefault()
        console.log(this.state)
        if (this.checkGoodCategories(this.state.categoryId, this.state.subcategoryId))
            return
        await createProduct({
                id: -1,
                name: this.state.name,
                cost: parseInt(this.state.cost),
                count: parseInt(this.state.count),
                producer: this.state.producer,
                categoryId: this.state.categoryId,
                subcategoryId: this.state.subcategoryId
            },this.props.userStore.userIdentity.token
        )
        history.push('/products')
    }

    async componentDidMount() {
        const bb = this.props.userStore.userIdentity && this.props.userStore.userIdentity.role === "Admin"
        if (!bb) {
            history.push("/")
        }
        await getCategories().then(dane => {
            this.setState({categoryId: dane[0].id})
            this.setState({categories: dane})
        })
        await getSubCategories().then(dane => {
            this.setState({subcategoryId: dane[0].id})
            this.setState({subcategories: dane})
        })
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz produkt
                <form onSubmit={this.createProductHandle} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="nazwa produktu"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
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
                        fullWidth
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({producer: event.target.value})}
                    />

                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={this.state.categoryId}
                        fullWidth
                        onChange={(event) => this.setState({categoryId: event.target.value})}
                        className="selectStyle"
                    >
                        {this.state.categories.map(cat => {
                            return (
                                <MenuItem key={cat.id} value={cat.id}>
                                    {cat.name}
                                </MenuItem>
                            )
                        })}
                    </Select>

                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={this.state.subcategoryId}
                        fullWidth
                        required
                        onChange={(event) => this.setState({subcategoryId: event.target.value})}
                        className="selectStyle"
                    >
                        {this.state.subcategories.map(subccat => {
                            if (subccat.categoryId === this.state.categoryId)
                                return (
                                    <MenuItem key={subccat.id} value={subccat.id}>
                                        {subccat.name}
                                    </MenuItem>
                                )
                            return (<div></div>)
                        })}
                    </Select>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='buttonStyle'
                    >
                        Create product
                    </Button>
                </form>
            </Container>
        )
    }
}

export default inject(stores => ({
    userStore: stores.userStore
}))(observer(ProductForm))