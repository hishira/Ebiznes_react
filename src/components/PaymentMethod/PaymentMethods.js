import React from "react";
import {getPayemntMethods} from "../../Api/PaymentmethodApi";
class PaymentMethods extends React.Component{
    constructor() {
        super();
        this.state = {
            methods: []
        }
    }
    async componentDidMount() {
        getPayemntMethods().then(dane=>{
            let paymet = dane.map(c=>{
                return(
                    <div key={c.id}>
                        <div>{c.name}</div>
                        <div>{c.description}</div>
                    </div>
                )
            })
            this.setState({methods: paymet})
        })
    }
    render(){
        return (
            <div>
                {this.state.methods}
            </div>
        )
    }

}
export default PaymentMethods