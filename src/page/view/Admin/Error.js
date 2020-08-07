import React from 'react'
import PropTypes from 'prop-types'

const Error = props => {
    return (
        <div className="container-fluid">
        {/* 404 Error Text */}
        <div className="text-center">
          <div className="error mx-auto" data-text={404}>404</div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <p className="text-gray-500 mb-0">Không tìm thấy trang yêu cầu...</p>
          <a href="/admin">← Trang chủ</a>
        </div>
      </div>
      
    )
}

Error.propTypes = {

}

export default Error
