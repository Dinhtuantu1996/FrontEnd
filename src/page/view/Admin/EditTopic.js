import React from 'react'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';

const EditTopic = ({topics, onUpdateTp }) => {
    const { id } = useParams();
    const history = useHistory();
    const { register, errors, handleSubmit } = useForm();
    const topic = topics.find(topic => topic.id === id);

    const onHandleSubmitTp = (data) => {
        const newData = {
            id: id.toString(),
            ...data
        }
        onUpdateTp(newData);
        openModal();
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
            top: '50%',
            left: '50%',
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
                            <input name="name" ref={register({ required: true,pattern: /^[^\s]+(\s+[^\s]+)*$/})} defaultValue={topic.name}  type="text" className="form-control" id="name-field" placeholder="Tên tiêu đề" />
                            {errors.name && errors.name.type === "required" && <span style={{ color: 'red' }}>Không được để trống tên tiêu đề</span>}
                            {errors.name && errors.name.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}

                        </div>
                        <div className="form-group col-xs-6">
                            <label htmlFor="name-field">Danh mục bài viết</label>
                            <input name="category" ref={register({required: true,pattern: /^[^\s]+(\s+[^\s]+)*$/})} defaultValue={topic.category}  type="text" className="form-control" id="name-field" placeholder="Tên danh mục" />
                            {errors.category && errors.category.type === "required" && <span style={{ color: 'red' }}>Không được để trống tên danh mục</span>}
                            {errors.category && errors.category.type === "pattern" && <span style={{ color: 'red' }}>Không được có khoảng trống </span>}

                        </div>
                        <div id="hidden-other-subject" className="form-group col-xs-6 hidden">
                            <label htmlFor="other-subject-field">Ảnh</label>
                            <input type="file" id="file" name="file" className="form-control" />
                        </div>
                        <div className="form-group col-xs-12">
                            <label htmlFor="body-field">Nội dung</label>
                            <textarea ref={register({ required: true, minLength: 10, maxLength: 100 , pattern: /^[^\s]+(\s+[^\s]+)*$/})} defaultValue={topic.detail}  id="body-field" name="detail" className="form-control" placeholder="Chi tiết" />
                            {errors.detail && errors.detail.type === "required" && <span style={{ color: 'red' }}>Không được để trống nội dung</span>}
                            {errors.detail && errors.detail.type === "minLength" && <span style={{ color: 'red' }}>Nội dung danh mục phải trên 10 kí tự</span>}
                            {errors.detail && errors.detail.type === "maxLength" && <span style={{ color: 'red' }}>Nội dung danh mục phải dưới 100 kí tự</span>}
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
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>x</button>
                <h4>Sửa thành công bài viết </h4 >
            </Modal>
        </div>
    </div>

    )
}

EditTopic.propTypes = {
}

export default EditTopic
