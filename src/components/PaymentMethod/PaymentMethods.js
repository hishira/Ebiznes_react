import React from "react";
import {getPayemntMethods,deletePaymentMethod} from "../../Api/PaymentmethodApi";
import Button from "@material-ui/core/Button";
import history from "../../history";

class PaymentMethods extends React.Component {
    constructor() {
        super();
        this.state = {
            methods: []
        }
        this.updatePaymentMethod = this.updatePaymentMethod.bind(this)
        this.deleteHandle = this.deleteHandle.bind(this)
    }
    async deleteHandle(id){
        await deletePaymentMethod(id)
        history.go(0)
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
                        <Button onClick={this.deleteHandle.bind(this,c.id)}>Delete</Button>
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