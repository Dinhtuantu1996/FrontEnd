import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';

const DetailProduct = ({ products }) => {
    const { id } = useParams();
    const product = products.find(product => product.id === id);
    return (
        <div>
            {product.name}<br />
            {product.price}<br />
            {product.image}<br />
        </div>
    )
}

DetailProduct.propTypes = {

}

export default DetailProduct
