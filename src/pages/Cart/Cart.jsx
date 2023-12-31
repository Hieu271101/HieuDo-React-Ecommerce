import React from 'react'
import PropTypes from 'prop-types'
import Summary from './components/Summary'
import CartItem from './components/CartItem'
import { Container } from '@mui/material'
import { useSelector } from 'react-redux'

Cart.propTypes = {}

function Cart(props) {
  const cart = {
    items: [],
  }
 

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No items added to cart.</p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Cart
