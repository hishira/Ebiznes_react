import React from "react";
import history from "../../history";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getPaymentMethodById,updatePaymentMethod} from "../../Api/PaymentmethodApi";
class PaymentMethodUpdateForm extends React.Component{
    constructor() {
        super();
        this.state = {
            updatedPaymentMethodId: -1,
            paymentmethod: [],
            name: "",
            description: ""
        }
        this.updatePaymentMethod = this.updatePaymentMethod.bind(this)
    }
    async componentDidMount() {
        const {match: {params}} = this.props
        this.setState({updatedPaymentMethodId:params.id})
        await getPaymentMethodById(params.id).then(data=>this.setState({paymentmethod:data}))
        this.setState({
            name: this.state.paymentmethod.name,
            description: this.state.paymentmethod.description
        })
        console.log(this.state)
    }

    async updatePaymentMethod(event) {
        event.preventDefault()
        console.log(this.state.name, this.state.description)
        await updatePaymentMethod(this.state.updatedPaymentMethodId,{
            name: this.state.name,
            description: this.state.description
        })
        history.push('/paymentmethods')
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                Update metode platnosci
                <form onSubmit={this.updatePaymentMethod} autoComplete="off">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Nazwa metody"
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
                    >
                        Update
                    </Button>
                </form>
            </Container>
        )
    }
}
export default PaymentMethodUpdateForm