import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from '../home/Home'
import Footer from '../footer/Footer'
import SearchResult from '../searchResult/SearchResult'

import './Main.css'

class Main extends Component {

  render () {
    const {isSearching, places, place, location, recentSearchPlaces} = this.props
    return (
      <div className='wrapper'>
        {isSearching ? (
          <SearchResult places={places} place={place} location={location} recentSearchPlaces={recentSearchPlaces} />
          ) : (
            <Home />
          )}

        <Footer />
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {places, isSearching, location, place} = state.search
  const recentSearchPlaces = state.recentSearchPlaces.places
  return {
    places,
    isSearching,
    place,
    location,
    recentSearchPlaces
  }
}

export default connect(mapStateToProps)(Main)
