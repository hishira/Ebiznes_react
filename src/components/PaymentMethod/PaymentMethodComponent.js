import React from "react";
import {Route} from "react-router-dom";
import PaymentMethods from "./PaymentMethods";
import PaymentMethod from "./PaymentMethod";
import PaymentMethodForm from "./PaymentmethodForm";
import PaymentMethodUpdateForm from "./UpdateFormPaymentMethod";

class PaymentMethodComponent extends React.Component{
    render() {
        return(
            <div>
                <Route path='/paymentmethods' component={PaymentMethods}/>
                <Route path='/paymentmethod/:id' component={PaymentMethod}/>
                <Route path='/createpaymentmethod' component={PaymentMethodForm}/>
                <Route path='/updatepaymentmethod/:id' component={PaymentMethodUpdateForm}/>
            </div>
        )
    }
}
export default PaymentMethodComponent