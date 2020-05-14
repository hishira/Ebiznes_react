import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Categories from "./components/Categories";
import Subcategory from "./components/Subcategory"
import Header from "./components/Header";
import ProductsBySubcategory from "./components/ProductBySubcategory";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  return (
    <div className="App">
        <Header/>
        <Route path='/categories' component={Categories}/>
        <Route path="/cat/:id/subcategories" component={Subcategory}/>
        <Route path='/subcat/:id/products' component={ProductsBySubcategory}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
    </div>
  )
}

export default App;
