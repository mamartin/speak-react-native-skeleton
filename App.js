// @flow
import "rxjs"

import React from "react"
import Expo from "expo"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
// redux
import { reducer as moviesReducer } from "./src/redux/MoviesRedux"

// containers
import Navigator from "./src/containers/Navigator"

const logger = createLogger({ collapsed: true })
const middleware = []
const initialState = {}

middleware.push(logger)

const store = createStore(
  combineReducers({ movies: moviesReducer }),
  initialState,
  applyMiddleware(...middleware),
)

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
