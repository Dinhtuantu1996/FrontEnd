import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import Upload from '../Application/UpLoad'

const AddCategory = ({ onAddCg }) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();


    const onHandleSubmitCg = (data) => {
        let file = data.image[0];
        let storageRef = Upload.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newData = {
                    ...data,
                    image: url
                }
                onAddCg(newData)
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
        history.push("/admin/category");
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
                <h1 className="h3 mb-2 text-gray-800">Thêm danh mục mới</h1>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <div className="container">
                        <form onSubmit={handleSubmit(onHandleSubmitCg)}>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Tên danh mục</label>
                                <input name="name" ref={register({
                                    required: true,
                                    pattern: /^[^\s]+(\s+[^\s]+)*$/
                                })} type="text" className="form-control" id="name-field" placeholder="Tên danh mục" />
                                {errors.name && errors.name.type === "required" && <span style={{ color: 'red' }}>Không được để trống tên danh mục</span>}
                                {errors.name && errors.name.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}

                            </div>
                            <div id="hidden-other-subject" className="form-group col-xs-6 hidden">
                                <label htmlFor="other-subject-field">Ảnh</label>
                                <input type="file" id="file" ref={register({ required: true })} name="image" className="form-control" />
                                {errors.image && errors.image.type === "required" && <span style={{ color: 'red' }}>Không được để trống ảnh </span>}
                            </div>
                            <div className="form-group col-xs-12">
                                <label htmlFor="body-field">Mô tả danh mục</label>
                                <textarea ref={register({ required: true, minLength: 10, maxLength: 100, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="body-field" name="detail" className="form-control" placeholder="Chi tiết" />
                                {errors.detail && errors.detail.type === "required" && <span style={{ color: 'red' }}>Không được để trống chi tiết</span>}
                                {errors.detail && errors.detail.type === "minLength" && <span style={{ color: 'red' }}>Mô tả danh mục phải trên 10 kí tự</span>}
                                {errors.detail && errors.detail.type === "maxLength" && <span style={{ color: 'red' }}>Mô tả danh mục phải dưới 100 kí tự</span>}
                                {errors.detail && errors.detail.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}
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
                        <h5 class="modal-title">Thêm danh mục</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        Bạn đã thêm công danh mục
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

AddCategory.propTypes = {
}

export default AddCategory
