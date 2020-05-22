import React from "react";
import {Route} from "react-router-dom";
import ProductsBySubcategory from "../Product/ProductBySubcategory";
import Subcategories from "./Subcategories";
import Subcategoryid from "./Subcategoryid";
import SubcategoryForm from "./SubcategoryForm";
import SubcategoryUpdateForm from "./SubcategoryUpdateForm";

class SubcategoryComponent extends React.Component {
    render() {
        return (
            <div>
                <Route path='/subcat/:id/products' component={ProductsBySubcategory}/>
                <Route path='/subcategories' component={Subcategories}/>
                <Route path='/subcategory/:id' component={Subcategoryid}/>
                <Route path='/createsubcategory' component={SubcategoryForm}/>
                <Route path='/updatesubcategory/:id' component={SubcategoryUpdateForm}/>
            </div>
        )
    }
}

export default SubcategoryComponent