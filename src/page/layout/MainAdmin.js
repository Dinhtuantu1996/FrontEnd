import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../../components/Admin/Footer'
import Bar from '../../components/Admin/Bar'
import Header from '../../components/Admin/Header'


export default ({ children }) => {
    return (
        <div id="wrapper">
            <Bar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}