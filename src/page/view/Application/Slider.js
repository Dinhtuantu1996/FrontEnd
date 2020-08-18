import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel'





export default () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  interval={2000} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div style={{backgroundImage: 'url(bootstrap2/images/img_bg_1.jpg)'}} >
          <div className="overlay" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 offset-sm-3 text-center slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h1 className="head-1">Men's</h1>
                    <h2 className="head-2">Shoes</h2>
                    <h2 className="head-3">Collection</h2>
                    <p className="category"><span>New trending shoes</span></p>
                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{backgroundImage: 'url(bootstrap2/images/img_bg_2.jpg)'}}>
          <div className="overlay" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 offset-sm-3 text-center slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h1 className="head-1">Men's</h1>
                    <h2 className="head-2">Shoes</h2>
                    <h2 className="head-3">Collection</h2>
                    <p className="category"><span>New trending shoes</span></p>
                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{backgroundImage: 'url(bootstrap2/images/img_bg_3.jpg)'}}>
          <div className="overlay" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 offset-sm-3 text-center slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h1 className="head-1">Men's</h1>
                    <h2 className="head-2">Shoes</h2>
                    <h2 className="head-3">Collection</h2>
                    <p className="category"><span>New trending shoes</span></p>
                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

