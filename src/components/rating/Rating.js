import React from 'react'
import './Rating.css'

const Rating = ({rating}) => {
  return (

    <div className='place-rating'>
      <div>{rating}</div>
    </div>

  )
}

export default Rating
