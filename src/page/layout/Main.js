import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../components/Main/Footer'
import Header from '../../components/Main/Header'
import Slider from '../view/Application/Slider'





export default ({ children }) => {
    return (
        <div>
            <div id="page">
                <Header />
                <div>
                    {children}
                </div>
                <Slider />
                <Footer />
            </div>
            <div class="gototop js-top">
                <a href="#" class="js-gotop"><i class="ion-ios-arrow-up"></i></a>
            </div>
        </div>
    )
}