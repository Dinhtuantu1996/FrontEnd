import React from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Modal from 'react-modal';
import Upload from '../Application/UpLoad'



const EditProduct = ({ products, categorys, onUpdatePd }) => {
    const { id } = useParams();
    const history = useHistory();
    const { register, errors, handleSubmit } = useForm();
    const product = products.find(product => product.id === id);

    const onHandleSubmit = (data) => {
        let file = data.image[0];
        let storageRef = Upload.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newData = {
                    ...data, id: id.toString(),
                    image: url
                }
                onUpdatePd(newData)
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
        history.push('/admin/products');
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
        <div className="card shadow mb-4">
            <div className="card-header py-3">
    <h1 className="h3 mb-2 text-gray-800">Sửa sản phẩm ID: {product.id}</h1>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <div className="container">
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Tên sản phẩm</label>
                                <input name="name" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} defaultValue={product.name} type="text" className="form-control" id="name-field" placeholder="Tên sản phẩm" />
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
                                <input name="price" type="number" ref={register({ min: 1, max: 1000 })} defaultValue={product.price} className="form-control" id="email-field" placeholder="Giá tiền $" />
                                {errors.price && errors.price.type === "min" && <span style={{ color: 'red' }}>Giá phải trên $0 </span>}
                                {errors.price && errors.price.type === "max" && <span style={{ color: 'red' }}>Giá phải dưới $1000 </span>}
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="email-field">Giá sale</label>
                                <input name="pricesale" type="number" ref={register({  min: 1, max: 1000 })} defaultValue={product.pricesale} className="form-control" id="email-field" placeholder="Giá tiền $" />
                              
                                {errors.pricesale && errors.pricesale.type === "min" && <span style={{ color: 'red' }}>Giá phải trên $0 </span>}
                                {errors.pricesale && errors.pricesale.type === "max" && <span style={{ color: 'red' }}>Giá phải dưới $1000 </span>}
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Màu sản phẩm</label>
                                <input name="color" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} type="text" defaultValue={product.color} className="form-control" id="name-field" placeholder="Màu sản phẩm" />
                                {errors.color && errors.color.type === "required" && <span style={{ color: 'red' }}>Không được để trống màu sản phẩm</span>}
                                {errors.color && errors.color.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                            </div>
                            <div id="hidden-other-subject" className="form-group col-xs-6 hidden">
                                <label htmlFor="other-subject-field">Ảnh</label>
                                <input type="file" id="file" name="image" ref={register({ required: true })} className="form-control" />
                                {errors.image && errors.image.type === "required" && <span style={{ color: 'red' }}>Không được để trống ảnh </span>}
                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Mô tả</label>
                                <input name="detailmin" ref={register({ pattern: /^[^\s]+(\s+[^\s]+)*$/ })} defaultValue={product.detailmin} type="text" className="form-control" id="name-field" placeholder="Mô tả" />
                                {errors.detailmin && errors.detailmin.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}

                            </div>
                            <div className="form-group col-xs-12">
                                <label htmlFor="body-field">Chi tiết sản phẩm</label>
                                <textarea ref={register({ required: true, minLength: 10, maxLength: 2000, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} defaultValue={product.detailmax} id="body-field" name="detailmax" className="form-control" placeholder="Chi tiết" />
                                {errors.detailmax && errors.detailmax.type === "required" && <span style={{ color: 'red' }}>Không được để trống chi tiết</span>}
                                {errors.detailmax && errors.detailmax.type === "minLength" && <span style={{ color: 'red' }}>Chi tiết phải trên 10 kí tự</span>}
                                {errors.detailmax && errors.detailmax.type === "maxLength" && <span style={{ color: 'red' }}>Chi tiết phải dưới 2000 kí tự</span>}
                                {errors.detailmax && errors.detailmax.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống</span>}
                            </div>
                            <div className="control-group">
                                <label className="control-label">Tình trạng</label>
                                <div className="controls">
                                    <label className="radio">
                                        <p style={{ padding: '0px 100px 0px 0px' }}>
                                            <input type="radio" name="status" id="optionsRadios1" ref={register} value= {'Còn hàng'}  defaultChecked />
                                         Còn hàng</p>
                                    </label>
                                    <label className="radio">
                                        <p> <input type="radio" name="status" id="optionsRadios2"  />
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
                >
                    <div class="modal-header">
                        <h5 class="modal-title">Sửa sản phẩm</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        Bạn đã sửa thành công sản phẩm
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

EditProduct.propTypes = {
}

export default EditProduct
