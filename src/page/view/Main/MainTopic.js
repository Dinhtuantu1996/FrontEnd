import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

const MainTopic = ({ topics }) => {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><Link to="/">Home</Link></span> / <span>Blog</span></p>
                        </div>
                    </div>
                </div>
            </div>
            {topics.map(({ id, name, image, detail, date }, index) => (
                <div key={index} className="colorlib-about">
                    <div className="container">
                        <div className="row row-pb-lg">
                            <div className="col-sm-6 mb-3">
                                <div className="video colorlib-video" style={{ backgroundImage: `url(${image})` }} >
                                    <a href="https://vimeo.com/channels/staffpicks/93951774" className="popup-vimeo"><i className="icon-play3" /></a>
                                    <div className="overlay" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="about-wrap">
                                    <h2>{name}</h2>
                                    <span class="text-left"></span><span class="text-right">Date Submitted: {date}</span>
                                    <p></p>
                                    <p>{detail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}

MainTopic.propTypes = {

}

export default MainTopic
