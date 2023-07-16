import React from 'react'
import PropTypes from 'prop-types'
import Currency from '../../Home/components/Currency'
import { Button } from '@chakra-ui/react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Rating } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Cart/CartSlice'
InfoDetailProduct.propTypes = {
  data: PropTypes.object,
}

function InfoDetailProduct({ data }) {
  const dispatch = useDispatch()

  const onAddToCart = () => {
    const action = addToCart({
      id: data.id,
      product: data,
      quantity: 1,
    })
    // console.log(action)
    dispatch(action)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <Rating name="read-only" value="3" readOnly />
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="text-3xl font-bold">{data.size}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600 cursor-pointer"
            style={{ backgroundColor: data.color }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button
          onClick={onAddToCart}
          className="flex items-center gap-x-2  bg-black text-white px-5 py-3 rounded-full"
        >
          Add To Cart
          <ShoppingCartIcon size={20} />
        </Button>
      </div>
    </div>
  )
}

export default InfoDetailProduct
