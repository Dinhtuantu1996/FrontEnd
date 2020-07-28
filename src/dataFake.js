import React from 'react'
import PropTypes from 'prop-types'

const dataFake = props => {
    return ([
        {
          "id": "1",
          "name": "Intelligent Wooden Shirt",
          "image": "../bootstrap2/images/item-1.jpg",
          "price": "407.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        },
        {
          "id": "2",
          "name": "Small Metal Table",
          "image": "../bootstrap2/images/item-2.jpg",
          "price": "39.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "3",
          "name": "Unbranded Cotton Sausages",
          "image": "../bootstrap2/images/item-3.jpg",
          "price": "922.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "4",
          "name": "Sleek Frozen Chips",
          "image": "../bootstrap2/images/item-4.jpg",
          "price": "697.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "5",
          "name": "Ergonomic Steel Shirt",
          "image": "../bootstrap2/images/item-5.jpg",
          "price": "498.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "6",
          "name": "Intelligent Concrete Bacon",
          "image": "../bootstrap2/images/item-6.jpg",
          "price": "461.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "7",
          "name": "Handcrafted Concrete Hat",
          "image": "../bootstrap2/images/item-7.jpg",
          "price": "580.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "8",
          "name": "Incredible Cotton Tuna",
          "image": "../bootstrap2/images/item-8.jpg",
          "price": "57.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "9",
          "name": "Generic Plastic Tuna",
          "image": "../bootstrap2/images/item-9.jpg",
          "price": "836.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "10",
          "name": "Generic Plastic Tuna",
          "image": "../bootstrap2/images/item-10.jpg",
          "price": "836.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "11",
          "name": "Generic Plastic Tuna",
          "image": "../bootstrap2/images/item-11.jpg",
          "price": "836.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "12",
          "name": "Generic Plastic Tuna",
          "image": "../bootstrap2/images/item-12.jpg",
          "price": "836.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "13",
          "name": "Generic Plastic Tuna",
          "image": "../bootstrap2/images/item-13.jpg",
          "price": "836.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "14",
          "name": "Generic Plastic Tuna",
          "image": "../bootstrap2/images/item-14.jpg",
          "price": "836.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        },
        {
          "id": "15",
          "name": "Generic Plastic Tuna",
          "image": "../bootstrap2/images/item-15.jpg",
          "price": "836.00",
          "color": "Xanh",
          "detail": "Trọng lượng: 310g Chênh lệch độ cao đế giữa: 10 mm (gót giày 22 mm / mũi giày 12 mm) Công nghệ SUMMER.RDY thoáng khí Màu sản phẩm: Cloud White / Core Black / Signal Pink  Mã sản phẩm: FW9771"
        
        }
      ]
    )
}

dataFake.propTypes = {

}

export default dataFake
