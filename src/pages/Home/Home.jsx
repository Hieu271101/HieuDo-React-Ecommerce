import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@chakra-ui/react'
import Billboard from './components/Billboard'
import ProductList from './components/ProductList'

Home.propTypes = {}

function Home(props) {
  const billboard = {
    id: 1,
    label: 'Explore feature collection',
    imageUrl: '/billboard-bg-3.png',
  }
  const products = [
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
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default Home
