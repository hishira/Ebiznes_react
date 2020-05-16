import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
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
import Orders from "./components/Order/Order";
function App() {
  return (
    <div className="App">
        <Header/>
        <Route path='/categories' component={Categories}/>
        <Route path="/cat/:id/subcategories" component={Subcategory}/>
        <Route path='/subcat/:id/products' component={ProductsBySubcategory}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/products' component={Products}/>
        <Route path='/comments' component={Comments}/>
        <Route path='/paymentmethods' component={PaymentMethods}/>
        <Route path='/images' component={Images}/>
        <Route path='/delivers' component={Delivers} />
        <Route path='/users' component={Users} />
        <Route path='/baskets' component={Baskets}/>
        <Route path='/orders' component={Orders}/>
    </div>
  )
}

export default App;
