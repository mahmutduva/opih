import React from 'react'
import './RecentSearch.css'

const RecentSearch = ({places}) =>
  <div className='recent-search-bg'>
    <h3 className='recent-search-title'>RECENT SEARCHES</h3>
    <div className='recent-search-line' />
    <ul className='recent-search-list'>
      {places.map(place =>
        <li key={place.id}>{place.place} in {place.location}</li>
      )}

    </ul>
  </div>

export default RecentSearch
