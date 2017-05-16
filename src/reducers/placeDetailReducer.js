import {LOAD_PLACE_DETAIL_SUCCESS} from '../constants/actionTypes'

const initialState = {
  place: {
    bestPhoto: {},
    name: null,
    rating: null,
    ratingSignals: null,
    photos: [],
    tips: [],
    location: {},
    contact: {}
  }
}

export default function placeDetailReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_PLACE_DETAIL_SUCCESS:
      return {
        ...state,
        place: {
          bestPhoto: action.place.bestPhoto,
          name: action.place.name,
          rating: action.place.rating,
          ratingSignals: action.place.ratingSignals,
          photos: action.place.photos.groups[0].items,
          tips: action.place.tips.groups[0].items,
          location: action.place.location,
          contact: action.place.contact
        }
      }
    default:
      return state
  }
}
