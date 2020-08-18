import React , { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom";

const MainOrder = props => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <div>
  <div className="breadcrumbs">
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="bread"><span><a href="index.html">Home</a></span> / <span>Purchase Complete</span></p>
        </div>
      </div>
    </div>
  </div>
  <div className="colorlib-product">
    <div className="container">
      <div className="row row-pb-lg">
        <div className="col-sm-10 offset-md-1">
          <div className="process-wrap">
            <div className="process text-center active">
              <p><span>01</span></p>
              <h3>Shopping Cart</h3>
            </div>
            <div className="process text-center active">
              <p><span>02</span></p>
              <h3>Checkout</h3>
            </div>
            <div className="process text-center active">
              <p><span>03</span></p>
              <h2 >Order Complete</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1 text-center">
          <p className="icon-addcart"><span><i className="icon-check" /></span></p>
          <h2 className="mb-4">Thank you for purchasing, Your order is complete</h2>
          <p>
            <Link to="/" className="btn btn-primary btn-outline-primary">Home</Link>
            <Link to="/shopping" className="btn btn-primary btn-outline-primary"><i className="icon-shopping-cart" /> Continue Shopping</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

MainOrder.propTypes = {

}

export default MainOrder
