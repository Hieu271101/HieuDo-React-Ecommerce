import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

NavbarAction.propTypes = {}

function NavbarAction(props) {
  const navigate = useNavigate()
  const cartItemCount = useSelector((state) => state.cart.length)
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={() => navigate('/cart')}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        {/* <ShoppingBag size={20} color="white" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>

        <span className="ml-2 text-sm font-medium text-white">
          {cartItemCount}
        </span>
      </Button>
    </div>
  )
}

export default NavbarAction
