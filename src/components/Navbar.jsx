import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import MainNav from './MainNav'
import NavbarAction from './NavbarAction'

Navbar.propTypes = {}

function Navbar(props) {
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
  ]
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link to="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarAction />
        </div>
      </Container>
    </div>
  )
}

export default Navbar
