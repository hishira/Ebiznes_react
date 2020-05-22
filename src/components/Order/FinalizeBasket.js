import React from "react";
import {getProductsFromBasket} from "../../Api/BasketApi";
import {getPayemntMethods} from "../../Api/PaymentmethodApi";
import {getDelivers} from "../../Api/DeliverApi";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import '../Basket/CurrentBasket.css'
import {createOrder} from "../../Api/OrderApi";
import {inject, observer} from "mobx-react";
import history from "../../history";

class FinalizeCart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            paymentMethod: [],
            delivers: [],
            cost: 0,
            newcost: 0,
            paymethod: "",
            deliver: "",
            deliverName: "",
        }
        this.paymentcheck = this.paymentcheck.bind(this)
        this.order = this.order.bind(this)
    }

    paymentcheck(e) {
        e.preventDefault()

    }

    async order() {
        const {match: {params}} = this.props
        console.log(this.state.paymethod)
        console.log(this.state.deliver)
        console.log(params.id)
        console.log(this.props.user.userIdentity.id)
        if (this.state.paymethod === "" || this.state.deliver === "") {
            alert('Wypelnij ponizsze pola')
            return
        }
        let date = new Date();
        let createDate = `${date.getFullYear()}-${(date.getUTCMonth() + 1)}-${date.getUTCDate()}`;
        console.log(createDate)
        await createOrder({
            date: createDate,
            cost: this.state.newcost,
            deliverId: this.state.deliver,
            userId: this.props.user.userIdentity.id,
            paymentId: this.state.paymethod,
            basketId: params.id
        })
        this.props.basket.removeBasket()
        history.push('/')

    }

    async componentDidMount() {
        const {match: {params}} = this.props
        let result = await getProductsFromBasket(params.id)
        console.log(result)
        this.setState({products: result})
        let cena = 0;
        for (let i in this.state.products) {
            cena += parseInt(this.state.products[i][3])
        }
        this.setState({cost: cena})
        console.log(this.state.cost)
        let pay = await getPayemntMethods()
        this.setState({paymentMethod: pay})
        let del = await getDelivers()
        this.setState({delivers: del})
    }

    render() {
        return (
            <div className='order'>
                <div className='basketFormat'>
                    {
                        this.state.products.map(p => {
                            return (
                                <div className='product'>
                                    <div>Nazwa: {p[2]}</div>
                                    <div>Cena {p[3]}</div>
                                    <div>Producent {p[4]}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <br/>
                <FormControl component='fieldset'>
                    <FormLabel component='legend'>Metoda platnosci</FormLabel>
                    <div>
                        <Select name='paymentmethod' value={this.state.paymethod}
                                onChange={(e) => this.setState({paymethod: e.target.value})}>
                            {this.state.paymentMethod.map(p => {
                                return (<MenuItem value={p.id}>{p.name}</MenuItem>)
                            })}
                        </Select>
                    </div>
                </FormControl>
                <div/>
                <FormControl className='FormControl' component='fieldset'>
                    <FormLabel component='legend'>Sposob dostawy</FormLabel>
                    <div>
                        <Select name='paymentmethod' value={this.state.deliverName}
                                onChange={(e) => this.setState({
                                    deliver: e.target.value['id'],
                                    newcost: this.state.cost + e.target.value['cost'],
                                    deliverName: e.target.value['name']
                                })}>
                            {this.state.delivers.map(p => {
                                return (<MenuItem value={{cost: p.cost, id: p.id, name: p.name}}>{p.name}</MenuItem>)
                            })}
                        </Select>
                    </div>
                </FormControl>
                <div className='price'>Cena : {this.state.newcost}</div>
                <Button variant='contained' className='orderbutton' color='primary' onClick={this.order}>Zamow</Button>
            </div>
        );
    }
}

export default inject(stores => ({
    user: stores.userStore,
    basket: stores.basketStore
}))(observer(FinalizeCart))