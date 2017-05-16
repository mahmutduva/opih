import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router'
import Main from './components/main/Main'
import PlaceDetail from './components/placeDetail/PlaceDetail'

import 'normalize.css/normalize.css'
import './assets/styles/font.css'

const store = configureStore()

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={Main} />
      <Route path='/detail/:id' component={PlaceDetail} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
