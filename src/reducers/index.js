import {combineReducers} from 'redux'
import search from './searchReducer'
import recentSearchPlaces from './recentSearchReducer'
import placeDetail from './placeDetailReducer'

const rootReducer = combineReducers({
  search,
  recentSearchPlaces,
  placeDetail
})

export default rootReducer
