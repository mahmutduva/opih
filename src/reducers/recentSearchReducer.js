import {LOAD_RECENT_SEARCH_PLACE_SUCCESS} from '../constants/actionTypes'

const initialState = {
  places: []
}

export default function recentSearhReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_RECENT_SEARCH_PLACE_SUCCESS:
      return {
        ...state,
        places: action.places
      }
    default:
      return state
  }
}
