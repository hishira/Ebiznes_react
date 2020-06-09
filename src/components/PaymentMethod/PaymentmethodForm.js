import React from "react";
import history from "../../history";
import Container from "@material-ui/core/Container";
import {createPaymentMethod} from "../../Api/PaymentmethodApi";
import FormInput from "../FormInput";
class PaymentMethodForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            description: ""
        }
        this.createPaymentMethod = this.createPaymentMethod.bind(this)
    }

    async createPaymentMethod(event) {
        event.preventDefault()
        console.log(this.state.name, this.state.description)
        await createPaymentMethod({
            name: this.state.name,
            description: this.state.description
        })
        history.push('/paymentmethods')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Utowrz metode platnosci
                <form onSubmit={this.createPaymentMethod} autoComplete="off">
                    <FormInput  firstlabel={"Nazwa metody"}
                                secondlabel={"Opis"}
                                firstfunction={(event) => this.setState({name: event.target.value})}
                                secondfunction={(event) => this.setState({description: event.target.value})}
                    />

                </form>
            </Container>
        )
    }
}

export default PaymentMethodForm