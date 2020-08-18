import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const MainCart = ({ carts, onRemoveCr }) => {

  const onHandleRemoveCr = (id) => {
    onRemoveCr(id);
    openModal();
  }

 

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }



  const customStyles = {
    content: {
      top: '30%',
      left: '40%',
      right: 'auto',
      bottom: 'auto',
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])





  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="bread"><span><Link to="/">Home</Link></span> / <span>Cart</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row row-pb-lg">
            <div className="col-md-10 offset-md-1">
              <div className="process-wrap">
                <div className="process text-center active">
                  <p><span>01</span></p>
                  <h2>Shopping Cart</h2>
                </div>
                <div className="process text-center">
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
          <div className="row row-pb-lg">
            <div className="col-md-12">
              <div className="product-name d-flex">
                <div className="one-forth text-left px-4">
                  <span>Product Details</span>
                </div>
                <div className="one-eight text-center">
                  <span>Price</span>
                </div>
                <div className="one-eight text-center">
                  <span>Sale</span>
                </div>
                <div className="one-eight text-center">
                  <span>Quantity</span>
                </div>
                <div className="one-eight text-center">
                  <span>Total</span>
                </div>
                <div className="one-eight text-center px-4">
                  <span>Remove</span>
                </div>
              </div>
              {carts.map(({ id, amout, name, image, price, pricesale }, index) => (
                <div key={index} className="product-cart d-flex">
                  <div className="one-forth">
                    <div className="product-img" style={{ backgroundImage: `url(${image})` }}>
                    </div>
                    <div className="display-tc">
                      <h3>{name}</h3>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">{price}</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">{pricesale}</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <input type="text" id="quantity" name="quantity" className="form-control input-number text-center"  defaultValue={amout} min={1} max={100} />
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">{price * amout}</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <a href="#" className="closed" onClick={() => onHandleRemoveCr(id)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row row-pb-lg">
            <div className="col-md-12">
              <div className="total-wrap">
                <div className="row">
                  <div className="col-sm-8">
                    <Link to="/checkout">
                      <div className="row form-group">
                        <div className="col-sm-3">
                          <input type="submit" defaultValue="Apply Coupon" className="btn btn-primary" />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col-sm-4 text-center">
                    <div className="total">
                      <div className="sub">
                        <p><span>Subtotal:</span> <span>$100.00</span></p>
                        <p><span>Delivery:</span> <span>$0.00</span></p>
                        <p><span>Discount:</span> <span>$45.00</span></p>
                      </div>
                      <div className="grand-total">
                        <p><span><strong>Total:</strong></span> <span>$450.00</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>Related Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src="bootstrap2/images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                  <span className="price">$139.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src="bootstrap2/images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Women's Minam Meaghan</a></h2>
                  <span className="price">$139.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src="bootstrap2/images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Men's Taja Commissioner</a></h2>
                  <span className="price">$139.00</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 mb-4 text-center">
              <div className="product-entry border">
                <a href="#" className="prod-img">
                  <img src="bootstrap2/images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                </a>
                <div className="desc">
                  <h2><a href="#">Russ Men's Sneakers</a></h2>
                  <span className="price">$139.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div class="modal-header">
            <h5 class="modal-title">Xóa hàng</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            Xóa thành công hàng trong giỏ
            </div>
          <div class="modal-footer">
            {/* <button type="button"  class="btn btn-secondary" data-dismiss="modal">Đóng</button> */}
            <button type="button" onClick={closeModal} class="btn btn-primary">Đóng</button>

          </div>
        </Modal>
      </div>
    </div>

  )
}

MainCart.propTypes = {

}

export default MainCart
