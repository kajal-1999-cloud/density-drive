import React from 'react'

const Card1 = ({ image, h3 }) => {
  return (
    <>
      <div className='card-1'>
        <img src={image} alt='img' />
        <h3>{h3}</h3>
      </div>
    </>
  )
}

export default Card1