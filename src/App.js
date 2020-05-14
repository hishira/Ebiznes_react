import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Categories from "./components/Categories";
import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  return <Router>
    <div className="App">
        <Header/>

        <Route path='/categories' component={Categories}/>
    </div>
  </Router>
}

export default App;
