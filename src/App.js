import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList'
import CardItemList from './components/CardItemList'
import AddProduct from './components/AddProduct'

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8">
          <ProductList/>
        </div>
        <div className="col-md-4">
          <CardItemList/>
        </div>
      </div>
      <AddProduct/>
    </div>
  );
}

export default App;
