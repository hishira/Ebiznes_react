import React from "react";
import {Route} from "react-router-dom";
import Orders from "./Orders";
import Order from "./Order";
import OrdersByUser from "./OrdersByUser";
import PrivateRoute from "../PrivateRoute";
class OrderComponent extends React.Component{
    render() {
        return (
            <div>
                <Route path='/orders' component={Orders}/>
                <Route path='/order/:id' component={Order}/>
                <PrivateRoute path='/userorders' component={OrdersByUser}/>
            </div>
        );
    }
}
export default OrderComponent