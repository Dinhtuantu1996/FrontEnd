import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import {
    Link
} from "react-router-dom";

const MainCategory = ({ products, onAddCr }) => {
    const { id } = useParams();
    const product = products.filter(product => product.categoryid === id);

    const onHandleAddCr = (id) => {
        onAddCr(id);
    }
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><Link to="/">Home</Link></span> / <span>Category</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumbs-two">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="breadcrumbs-img" style={{ backgroundImage: 'url(../bootstrap2/images/cover-img-1.jpg)' }}>
                                <h2>Men's</h2>
                            </div>
                            <div className="menu text-center">
                                <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colorlib-product">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                            <h2>View All Products</h2>
                        </div>
                    </div>
                    <div className="row row-pb-md">
                        {product.map(({ id, name, image, price,pricesale }, index) => (
                            <div key={index} className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <img src={image} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">{name}</a></h2>
                                        <span className="price">${price}</span>
                                        <span className="price">{'Sale: $' + pricesale}</span>
                                        <Link to="/cart" className="btn btn-warning" onClick={() => onHandleAddCr(id)}>Add cart</Link>
                                        <Link to={"/detail/" + id} className="btn btn-info">Detail</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="block-27">
                                <ul>
                                    <li><a href="#"><i className="ion-ios-arrow-back" /></a></li>
                                    <li className="active"><span>1</span></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#"><i className="ion-ios-arrow-forward" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="colorlib-partner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                            <h2>Trusted Partners</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col partner-col text-center">
                            <img src="../bootstrap2/images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="../bootstrap2/images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="../bootstrap2/images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="../bootstrap2/images/brand-4.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                        <div className="col partner-col text-center">
                            <img src="../bootstrap2/images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

MainCategory.propTypes = {

}

export default MainCategory
