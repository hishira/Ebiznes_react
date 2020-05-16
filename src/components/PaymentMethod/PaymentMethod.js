import React from "react";
import {getPaymentMethodById} from "../../Api/PaymentmethodApi";

class PaymentMethod extends React.Component{
    constructor() {
        super();
        this.state = {
            paymentmethod: []
        }
    }

    async componentDidMount() {
        const {match: {params}} = this.props
        getPaymentMethodById(params.id).then(dane => {
            console.log(dane)
            let com = [dane].map(d => {
                return (
                    <div key={d.id}>
                        <div>
                            {d.name}
                        </div>
                        <div>
                            {d.description}
                        </div>
                    </div>

                )
            })
            this.setState({paymentmethod: com})

        }).catch(e => this.setState({paymentmethod: []}))
    }

    render() {
        return (
            <div>
                {this.state.paymentmethod}
            </div>
        )
    }
}
export default PaymentMethod