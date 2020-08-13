import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

const MainCategory = ({ category }) => {

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
              <div className="breadcrumbs-img" style={{ backgroundImage: 'url(bootstrap2/images/cover-img-1.jpg)' }}>
                <h2>Category</h2>
              </div>
              <div className="menu text-center">
                <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>CATEGORY</h2>
            </div>
          </div> 
      <div className="colorlib-featured">
        <div className="container">
          <div className="row">
            {category.map(({ id, name, image, detail }, index) => (
              <div className="col-sm-4 text-center" key={index}>
                <div className="featured">
                  <div className="featured-img featured-img-2" style= {{ backgroundImage:  `url(${image})` }}  >
                    <h2>{name}</h2>
                    <p><Link to={"/category/" + id} className="btn btn-primary btn-lg">Shop Now</Link></p>
                    <h4  style={{color:"white"}}>{detail}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="colorlib-partner">
        <div className="container">
          
          <div className="row">
            <div className="col partner-col text-center">
              <img src="bootstrap2/images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="bootstrap2/images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="bootstrap2/images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="bootstrap2/images/brand-4.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
            </div>
            <div className="col partner-col text-center">
              <img src="bootstrap2/images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
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
