import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import Upload from '../Application/UpLoad'


const AddProduct = ({ onAddPd, categorys }) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();


    const onHandleSubmit = (data) => {
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = Upload.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAddPd(newData)
                openModal();
            })
        });
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
        history.push("/admin/products");
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

        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h1 className="h3 mb-2 text-gray-800">Thêm sản phẩm mới</h1>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <div className="container">
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Tên sản phẩm</label>
                                <input name="name" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} type="text" className="form-control" id="name-field" placeholder="Tên sản phẩm" />
                                {errors.name && errors.name.type === "required" && <span style={{ color: 'red' }}>Không được để trống tên sản phẩm</span>}
                                {errors.name && errors.name.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}
                            </div>
                            <div className="control-group">
                                <label className="control-label" htmlFor="basicinput">Danh mục</label>
                                <div className="controls">
                                    <select name="categoryid" ref={register()} tabIndex={1} data-placeholder="Select here.." className="form-control ">
                                        {categorys.map((category, index) => (
                                            <option key={index} value={category.id}>{category.name}</option>))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="email-field">Giá gốc</label>
                                <input name="pricesale" type="number" ref={register({ min: 1, max: 1000 })} className="form-control" id="email-field" placeholder="Giá tiền $" />
                                {errors.pricesale && errors.pricesale.type === "min" && <span style={{ color: 'red' }}>Giá phải trên $0 </span>}
                                {errors.pricesale && errors.pricesale.type === "max" && <span style={{ color: 'red' }}>Giá phải dưới $1000 </span>}
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="email-field">Giá sale</label>
                                <input name="price" type="number" ref={register({ required: true, min: 1, max: 1000 })} className="form-control" id="email-field" placeholder="Giá tiền $" />
                                {errors.price && errors.price.type === "required" && <span style={{ color: 'red' }}>Không được để trống giá tiền</span>}
                                {errors.price && errors.price.type === "min" && <span style={{ color: 'red' }}>Giá phải trên $0 </span>}
                                {errors.price && errors.price.type === "max" && <span style={{ color: 'red' }}>Giá phải dưới $1000 </span>}
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Màu sản phẩm</label>
                                <input name="color" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} type="text" className="form-control" id="name-field" placeholder="Màu sản phẩm" />
                                {errors.color && errors.color.type === "required" && <span style={{ color: 'red' }}>Không được để trống màu sản phẩm</span>}
                                {errors.color && errors.color.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                            </div>
                            <div id="hidden-other-subject" className="form-group col-xs-6 hidden">
                                <label htmlFor="other-subject-field">Ảnh</label>
                                <input type="file" id="file" name="image"  ref={register} className="form-control" />
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Mô tả</label>
                                <input name="detailmin" ref={register({ pattern: /^[^\s]+(\s+[^\s]+)*$/ })} type="text" className="form-control" id="name-field" placeholder="Mô tả" />
                                {errors.detailmin && errors.detailmin.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}

                            </div>
                            <div className="form-group col-xs-12">
                                <label htmlFor="body-field">Chi tiết sản phẩm</label>
                                <textarea ref={register({ required: true, minLength: 10, maxLength: 500, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="body-field" name="detailmax" className="form-control" placeholder="Chi tiết" />
                                {errors.detailmax && errors.detailmax.type === "required" && <span style={{ color: 'red' }}>Không được để trống chi tiết</span>}
                                {errors.detailmax && errors.detailmax.type === "minLength" && <span style={{ color: 'red' }}>Chi tiết phải trên 10 kí tự</span>}
                                {errors.detailmax && errors.detailmax.type === "maxLength" && <span style={{ color: 'red' }}>Chi tiết phải dưới 500 kí tự</span>}
                                {errors.detailmax && errors.detailmax.type === "maxLength" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                            </div>
                            <div className="control-group">
                                <label className="control-label">Tình trạng</label>
                                <div className="controls">
                                    <label className="radio">
                                        <p style={{ padding: '0px 100px 0px 0px' }}>
                                           <input type="radio" name="status" id="optionsRadios1" ref={register}  defaultChecked />
                                         Còn hàng</p>
                                     </label>
                                    <label className="radio">
                                       <p> <input type="radio" name="status" id="optionsRadios2" ref={register}    />
                                          Hết hàng</p>
                                   </label>
                                </div>
                            </div>

                            <div className="form-group col-xs-12">
                                <button type="submit" className="btn btn-primary btn-lg btn-block">Lưu</button>
                            </div>
                        </form>
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
                    <h4>Thêm thành công sản phẩm </h4 >
                </Modal>
            </div>
        </div>

    )
}

AddProduct.propTypes = {
}

export default AddProduct
