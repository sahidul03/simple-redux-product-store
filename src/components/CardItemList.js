import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const CardItemList = ({ cardItems }) => (
  <table className="table table-sm table-hover">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product name</th>
        <th scope="col">Price</th>
        <th scope="col">Discount</th>
        <th scope="col">Quantity</th>
        <th scope="col">Sub Total</th>
      </tr>
    </thead>
    <tbody>
      {cardItems.map((item, index) => (
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{item.product.name}</td>
        <td>{item.product.price}</td>
        <td>{item.product.discount}</td>
        <td>{item.quantity}</td>
        <td>{item.quantity * (item.product.price - item.product.discount)}</td>
      </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col" colSpan="2">Total Price</th>
        <th scope="col">{ cardItems.reduce((sum, item) => { return (sum + (item.quantity * (item.product.price - item.product.discount))); }, 0) }</th>
      </tr>
    </tfoot>
  </table>
)

CardItemList.propTypes = {
  cardItems: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
      }).isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = state => ({
  cardItems: state.cardItems
})

export default connect(mapStateToProps)(CardItemList)