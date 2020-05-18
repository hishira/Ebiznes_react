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
import CategoryForm from "./components/Category/CategoryForm";
import CommentForm from "./components/Comment/CommentForm";
import DeliverForm from "./components/Deliver/DeliverForm";
import ImageForm from "./components/Image/ImageForm";
import PaymentMethodForm from "./components/PaymentMethod/PaymentmethodForm";
import ProductForm from "./components/Product/ProductForm";
import SubcategoryForm from "./components/Subcategory/SubcategoryForm";
import Subcategories from "./components/Subcategory/Subcategories";
import CategoryUpdateForm from "./components/Category/UpdateFormCategory";
import CommentUpdateForm from "./components/Comment/UpdateFormComment";
import DeliverUpdateForm from "./components/Deliver/UpdateFormDeliver";
import ImageUpdateForm from "./components/Image/UpdateFormImage";
import PaymentMethodUpdateForm from "./components/PaymentMethod/UpdateFormPaymentMethod";
import ProductUpdateForm from "./components/Product/UpdateFormProduct";
import SubcategoryUpdateForm from "./components/Subcategory/UpdateFormSubcategory";
import UserUpdateForm from "./components/User/UpdateFormUser";

function App() {
    return (
        <div className="App">
            <Header/>
            <Route path='/categories' component={Categories}/>
            <Route path='/category/:id' component={Category}/>
            <Route path='/createcategory' component={CategoryForm}/>
            <Route path='/categoryupdate/:id' component={CategoryUpdateForm}/>
            <Route path="/cat/:id/subcategories" component={Subcategory}/>
            <Route path='/subcat/:id/products' component={ProductsBySubcategory}/>
            <Route path='/subcategories' component={Subcategories} />
            <Route path='/subcategory/:id' component={Subcategoryid}/>
            <Route path='/createsubcategory' component={SubcategoryForm}/>
            <Route path='/updatesubcategory/:id' component={SubcategoryUpdateForm}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            <Route path='/products' component={Products}/>
            <Route path='/product/:id' component={Product}/>
            <Route path='/createproduct' component={ProductForm}/>
            <Route path='/updateproduct/:id' component={ProductUpdateForm}/>
            <Route path='/comments' component={Comments}/>
            <Route path='/comment/:id' component={Comment}/>
            <Route path='/commentupdate/:id' component={CommentUpdateForm}/>
            <Route path='/createcomment' component={CommentForm}/>
            <Route path='/paymentmethods' component={PaymentMethods}/>
            <Route path='/paymentmethod/:id' component={PaymentMethod}/>
            <Route path='/createpaymentmethod' component={PaymentMethodForm}/>
            <Route path='/updatepaymentmethod/:id' component={PaymentMethodUpdateForm}/>
            <Route path='/images' component={Images}/>
            <Route path='/image/:id' component={Image}/>
            <Route path='/updateimage/:id' component={ImageUpdateForm}/>
            <Route path='/createimage' component={ImageForm}/>
            <Route path='/delivers' component={Delivers}/>
            <Route path='/deliver/:id' component={Deliver}/>
            <Route path='/updatedeliver/:id' component={DeliverUpdateForm}/>
            <Route path='/createdeliver' component={DeliverForm}/>
            <Route path='/users' component={Users}/>
            <Route path='/user/:id' component={User}/>
            <Route path='/userupdate/:id' component={UserUpdateForm}/>
            <Route path='/baskets' component={Baskets}/>
            <Route path='/basket/:id' component={Basket}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/order/:id' component={Order}/>
        </div>
    )
}

export default App;
