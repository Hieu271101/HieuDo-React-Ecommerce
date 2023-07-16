import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@chakra-ui/react'
import Gallery from './components/Gallery'
import ProductList from '../Home/components/ProductList'
import InfoDetailProduct from './components/InfoDetailProduct'

Product.propTypes = {}

function Product(props) {
  const suggestedProducts = [
    {
      id: 1,
      category: 1,
      name: 'Product 1',
      price: 100000,
      isFeatured: true,
      size: 'M',
      color: 'red',
      images: [
        {
          id: 1,
          url:
            'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1568455300105-1X8EOW3FLT27EN19OO30/chup-anh-san-pham-shynh2019-4.jpg',
        },
      ],
    },
    {
      id: 2,
      category: 2,
      name: 'Product 2',
      price: 100000,
      isFeatured: true,
      size: 'M',
      color: 'red',
      images: [
        {
          id: 1,
          url:
            'https://tuonglamphotos.com/wp-content/uploads/2021/07/dich-vu-chup-anh-san-pham-tuonglamphotos-6-1024x683.jpg',
        },
      ],
    },
  ]
  const product = {
    id: 1,
    category: 1,
    name: 'Product 1',
    price: 100000,
    isFeatured: true,
    size: 'M',
    color: 'red',
    images: [
      {
        id: 1,
        url:
          'https://file.hstatic.net/1000333436/article/suit-la-gi-cach-chon-suit-dep_5b3609d53d434c17ae583f3b82e41dc1_1024x1024.jpg',
      },
    ],
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <InfoDetailProduct data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  )
}

export default Product
