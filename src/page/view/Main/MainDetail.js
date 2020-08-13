import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import {
  Link
} from "react-router-dom";

const MainDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(product => product.id === id);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (


    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="bread"><span><Link to="/">Home</Link></span> / <span><Link to="/shopping">Shopping</Link></span> / <span>Detail</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row row-pb-lg product-detail-wrap">
            <div className="col-sm-8">
              <img className="img-fluid" src={product.image} />
            </div>
            <div className="col-sm-4">
              <div className="product-desc">
                <h3>{product.name}</h3>
                <p className="price">
                  <span>$68.00</span>
                  <span className="rate">
                    <i className="icon-star-full" />
                    <i className="icon-star-full" />
                    <i className="icon-star-full" />
                    <i className="icon-star-full" />
                    <i className="icon-star-full" />
                (100 Rating)
              </span>
                </p>
                <p>{product.detailmin}</p>
                <div className="size-wrap">
                  <div className="block-26 mb-2">
                    <h4>Màu sắc: {product.color}</h4>
                    <h4>Kích cỡ: </h4>
                    <ul>
                      <li><a href="#">7</a></li>
                      <li><a href="#">7.5</a></li>
                      <li><a href="#">8</a></li>
                      <li><a href="#">8.5</a></li>
                      <li><a href="#">9</a></li>
                      <li><a href="#">9.5</a></li>
                      <li><a href="#">10</a></li>
                      <li><a href="#">10.5</a></li>
                      <li><a href="#">11</a></li>
                      <li><a href="#">11.5</a></li>
                      <li><a href="#">12</a></li>
                      <li><a href="#">12.5</a></li>
                      <li><a href="#">13</a></li>
                      <li><a href="#">13.5</a></li>
                      <li><a href="#">14</a></li>
                    </ul>
                  </div>
                  <div className="block-26 mb-4">
                    <h4>Tình trạng</h4>
                    <ul>
                      <li><a href="#"> {product.status ? 'Còn hàng' : 'Hết hàng'}</a></li>
                    </ul>
                  </div>
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-btn">
                    <button type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                      <i className="icon-minus2" />
                    </button>
                  </span>
                  <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} min={1} max={100} />
                  <span className="input-group-btn ml-1">
                    <button type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                      <i className="icon-plus2" />
                    </button>
                  </span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart"><a href="cart.html" className="btn btn-primary btn-addtocart"><i className="icon-shopping-cart" /> Add to Cart</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-12 pills">
                  <div className="bd-example bd-example-tabs">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-description" aria-expanded="true">Mô tả</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-manufacturer-tab" data-toggle="pill" href="#pills-manufacturer" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Thông số kĩ thuật</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-review" aria-expanded="true">Bình luận</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div className="tab-pane border fade show active" id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
                        <p>{product.detailmin}</p>
                      </div>
                      <div className="tab-pane border fade" id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">
                        <p>{product.detailmax}</p>
                      </div>
                      <div className="tab-pane border fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
                        <div className="row">
                          <div className="col-md-8">
                            <h3 className="head">23 Reviews</h3>
                            <div className="review">
                              <div className="user-img" style={{ backgroundImage: 'url(../bootstrap2/images/person1.jpg)' }} />
                              <div className="desc">
                                <h4>
                                  <span className="text-left">Jacob Webb</span>
                                  <span className="text-right">14 March 2018</span>
                                </h4>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-half" />
                                    <i className="icon-star-empty" />
                                  </span>
                                  <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                                </p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                              </div>
                            </div>
                            <div className="review">
                              <div className="user-img" style={{ backgroundImage: 'url(../bootstrap2/images/person2.jpg)' }} />
                              <div className="desc">
                                <h4>
                                  <span className="text-left">Jacob Webb</span>
                                  <span className="text-right">14 March 2018</span>
                                </h4>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-half" />
                                    <i className="icon-star-empty" />
                                  </span>
                                  <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                                </p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                              </div>
                            </div>
                            <div className="review">
                              <div className="user-img" style={{ backgroundImage: 'url(../bootstrap2/images/person3.jpg)' }} />
                              <div className="desc">
                                <h4>
                                  <span className="text-left">Jacob Webb</span>
                                  <span className="text-right">14 March 2018</span>
                                </h4>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-half" />
                                    <i className="icon-star-empty" />
                                  </span>
                                  <span className="text-right"><a href="#" className="reply"><i className="icon-reply" /></a></span>
                                </p>
                                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="rating-wrap">
                              <h3 className="head">Give a Review</h3>
                              <div className="wrap">
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                (98%)
                              </span>
                                  <span>20 Reviews</span>
                                </p>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-empty" />
                                (85%)
                              </span>
                                  <span>10 Reviews</span>
                                </p>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-empty" />
                                    <i className="icon-star-empty" />
                                (70%)
                              </span>
                                  <span>5 Reviews</span>
                                </p>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-full" />
                                    <i className="icon-star-empty" />
                                    <i className="icon-star-empty" />
                                    <i className="icon-star-empty" />
                                (10%)
                              </span>
                                  <span>0 Reviews</span>
                                </p>
                                <p className="star">
                                  <span>
                                    <i className="icon-star-full" />
                                    <i className="icon-star-empty" />
                                    <i className="icon-star-empty" />
                                    <i className="icon-star-empty" />
                                    <i className="icon-star-empty" />
                                (0%)
                              </span>
                                  <span>0 Reviews</span>
                                </p>
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
        </div>
      </div>
    </div>

  )
}

MainDetail.propTypes = {

}

export default MainDetail
