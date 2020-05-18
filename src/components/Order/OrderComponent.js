import React from "react";
import {Route} from "react-router-dom";
import Orders from "./Orders";
import Order from "./Order";

class OrderComponent extends React.Component{
    render() {
        return (
            <div>
                <Route path='/orders' component={Orders}/>
                <Route path='/order/:id' component={Order}/>
            </div>
        );
    }
}
export default OrderComponent