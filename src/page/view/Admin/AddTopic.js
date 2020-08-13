import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import Upload from '../Application/UpLoad'

const AddTopic = ({ onAddTp }) => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();


    const onHandleSubmitTp = (data) => {
        let file = data.image[0];
        let storageRef = Upload.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newData = {
                    ...data,
                    image: url
                }
                onAddTp(newData)
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
        history.push("/admin/topic");
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
                <h1 className="h3 mb-2 text-gray-800">Thêm bài viết mới</h1>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <div className="container">
                        <form onSubmit={handleSubmit(onHandleSubmitTp)}>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Tiêu đề bài viết</label>
                                <input name="name" ref={register({ required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} type="text" className="form-control" id="name-field" placeholder="Tên tiêu đề" />
                                {errors.name && errors.name.type === "required" && <span style={{ color: 'red' }}>Không được để trống tên tiêu đề</span>}
                                {errors.name && errors.name.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}

                            </div>
                            <div className="form-group col-xs-6">
                                <label htmlFor="name-field">Danh mục bài viết</label>
                                <input name="category" ref={register({
                                    required: true, pattern: /^[^\s]+(\s+[^\s]+)*$/
                                })} type="text" className="form-control" id="name-field" placeholder="Tên danh mục" />
                                {errors.category && errors.category.type === "required" && <span style={{ color: 'red' }}>Không được để trống tên danh mục</span>}
                                {errors.category && errors.category.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}

                            </div>
                            <div id="hidden-other-subject" className="form-group col-xs-6 hidden">
                                <label htmlFor="other-subject-field">Ảnh</label>
                                <input type="file" id="file" ref={register({ required: true })} name="image" className="form-control" />
                                {errors.image && errors.image.type === "required" && <span style={{ color: 'red' }}>Không được để trống ảnh </span>}
                            </div>
                            <div className="form-group col-xs-12">
                                <label htmlFor="body-field">Nội dung</label>
                                <textarea ref={register({ required: true, minLength: 10, maxLength: 1000, pattern: /^[^\s]+(\s+[^\s]+)*$/ })} id="body-field" name="detail" className="form-control" placeholder="Chi tiết" />
                                {errors.detail && errors.detail.type === "required" && <span style={{ color: 'red' }}>Không được để trống nội dung</span>}
                                {errors.detail && errors.detail.type === "minLength" && <span style={{ color: 'red' }}>Nội dung danh mục phải trên 10 kí tự</span>}
                                {errors.detail && errors.detail.type === "maxLength" && <span style={{ color: 'red' }}>Nội dung danh mục phải dưới 1000 kí tự</span>}
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
                        <h5 class="modal-title">Thêm bài viết</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        Bạn đã thêm thành công bài viết
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

AddTopic.propTypes = {
}

export default AddTopic
