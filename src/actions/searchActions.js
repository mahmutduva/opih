import * as types from '../constants/actionTypes'
import * as actions from './recentSearchActions'

export function searchPlaceSuccess (places, place, location) {
  return {type: types.SEARCH_PLACE_SUCCESS, places, place, location}
}

export function searchPlace (place, location) {
  return (dispatch) => {
    actions.addPlace(place, location)
    dispatch(actions.getRecentSearchPlace())
    return fetch(`https://api.foursquare.com/v2/venues/explore?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}&near=${location}&query=${place}&limit=10&v=20170505&m=foursquare&venuePhotos=1`)
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch(searchPlaceSuccess(json.response.groups[0].items, place, location))
    })
  }
}

