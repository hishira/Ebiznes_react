import React,{useState} from 'react';
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
import {AuthContext} from "./context/auth";
import PrivateRoute from "./components/PrivateRoute";
import User from "./components/User/User";
function App(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);

    const setTokens = (data = false) => {
        localStorage.setItem("tokens", JSON.stringify(data));
        setAuthTokens(data);
    }
    return (
        <AuthContext.Provider value={{authTokens,setAuthTokens:setTokens}}>
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
                <PrivateRoute path='/user' component={User}/>
            </div>
        </AuthContext.Provider>
    )
}

export default App;
