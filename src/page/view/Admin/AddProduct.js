import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

const AddProduct = ({ onAdd }) => {
    const history = useHistory();
    const [valueInput, setValueInput] = useState({})
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setValueInput({
            ...valueInput,
            [name]: e.target.value
        });
    }

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onAdd(valueInput);
        history.push("/admin/products");
    }
    return (

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Thêm sản phẩm mới</h1>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <div className="container">
                        <form onSubmit={onHandleSubmit}>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Tên sản phẩm</label>
                                <input onChange={onHandleChange} name="name" type="text" className="form-control" id="name-field" placeholder="Tên sản phẩm"  />
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="email-field">Giá thành</label>
                                <input onChange={onHandleChange} name="price" type="number" min="0" max="1000" step="10" className="form-control" id="email-field" placeholder="Giá tiền $"  />
                            </div>
                            <div id="subject-select" className="form-group col-xs-12">
                                <label htmlFor="subject-field">Màu sắc</label>
                                <select onChange={onHandleChange} className="form-control" name="color" onchange="changeSubject(event)" >
                                    <option value="Đỏ" style={{background:"red"}}>Đỏ</option>
                                    <option value="Đen" style={{background:"black"}}>Đen</option>
                                    <option value="Xanh dương" style={{background:"blue"}}>Xanh dương</option>
                                    <option value="Xanh lục" style={{background:"green"}}>Xanh lục</option>
                                    <option value="Vàng" style={{background:"red"}}>Vàng</option>
                                    <option value="Hồng" style={{background:"pink"}}>Hồng</option>
                                    <option value="Trắng" style={{background:"white"}}>Trắng</option>
                                </select>
                            </div>
                            <div id="hidden-other-subject" className="form-group col-xs-6 hidden">
                                <label htmlFor="other-subject-field">Ảnh</label>
                                <input type="file" id="file" name="file" className="form-control" />
                            </div>
                            <div className="form-group col-xs-12">
                                <label htmlFor="body-field">Chi tiết sản phẩm</label>
                                <textarea onChange={onHandleChange} id="body-field" name="detail" className="form-control" placeholder="Chi tiết"  />
                            </div>
                            <div  className="form-group col-xs-12">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Lưu</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>

    )
}

AddProduct.propTypes = {

}

export default AddProduct
