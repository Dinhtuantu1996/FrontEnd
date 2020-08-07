import React from 'react'
import PropTypes from 'prop-types'

const MainCheckOut = props => {
    return (
        <div>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="index.html">Home</a></span> / <span>Checkout</span></p>
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
                  <div className="process text-center">
                    <p><span>03</span></p>
                    <h3>Order Complete</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <form method="post" className="colorlib-form">
                  <h2>Billing Details</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="country">Select Country</label>
                        <div className="form-field">
                          <i className="icon icon-arrow-down3" />
                          <select name="people" id="people" className="form-control">
                            <option value="#">Select country</option>
                            <option value="#">Alaska</option>
                            <option value="#">China</option>
                            <option value="#">Japan</option>
                            <option value="#">Korea</option>
                            <option value="#">Philippines</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="companyname">Company Name</label>
                        <input type="text" id="companyname" className="form-control" placeholder="Company Name" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="fname">Address</label>
                        <input type="text" id="address" className="form-control" placeholder="Enter Your Address" />
                      </div>
                      <div className="form-group">
                        <input type="text" id="address2" className="form-control" placeholder="Second Address" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="companyname">Town/City</label>
                        <input type="text" id="towncity" className="form-control" placeholder="Town or City" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="stateprovince">State/Province</label>
                        <input type="text" id="fname" className="form-control" placeholder="State Province" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lname">Zip/Postal Code</label>
                        <input type="text" id="zippostalcode" className="form-control" placeholder="Zip / Postal" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="text" id="email" className="form-control" placeholder="State Province" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="Phone">Phone Number</label>
                        <input type="text" id="zippostalcode" className="form-control" placeholder />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <div className="radio">
                          <label><input type="radio" name="optradio" /> Create an Account? </label>
                          <label><input type="radio" name="optradio" /> Ship to different address</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="cart-detail">
                      <h2>Cart Total</h2>
                      <ul>
                        <li>
                          <span>Subtotal</span> <span>$100.00</span>
                          <ul>
                            <li><span>1 x Product Name</span> <span>$99.00</span></li>
                            <li><span>1 x Product Name</span> <span>$78.00</span></li>
                          </ul>
                        </li>
                        <li><span>Shipping</span> <span>$0.00</span></li>
                        <li><span>Order Total</span> <span>$180.00</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-100" />
                  <div className="col-md-12">
                    <div className="cart-detail">
                      <h2>Payment Method</h2>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label><input type="radio" name="optradio" /> Direct Bank Tranfer</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label><input type="radio" name="optradio" /> Check Payment</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label><input type="radio" name="optradio" /> Paypal</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="checkbox">
                            <label><input type="checkbox" defaultValue /> I have read and accept the terms and conditions</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p><a href="#" className="btn btn-primary">Place an order</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

MainCheckOut.propTypes = {

}

export default MainCheckOut
