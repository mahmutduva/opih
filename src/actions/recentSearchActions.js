import * as types from '../constants/actionTypes'

export function loadRecentSearchPlace (places) {
  return {type: types.LOAD_RECENT_SEARCH_PLACE_SUCCESS, places}
}

export function getRecentSearchPlace () {
  const places = checkPlaces()
  return (dispatch) => {
    dispatch(loadRecentSearchPlace(places))
  }
}

export function addPlace (place, location) {
  let places = checkPlaces()
  if (places.length === 10) places.splice(9, 1)
  places.unshift({place, location, id: places.length})
  localStorage.setItem('places', JSON.stringify(places))
}

function checkPlaces () {
  const places = JSON.parse(localStorage.getItem('places') || '[]')
  return places
}
