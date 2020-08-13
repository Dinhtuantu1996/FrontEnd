import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const Product = ({ category, products, onRemovePd }) => {

  const onHandleRemovePd = (id) => {
    onRemovePd(id);
    openModal();
  }


  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '30%',
      left: '40%',
      right: 'auto',
      bottom: 'auto',
    }
  };


  return (

    <div className="container-fluid">
      <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
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
                  <th style={{ width: '150px' }}>Tên sản phẩm</th>
                  <th >Danh mục</th>
                  <th style={{ width: '100px' }}>Ảnh</th>
                  <th style={{ width: '50px' }}>Màu</th>
                  <th style={{ width: '100px' }}>Giá gốc</th>
                  <th style={{ width: '100px' }}>Giá sale</th>
                  <th style={{ width: '100px' }}>tình trạng</th>
                  <th style={{ width: '270px' }}>Hành động</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th >Danh mục</th>
                  <th>Ảnh</th>
                  <th>Màu</th>
                  <th>Giá gốc</th>
                  <th>Giá sale</th>
                  <th>Tình trạng</th>
                  <th>Hành động</th>
                </tr>
              </tfoot>
              <tbody>
                {products.map(({ id, categoryid, name, image, price, pricesale, color, status }, index) => (
                  <tr key={index}>
                    <td style={{ backgroundColor: 'white', color: 'red' }}> {index + 1}</td>
                    <td>{name}</td>
                    <td>
                      {category.map((id) => {
                        if (categoryid == id.id) {
                            return id.name
                        }
                      })}
                    </td>
                    <td><img style={{ width: '100px', height: '100px' }} src={image} /></td>
                    <td>{color}</td>
                    <td className="center"> ${price}</td>
                    <td className="center"> ${pricesale}</td>
                    <td className="center"> {status ? 'Còn hàng' : 'Hết hàng'} </td>
                    <td><a className="btn btn-danger" onClick={() => onHandleRemovePd(id)}>Xóa</a>
                      <Link className="btn btn-info" to={"/admin/edit/" + id} >Sửa</Link>
                      <Link className="btn btn-info" to={"/admin/detailproduct/" + id} >Chi Tiết</Link></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div class="modal-header">
            <h5 class="modal-title">Xóa sản phẩm</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            Bạn đã xóa thành công sản phẩm
            </div>
          <div class="modal-footer">
            {/* <button type="button"  class="btn btn-secondary" data-dismiss="modal">Đóng</button> */}
            <button type="button" onClick={closeModal} class="btn btn-primary">Đóng</button>

          </div>
        </Modal>
      </div>
    </div>


  )
}

Product.propTypes = {
}

export default Product
