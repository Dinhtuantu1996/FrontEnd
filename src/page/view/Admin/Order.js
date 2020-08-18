import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Order = ({ checkouts }) => {

    //   const onHandleRemovePd = (id) => {
    //     onRemovePd(id);
    //     openModal();
    //   }


console.log(checkouts)


    return (

        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr>
                                    <th style={{ width: '1px' }}>STT</th>
                                    <th style={{ width: '150px' }}>Họ và tên</th>
                                    <th style={{ width: '100px' }}>Quốc gia</th>
                                    <th style={{ width: '270px' }}>Địa chỉ</th>
                                    <th style={{ width: '100px' }}>Thành phố</th>
                                    <th style={{ width: '100px' }}>Mã bưu điện</th>
                                    <th style={{ width: '100px' }}>Email</th>
                                    <th style={{ width: '50px' }}>Phone</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th >STT</th>
                                    <th>Họ và tên</th>
                                    <th >Quốc gia</th>
                                    <th >Địa chỉ</th>
                                    <th>Thành phố</th>
                                    <th >Mã bưu điện</th>
                                    <th >Email</th>
                                    <th >Phone</th>
                                    <th ></th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {checkouts.map(({ id, country, fname, lname, address, state, zip, email, phone }, index) => (
                                    <tr key={index}>
                                        <td style={{ backgroundColor: 'white', color: 'red' }}> {index + 1}</td>
                                        <td>{fname + " " + lname}</td>
                                        <td>{country}</td>
                                        <td>{address}</td>
                                        <td>{state}</td>
                                        <td>{zip}</td>
                                        <td>{email}</td>
                                        <td>{phone}</td>
                                        <td>
                                            <Link className="btn btn-info" to={"/admin/detailcheckout/" + id} >Chi Tiết</Link></td>
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>


    )
}

Order.propTypes = {
}

export default Order
