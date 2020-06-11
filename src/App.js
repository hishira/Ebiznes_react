import React from 'react';
import {
    Route,

} from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Login from "./components/Login/Login";
import Register from "./components/Login/SignUp";
import CategoryComponent from "./components/Category/CategoryComponent";
import SubcategoryComponent from "./components/Subcategory/SubcategoryComponent";
import ProductComponent from "./components/Product/ProductComponent";
import CommentComponent from "./components/Comment/CommentComponent";
import PaymentMethodComponent from "./components/PaymentMethod/PaymentMethodComponent";
import ImageComponent from "./components/Image/ImageComponent";
import DeliverComponent from "./components/Deliver/DeliverComponent";
import UserComponent from "./components/User/UserComponent";
import BasketComponent from "./components/Basket/BasketComponent";
import OrderComponent from "./components/Order/OrderComponent";
import PrivateRoute from "./components/PrivateRoute";
import User from "./components/User/User";
import MainSite from "./components/MainSite";
import BasketStore from "./stores/BasketStore";
import UserStore from "./stores/UserStore";
import {Provider} from "mobx-react";
import FinalizeCart from "./components/Order/FinalizeBasket";
import OAuth from "./components/Login/OAuth";
import ContactPaper from "./components/ContactPaper";
function App(props) {
    // Zostawiam AuthContext dla pewnosci
    // W jednym store przechowujemy user i koszyk
    let user = window.localStorage.getItem("user")
    const stores = {
        userStore: new UserStore(user? JSON.parse(user):null),
        basketStore: new BasketStore()
    }
    return (
        //<AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
        <Provider {...stores}>
            <div className="App">
                <Header/>
                <Route exact path='/' component={MainSite}/>
                <CategoryComponent/>
                <SubcategoryComponent/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <ProductComponent/>
                <CommentComponent/>
                <PaymentMethodComponent/>
                <ImageComponent/>
                <DeliverComponent/>
                <UserComponent/>
                <BasketComponent/>
                <OrderComponent/>
                <Route path='/contact' component={ContactPaper} />
                <PrivateRoute path='/user' component={User}/>
                <PrivateRoute path='/finalizeoffer/:id' component={FinalizeCart}/>
                <Route path='/auth/:provider' component={OAuth}/>
            </div>
        </Provider>
        //</AuthContext.Provider>
    )
}

export default App;
