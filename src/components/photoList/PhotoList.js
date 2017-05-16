import React from 'react'
import './PhotoList.css'

const PhotoList = ({photos}) => {
  return (

    <div className='photos'>
      {photos.map(photo =>
        <div className='photo' key={photo.suffix}>
          <img className='image' src={photo.prefix + '290x290' + photo.suffix} alt='place' />
          <div className='photo-cover' />
        </div>
        )}
    </div>

  )
}

export default PhotoList
