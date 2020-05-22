import React from "react";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createPaymentMethod} from "../../Api/PaymentmethodApi";

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
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa metody"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        multiline
                        required
                        rowsMax={4}
                        onChange={(event) => this.setState({name: event.target.value})}
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
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Create
                    </Button>
                </form>
            </Container>
        )
    }
}

export default PaymentMethodForm