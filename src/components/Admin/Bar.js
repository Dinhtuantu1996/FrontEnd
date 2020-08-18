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
                <div className="sidebar-brand-text mx-3">Shop <sup>Shoes</sup></div>
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
                Menu 1
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
                    <a className="collapse-item" href="#"></a>
                    <a className="collapse-item" href="#"></a>
                  </div>
                </div>
              </li>
              {/* Nav Item - Utilities Collapse Menu */}
              <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                  <i className="fas fa-fw fa-table" />
                  <span>Bài viết</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Bài viết:</h6>
                    <Link className="collapse-item" to="/admin/topic">Quản lý bài viết</Link>
                    <Link className="collapse-item" to="/admin/addtopic">Thêm bài viết</Link>
                  </div>
                </div>
              </li>
              {/* Divider */}
              <hr className="sidebar-divider" />
              {/* Heading */}
              <div className="sidebar-heading">
                Menu 2
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
                    <Link className="collapse-item" to="/admin/products">Quản lý sản phẩm</Link>
                    <Link className="collapse-item" to="/admin/add">Thêm sản phẩm</Link>
                    <div className="collapse-divider" />
                    <h6 className="collapse-header">Danh mục</h6>
                    <Link className="collapse-item" to="/admin/category">Quản lý danh mục</Link>
                    <Link className="collapse-item" to="/admin/addcategory">Thêm danh mục</Link>
                  </div>
                </div>
              </li>
              {/* Nav Item - Charts */}
              <li className="nav-item">
                <Link className="nav-link" to="/admin/order">
                  <i className="fas fa-fw fa-chart-area" />
                  <span>Quản lý đặt hàng</span></Link>
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

