import React from 'react';
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
          <AddProduct/>
        </div>
        <div className="col-md-4">
          <CardItemList/>
        </div>
      </div>
    </div>
  );
}

export default App;
