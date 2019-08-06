import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCard } from '../actions/productActions'

const ProductList = ({ products, addToCard }) => (
  <div className="row">
    {products.map(product => (
      <div className="col-3" key={ product.id }>
        <div className="card border-primary mb-3">
          <div className="card-header">{ product.name }</div>
          <div className="card-body text-primary">
            <p className="card-text">Price: { product.price }Tk</p>
            <p className="card-text">Discount: { product.discount }Tk</p>
            <button className="btn btn-success" onClick={() => addToCard(product)}>Add to Card</button>
          </div>
        </div>
      </div>
    ))}
  </div>
)

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      discount: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  products: state.products
})
const mapDispatchToProps = dispatch => ({
  addToCard: product => dispatch(addToCard(product))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)