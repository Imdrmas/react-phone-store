import React from 'react';
import {Switch as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/cart';
import Default from './components/Default';
import Modal from './components/Modal'

function App() {
  return (
  <React.Fragment>
   <NavBar />
   <Router>
     <Route exact path="/" component={ProductList} />
     <Route path="/details" component={Details} />
     <Route path="/cart" component={Cart} />
     <Route component={Default} />
   </Router>
    <Modal />
  </React.Fragment>
  );
}

export default App;
