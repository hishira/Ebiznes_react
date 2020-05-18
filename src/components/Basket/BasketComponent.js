import React from "react";
import {Route} from "react-router-dom";
import Baskets from "./Baskets";
import Basket from "./Basket";

class BasketComponent extends React.Component{
    render() {
        return (
            <div>
                <Route path='/baskets' component={Baskets}/>
                <Route path='/basket/:id' component={Basket}/>
            </div>
        );
    }
}
export default BasketComponent