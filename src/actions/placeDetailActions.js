import * as types from '../constants/actionTypes'

export function loadPlaceDetailSuccess (place) {
  return {type: types.LOAD_PLACE_DETAIL_SUCCESS, place}
}

export function getPlaceDetail (id) {
  return (dispatch) => {
    return fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_SECRET_ID}&v=20170505&m=foursquare`)
    .then(response => {
      return response.json()
    })
    .then(json => {
      dispatch(loadPlaceDetailSuccess(json.response.venue))
    })
  }
}

