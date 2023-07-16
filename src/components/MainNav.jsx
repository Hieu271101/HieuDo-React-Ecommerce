import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

MainNav.propTypes = {
  data: PropTypes.array,
}

function MainNav({ data }) {
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: `/category/${route.id}`,
  }))
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={clsx(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500',
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav
