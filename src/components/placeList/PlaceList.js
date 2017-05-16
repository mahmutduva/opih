import React from 'react'
import {
  Link
} from 'react-router'
import Rating from '../rating/Rating'
import './PlaceList.css'

const PlaceList = ({places}) => {
  return (

    <div className='places'>
      {places.map(place =>
        <Link to={'/detail/' + place.venue.id} key={place.venue.id}>
          <div className='place'>
            <img className='image'  src={place.venue.photos.groups[0].items[0].prefix + '290x290' + place.venue.photos.groups[0].items[0].suffix} alt='place' />
            <div className='place-cover' />
            <div className='place-name'>{place.venue.name}</div>
            <Rating rating={place.venue.rating} />
          </div>
        </Link>
        )}
    </div>

  )
}

export default PlaceList
