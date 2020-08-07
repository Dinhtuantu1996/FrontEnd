import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

const Category = ({ category, onRemoveCg }) => {
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
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
        }
    };


    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
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
                                    <th >Mô tả danh mục</th>
                                    <th style={{ width: '150px' }}>Số lượng hàng</th>
                                    <td style={{ width: '180px' }}> Hành động</td>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th >STT</th>
                                    <th >Tên danh mục</th>
                                    <th >Mô tả danh mục</th>
                                    <th >Số lượng hàng</th>
                                    <td> Hành động</td>
                                </tr>
                            </tfoot>
                            <tbody>
                                {category.map(({ id, name, detail, amount }, index) => (
                                    <tr key={index}>
                                        <td style={{ backgroundColor: 'white', color: 'red' }}> {index + 1}</td>
                                        <td>{name}</td>
                                        <td>
                                            <details>
                                                <summary>Mở rộng</summary>
                                                <p>{detail}</p>
                                            </details>
                                        </td>
                                        <td>{amount}</td>
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
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>x</button>
                    <h4>Xóa thành công danh mục </h4 >
                </Modal>
            </div>
        </div>


    )
}

Category.propTypes = {
}

export default Category
