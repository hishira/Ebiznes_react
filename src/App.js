import React from 'react';
import {
    Route,

} from 'react-router-dom';
import './App.css';

import Header from "./components/Header";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
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

function App() {
    return (
        <div className="App">
            <Header/>
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
        </div>
    )
}

export default App;
