import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const Category = ({ products, category, onRemoveCg }) => {
    const onHandleRemoveCg = (id) => {
        onRemoveCg(id);
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
            <h1 className="h3 mb-2 text-gray-800">Quản lý danh mục</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <Link style={{ width: '400px' }} className="btn btn-info" to={"/admin/addcategory"} >Thêm mới</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th style={{ width: '1px' }}>STT</th>
                                    <th >Tên danh mục</th>
                                    <th >Ảnh</th>
                                    <th >Mô tả danh mục</th>
                                    <th style={{ width: '150px' }}>Số lượng hàng</th>
                                    <td style={{ width: '180px' }}> Hành động</td>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th >STT</th>
                                    <th >Tên danh mục</th>
                                    <th >Ảnh</th>
                                    <th >Mô tả danh mục</th>
                                    <th >Số lượng hàng</th>
                                    <td> Hành động</td>
                                </tr>
                            </tfoot>
                            <tbody>
                                {category.map(({ id, name, detail, amount, image }, index) => (
                                    <tr key={index}>
                                        <td style={{ backgroundColor: 'white', color: 'red' }}> {index + 1}</td>
                                        <td>{name}</td>
                                        <td><img style={{ width: '100px', height: '100px' }} src={image} /></td>
                                        <td>
                                            <details>
                                                <summary>Mở rộng</summary>
                                                <p>{detail}</p>
                                            </details>
                                        </td>
                                        <td> </td>
                                        <td><a className="btn btn-danger" onClick={() => onHandleRemoveCg(id)}>Xóa</a>
                                            <Link className="btn btn-info" to={"/admin/editcategory/" + id} >Sửa</Link></td>
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
          <h5 class="modal-title">Xóa danh mục</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          Bạn đã xóa thành công danh mục
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

Category.propTypes = {
}

export default Category
