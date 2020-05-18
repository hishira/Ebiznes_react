import React from "react";
import {Route} from "react-router-dom";
import Categories from "./Categories";
import Category from "./Category";
import CategoryForm from "./CategoryForm";
import CategoryUpdateForm from "./UpdateFormCategory";
import Subcategory from "../Subcategory/Subcategory";

class CategoryComponent extends React.Component{
    render() {
        return (
            <div>
            <Route path='/categories' component={Categories}/>
            <Route path='/category/:id' component={Category}/>
            <Route path='/createcategory' component={CategoryForm}/>
            <Route path='/categoryupdate/:id' component={CategoryUpdateForm}/>
            <Route path="/cat/:id/subcategories" component={Subcategory}/>
            </div>
        )
    }

}
export default CategoryComponent;