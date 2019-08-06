import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addProduct } from '../actions/productActions'

const AddProduct = ({ products, addToCard }) => (
    <div className="card bg-light mb-3 fixed-bottom">
        <div className="card-header text-center h5">Add a new product</div>
        <div className="card-body">
            <div className="form-inline">
                <div className="form-group mb-2">
                    <input type="text" className="form-control-plaintext" placeholder="Product Name"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="number" className="form-control-plaintext" placeholder="Price"/>
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="number" className="form-control-plaintext" placeholder="Discount"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add Product</button>
            </div>
        </div>
    </div>
)

// AddProduct.propTypes = {
//   product: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     discount: PropTypes.number.isRequired,
//   }).isRequired
// }

const mapStateToProps = state => ({
  products: state.products
})
const mapDispatchToProps = dispatch => ({
    addProduct: product => dispatch(addProduct(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)