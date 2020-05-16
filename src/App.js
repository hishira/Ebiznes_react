import React from 'react';
import {
    Route,

} from 'react-router-dom';
import './App.css';
import Categories from "./components/Category/Categories";
import Subcategory from "./components/Subcategory/Subcategory"
import Header from "./components/Header";
import ProductsBySubcategory from "./components/Product/ProductBySubcategory";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Products from "./components/Product/Products";
import Comments from "./components/Comment/Comments";
import PaymentMethods from "./components/PaymentMethod/PaymentMethods";
import Images from "./components/Image/Images";
import Delivers from "./components/Deliver/Delivers";
import Users from "./components/User/Users";
import Baskets from "./components/Basket/Baskets";
import Orders from "./components/Order/Orders";
import Category from "./components/Category/Category";
import Comment from "./components/Comment/Comment";
import Deliver from "./components/Deliver/Deliver";
import Basket from "./components/Basket/Basket";
import Image from "./components/Image/Image";
import Order from "./components/Order/Order";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import Product from "./components/Product/Product";
import Subcategoryid from "./components/Subcategory/Subcategoryid";
import User from "./components/User/User";
function App() {
    return (
        <div className="App">
            <Header/>
            <Route path='/categories' component={Categories}/>
            <Route path='/category/:id' component={Category}/>
            <Route path="/cat/:id/subcategories" component={Subcategory}/>
            <Route path='/subcat/:id/products' component={ProductsBySubcategory}/>
            <Route path='/subcategory/:id' component={Subcategoryid}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/products' component={Products}/>
            <Route path='/product/:id' component={Product} />
            <Route path='/comments' component={Comments}/>
            <Route path='/comment/:id' component={Comment}/>
            <Route path='/paymentmethods' component={PaymentMethods}/>
            <Route path='/paymentmethod/:id'  component={PaymentMethod}/>
            <Route path='/images' component={Images}/>
            <Route path='/image/:id' component={Image}/>
            <Route path='/delivers' component={Delivers}/>
            <Route path='/deliver/:id' component={Deliver}/>
            <Route path='/users' component={Users}/>
            <Route path='/user/:id' component={User}/>
            <Route path='/baskets' component={Baskets}/>
            <Route path='/basket/:id' component={Basket}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/order/:id' component={Order}/>
        </div>
    )
}

export default App;
