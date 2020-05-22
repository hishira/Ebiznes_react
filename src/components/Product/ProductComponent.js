import React from "react";
import {Route} from "react-router-dom";
import Products from "./Products";
import Product from "./Product";
import ProductForm from "./ProductForm";
import ProductUpdateForm from "./ProductUpdateForm";

class ProductComponent extends React.Component{
    render() {
        return(
            <div>
                <Route path='/products' component={Products}/>
                <Route path='/product/:id' component={Product}/>
                <Route path='/createproduct' component={ProductForm}/>
                <Route path='/updateproduct/:id' component={ProductUpdateForm}/>
            </div>
        )
    }

}
export default ProductComponent