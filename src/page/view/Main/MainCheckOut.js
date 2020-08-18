import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
const MainCheckOut = ({ onCheckOut }) => {

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onHandleSubmit = (data) => {
    onCheckOut(data)
    history.push("/order");
  }


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
                  <h2>Checkout</h2>
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
              <form onSubmit={handleSubmit(onHandleSubmit)} className="colorlib-form">
                <h2>Billing Details</h2>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="country">Select Country</label>
                      <div className="form-field">
                        <i className="icon icon-arrow-down3" />
                        <select ref={register()} name="country" id="people" className="form-control">
                          <option value="Viet Nam">Viet Nam</option>
                          <option value="Alaska">Alaska</option>
                          <option value="China">China</option>
                          <option value="Japan">Japan</option>
                          <option value="Korea">Korea</option>
                          <option value="Philippines">Philippines</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="fname" name="fname" className="form-control" placeholder="Your firstname" />
                      {errors.fname && errors.fname.type === "required" && <span style={{ color: 'red' }}>Không được để trống màu first name</span>}
                      {errors.fname && errors.fname.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="lname" name="lname" className="form-control" placeholder="Your lastname" />
                      {errors.lname && errors.lname.type === "required" && <span style={{ color: 'red' }}>Không được để trống last name</span>}
                      {errors.lname && errors.lname.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="fname">Address</label>
                      <input type="text" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="address" name="address" className="form-control" placeholder="Enter Your Address" />
                      {errors.address && errors.address.type === "required" && <span style={{ color: 'red' }}>Không được để trống address</span>}
                      {errors.address && errors.address.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="stateprovince">State/Province</label>
                      <input type="text" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="fname" name="state" className="form-control" placeholder="State Province" />
                      {errors.state && errors.state.type === "required" && <span style={{ color: 'red' }}>Không được để trống state</span>}
                      {errors.state && errors.state.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lname">Zip/Postal Code</label>
                      <input type="text" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="zippostalcode" name="zip" className="form-control" placeholder="Zip / Postal" />
                      {errors.zip && errors.zip.type === "required" && <span style={{ color: 'red' }}>Không được để trống zipcode</span>}
                      {errors.zip && errors.zip.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">E-mail Address</label>
                      <input type="text" ref={register({ required: true, pattern: /^[a-z][a-z0-9_\.]{5,}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){0,}$/ })} id="email" name="email" className="form-control" placeholder="State Province" />
                      {errors.email && errors.email.type === "required" && <span style={{ color: 'red' }}>Không được để trống Email</span>}
                      {errors.email && errors.email.type === "pattern" && <span style={{ color: 'red' }}>Sai định dạng email</span>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="Phone">Phone Number</label>
                      <input type="text" ref={register({ required: true, pattern: /^(?:0\s*?)[0-9]{9}?$/ })} id="zippostalcode" name="phone" className="form-control" placeholder />
                      {errors.phone && errors.phone.type === "required" && <span style={{ color: 'red' }}>Không được để trống số điện thoại</span>}
                      {errors.phone && errors.phone.type === "pattern" && <span style={{ color: 'red' }}>Sai định dạng Số điện thoại</span>}
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-primary btn-lg btn-block">Place an order</button>
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
