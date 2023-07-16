import React from 'react'
import PropTypes from 'prop-types'
import { IconButton, Image } from '@chakra-ui/react'
import Currency from './Currency'
import { SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { Rating } from '@mui/material'

ProductCard.propTypes = {
  data: PropTypes.object,
}

function ProductCard({ data }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/product/${data.id}`)
  }
  const onPreview = (event) => {
    event.stopPropagation()

    previewModal.onOpen(data)
  }
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              //   icon={<Expand size={20} className="text-gray-600" />}
              icon={<SearchIcon size={20} className="text-gray-600" />}
            />
            <IconButton
            //   onClick={onAddToCart}
            //   icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      <Rating name="read-only" value="3" readOnly />
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
