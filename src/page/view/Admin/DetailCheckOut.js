import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import {
    Link
} from "react-router-dom";

const DetailCheckOut = ({detailcheckouts}) => {
    const { id } = useParams();
    const detailcheckout = detailcheckouts.filter(dt => dt.checkoutid === id);

    return (
        <div className="colorlib-product">
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                    <h2>Đơn hàng đã đặt</h2>
                </div>
            </div>
            <div className="row row-pb-md">
                {detailcheckout.map(({ productid, name, image,amout }, index) => (
                    <div key={index} className="col-md-3 col-lg-3 mb-4 text-center">
                        <div className="product-entry border">
                            <a href="#" className="prod-img">
                                <img src={image} className="img-fluid" alt="Free html5 bootstrap 4 template" />
                            </a>
                            <div className="desc">
                                <h2><a href="#">{name}</a></h2>
                                <span className="price">Số lượng: {amout}</span>
                                <Link to={"/admin/detailproduct/" + productid} className="btn btn-info">Detail</Link>
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
    )
}

DetailCheckOut.propTypes = {

}

export default DetailCheckOut
