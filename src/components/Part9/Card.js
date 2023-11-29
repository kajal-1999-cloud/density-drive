/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const Card = ({ p,h3,p1,image,logo}) => {
  return (
    <div className='card'>
       <p>{ p}</p>
      <h3>{ h3}</h3>
      <p className='last'>{p1}</p>
      {
        logo != null ?
          <img className='logo' src={logo} alt='img' />
        : <p></p>
        }
      <img className='img' src={image} alt='img'/>
    </div>
  )
}

export default Card