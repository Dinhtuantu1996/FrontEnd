import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

function Bar(props) {
    return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
              {/* Sidebar - Brand */}
              <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Shop <sup>pro</sup></div>
              </Link>
              {/* Divider */}
              <hr className="sidebar-divider my-0" />
              {/* Nav Item - Dashboard */}
              <li className="nav-item active">
                <Link className="nav-link" to="/admin">
                  <i className="fas fa-fw fa-tachometer-alt" />
                  <span>Trang chủ</span></Link>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider" />
              {/* Heading */}
              <div className="sidebar-heading">
                Cấu hình
              </div>
              {/* Nav Item - Pages Collapse Menu */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <i className="fas fa-fw fa-cog" />
                  <span>Cài đặt</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Cài đặt:</h6>
                    <a className="collapse-item" href="#">Null</a>
                    <a className="collapse-item" href="#">Null</a>
                  </div>
                </div>
              </li>
              {/* Nav Item - Utilities Collapse Menu */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                  <i className="fas fa-fw fa-wrench" />
                  <span>Sửa chữa</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Sửa chữa:</h6>
                    <a className="collapse-item" href="#">Null</a>
                    <a className="collapse-item" href="#">Null</a>
                    <a className="collapse-item" href="#">Null</a>
                    <a className="collapse-item" href="#">Null</a>
                  </div>
                </div>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider" />
              {/* Heading */}
              <div className="sidebar-heading">
                Addons
              </div>
              {/* Nav Item - Pages Collapse Menu */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                  <i className="fas fa-fw fa-folder" />
                  <span>Sản phẩm</span>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Sản phẩm</h6>
                    <Link className="collapse-item" to="/admin/products">Danh sách sản phẩm</Link>
                    <Link className="collapse-item" to="/admin/add">Thêm sản phẩm</Link>
                    <a className="collapse-item" href="#">Null</a>
                    <div className="collapse-divider" />
                    <h6 className="collapse-header">Null</h6>
                    <a className="collapse-item" href="#">Null</a>
                    <a className="collapse-item" href="#">Null</a>
                  </div>
                </div>
              </li>
              {/* Nav Item - Charts */}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-fw fa-chart-area" />
                  <span>Thống kê</span></a>
              </li>
              {/* Nav Item - Tables */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-fw fa-table" />
                  <span>Cửa hàng</span></Link>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider d-none d-md-block" />
              {/* Sidebar Toggler (Sidebar) */}
              <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" />
              </div>
            </ul>
    )
}

Bar.propTypes = {

}

export default Bar

