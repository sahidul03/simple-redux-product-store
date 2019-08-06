import React from 'react'
import { connect } from 'react-redux'
import { addProduct } from '../actions/productActions'

const AddProduct = ({ products, addProduct }) => {

    let product = {};
  
    const handleChange = (e) => {
      product[e.target.name] = e.target.value;
    }

    const submitForm = () => {
        if (!product.name) {
            return alert("Product can't be empty!");
        }

        const findDuplicate = products.findIndex(tempProduct => tempProduct.name.toLowerCase() === product.name.toLowerCase());

        if (findDuplicate > -1) {
            return alert("Product is already exist. Please change the product name.");
        }

        addProduct(product);

        product = {};
        document.getElementById('name').value=''; 
        document.getElementById('price').value=''; 
        document.getElementById('discount').value=''; 
    }
  
    return (
        <div className="col-6">
            <div className="card">
                <div className="card-header text-center">Add a new product</div>
                <div className="card-body">
                    <div className="form-group">
                        <input name="name" id="name" type="text" onChange={handleChange} className="input-sm form-control" placeholder="Product Name" value={product.name} />
                    </div>
                    <div className="form-group">
                        <input name="price" id="price" type="number" onChange={handleChange} className="input-sm form-control" placeholder="Price" value={product.price}/>
                    </div>
                    <div className="form-group">
                        <input name="discount" id="discount" type="number" onChange={handleChange} className="input-sm form-control" placeholder="Discount" value={product.discount}/>
                    </div>
                    <button type="button" onClick={submitForm} className="btn-sm btn btn-primary">Add Product</button>
                </div>
            </div>
        </div>
    );
  }

const mapStateToProps = state => ({
  products: state.products
})
const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(addProduct(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)