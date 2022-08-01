import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
  return (
    // <div className={`card ${reverse && 'reverse'}`}>
    //   {children}
    // </div>

    <div className="card" 
      style={{
        backgroundColor : reverse ? '#fff' : '#fff',
        color: reverse ? '#000' : '#000',
      }}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: true,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}
export default Card