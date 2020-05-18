import React from "react";
import {getPayemntMethods} from "../../Api/PaymentmethodApi";
import Button from "@material-ui/core/Button";
import history from "../../history";

class PaymentMethods extends React.Component {
    constructor() {
        super();
        this.state = {
            methods: []
        }
        this.updatePaymentMethod = this.updatePaymentMethod.bind(this)
    }

    updatePaymentMethod(id) {
        history.push(`/updatepaymentmethod/${id}`)
    }

    async componentDidMount() {
        getPayemntMethods().then(dane => {
            let paymet = dane.map(c => {
                return (
                    <div key={c.id}>
                        <div>{c.name}</div>
                        <div>{c.description}</div>
                        <Button onClick={this.updatePaymentMethod.bind(this,c.id)}>Update</Button>
                    </div>
                )
            })
            this.setState({methods: paymet})
        })
    }

    render() {
        return (
            <div>
                {this.state.methods}
            </div>
        )
    }

}

export default PaymentMethods