import React from 'react'
import PropTypes from 'prop-types'
import Currency from '../../Home/components/Currency'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'

Summary.propTypes = {}

function Summary(props) {
  const items = []
  const totalPrice = 0
  const cartTotal = useSelector((state) => state.cart.total)
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={cartTotal} />
        </div>
      </div>
      <Button
        // onClick={onCheckout}
        disabled={items.length === 1}
        className="w-full mt-6 cursor-pointer"
      >
        Checkout
      </Button>
    </div>
  )
}

export default Summary
