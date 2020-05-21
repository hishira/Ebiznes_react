import React from "react";
import {Route} from "react-router-dom";
import Baskets from "./Baskets";
import Basket from "./Basket";
import CurrentBasket from "./CurrentBasket";
class BasketComponent extends React.Component{
    render() {
        return (
            <div>
                <Route path='/baskets' component={Baskets}/>
                <Route path='/basket/:id' component={Basket}/>
                <Route path='/currentbasket' component={CurrentBasket}/>
            </div>
        );
    }
}
export default BasketComponent