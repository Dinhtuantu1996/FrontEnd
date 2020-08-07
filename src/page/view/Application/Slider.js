import React from 'react'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';



export default () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoCapitalize={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide > <div style={{ backgroundImage: 'url(bootstrap2/images/img_bg_3.jpg)' }}>
                <div className="overlay" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 offset-sm-3 text-center slider-text">
                            <div className="slider-text-inner">
                                <div className="desc">
                                    <h1 className="head-1">New</h1>
                                    <h2 className="head-2">Arrival</h2>
                                    <h2 className="head-3">up to <strong className="font-weight-bold">30%</strong> off</h2>
                                    <p className="category"><span>New stylish shoes for men</span></p>
                                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>  <div style={{backgroundImage: 'url(bootstrap2/images/img_bg_2.jpg)'}}>
          <div className="overlay" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 offset-sm-3 text-center slider-text">
                <div className="slider-text-inner">
                  <div className="desc">
                    <h1 className="head-1">Huge</h1>
                    <h2 className="head-2">Sale</h2>
                    <h2 className="head-3"><strong className="font-weight-bold">50%</strong> Off</h2>
                    <p className="category"><span>Big sale sandals</span></p>
                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </SwiperSlide>
            <SwiperSlide>
            <div style={{backgroundImage: 'url(bootstrap2/images/img_bg_1.jpg)'}}>
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
            </SwiperSlide>

        </Swiper>
    );
};