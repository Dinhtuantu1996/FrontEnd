import React from 'react'
import PropTypes from 'prop-types'

import {
  Link
} from "react-router-dom";
import Map from '../Application/Map';

const MainContact = props => {
  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="bread"><span><Link to="/">Home</Link></span> / <span>Contact</span></p>
            </div>
          </div>
        </div>
      </div>
      <div id="colorlib-contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h3>Contact Information</h3>
              <div className="row contact-info-wrap">
                <div className="col-md-3">
                  <p><span><i className="icon-location" /></span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</p>
                </div>
                <div className="col-md-3">
                  <p><span><i className="icon-phone3" /></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                </div>
                <div className="col-md-3">
                  <p><span><i className="icon-paperplane" /></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                </div>
                <div className="col-md-3">
                  <p><span><i className="icon-globe" /></span> <a href="#">yoursite.com</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="contact-wrap">
                <h3>Get In Touch</h3>
                <form action="#" className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" placeholder="Your email address" />
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" className="form-control" placeholder="Your subject of this message" />
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols={30} rows={10} className="form-control" placeholder="Say something about us" defaultValue={""} />
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

MainContact.propTypes = {

}

export default MainContact
