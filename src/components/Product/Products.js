import React, {Component} from "react";
import {getProducts, deleteProduct} from "../../Api/Products";
import {inject, observer} from "mobx-react";
import Button from "@material-ui/core/Button";
import history from "../../history";
import './Products.css'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.updateClickHandle = this.updateClickHandle.bind(this)
        this.deleteHandle = this.deleteHandle.bind(this)
        this.addCart = this.addCart.bind(this)
    }

    async deleteHandle(id) {
        await deleteProduct(id)
        history.go(0)
    }

    updateClickHandle(id) {
        history.push(`/updateproduct/${id}`)
    }

    addCart(e, p) {
        e.preventDefault()
        this.props.basket.addProductToBasket(p)
    }

    async componentDidMount() {
        await getProducts()
            .then(response => {
                let prod = response.map(p => {
                    return (
                        <div className='productComponent' key={p.id}>
                            <div className='productInfo'>
                                <div>
                                    Nazwa: {p.name}
                                </div>
                                <div>Cena: {p.cost}</div>
                                <div>Liczba w magazynie {p.count}</div>
                                <div>Producent {p.producer}</div>
                            </div>
                            <Button className='buttonProduct' onClick={() => history.push(`/product/${p.id}`)}>Go to
                                more detail</Button>
                            {/*
                            <Button onClick={this.updateClickHandle.bind(this,p.id)}>Update</Button>
                            <Button onClick={this.deleteHandle.bind(this,p.id)}>Delete</Button>
                            */}
                            <Button className='buttonProduct' onClick={() => this.props.basket.addProductToBasket(p)}>Add
                                do cart</Button>
                        </div>
                    )
                })
                this.setState({products: prod})
            })

    }

    render() {

        return (
            <div className="products">
                {this.state.products}
            </div>
        )
    }
}

export default inject(stores => ({
    basket: stores.basketStore,
    userStore: stores.userStore
}))(observer(Products))