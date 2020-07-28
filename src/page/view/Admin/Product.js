import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Product = ({ products, onRemove }) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  }

  return (

    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Tables</h1>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <Link style={{ width: '400px' }} className="btn btn-info" to={"/admin/add"} >Thêm mới</Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
                <tr>
                  <th style={{ width: '1px' }}>STT</th>
                  <th style={{ width: '130px' }}>Tên sản phẩm</th>
                  <th style={{ width: '100px' }}>Ảnh</th>
                  <th style={{ width: '50px' }}>Màu</th>
                  <th style={{ width: '100px' }}>Giá thành</th>
                  <th style={{ width: '300px' }}>Thông số</th>
                  <th style={{ width: '110px' }}>Hành động</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh</th>
                  <th>Màu</th>
                  <th>Giá thành</th>
                  <th>Thông số</th>
                  <th>Hành động</th>
                </tr>
              </tfoot>
              <tbody>
                {products.map(({ id, name, image, price, detail, color }, index) => (
                  <tr key={index}>
                    <td style={{ backgroundColor: 'white', color: 'red' }}> {index + 1}</td>
                    <td>{name}</td>
                    <td><img style={{ width: '100px', height: '100px' }} src={image} /></td>
                    <td>{color}</td>
                    <td className="center"> ${price}</td>
                    <td>
                      <details>
                        <summary>Mở rộng</summary>
                        <p>{detail}</p>
                      </details>
                    </td>
                    <td><a className="btn btn-danger" onClick={() => onHandleRemove(id)}>Xóa</a>
                      <Link className="btn btn-info" to={"/admin/product&" + id} >Chi Tiết</Link></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  )
}

Product.propTypes = {

}

export default Product
