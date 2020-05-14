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
import Body from "./components/Body";
function App() {
  return (
    <div className="App">
        <Header/>
        <Route path='/categories' component={Categories}/>
        <Route path="/cat/:id/subcategories" component={Subcategory}/>
    </div>
  )
}

export default App;
