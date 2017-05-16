import {SEARCH_PLACE_SUCCESS} from '../constants/actionTypes'

const initialState = {
  places: [],
  location: '',
  place: '',
  isSearching: false
}

export default function searhReducer (state = initialState, action) {
  switch (action.type) {
    case SEARCH_PLACE_SUCCESS:
      return {
        ...state,
        places: action.places,
        location: action.location,
        place: action.place,
        isSearching: true

      }
    default:
      return state
  }
}
