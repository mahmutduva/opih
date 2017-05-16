import React, {Component} from 'react'
import SearchForm from '../searchForm/SearchForm'
import RecentSearch from '../recentSearch/RecentSearch'
import PlaceList from '../placeList/PlaceList'
import './SearchResult.css'
import logo from '../../assets/images/logo-2.png'

class SearchResult extends Component {
  render () {
    const {places, place, location, recentSearchPlaces} = this.props
    return (
      <div>
        <header className='search-result-header'>
          <img src={logo} alt='logo' className='image'/>
          <SearchForm className='search-form' place={place} location={location} />
        </header>
        <content className='search-result-content'>
          {places ? (
            <PlaceList places={places} />
          ) : (
            <div className='no-places'>There are no places</div>
          )}
          <RecentSearch places={recentSearchPlaces} />
        </content>
      </div>
    )
  }
}

export default SearchResult
