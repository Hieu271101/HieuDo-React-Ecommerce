import React from 'react'
import PropTypes from 'prop-types'

Currency.propTypes = {
  value: PropTypes.any,
}
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})
function Currency({value}) {
  return (
    <div>
      <div className="font-semibold">{formatter.format(Number(value))}</div>
    </div>
  )
}

export default Currency
