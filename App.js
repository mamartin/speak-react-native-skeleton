// @flow
import "rxjs"

import React from "react"
import Expo from "expo"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import { combineEpics, createEpicMiddleware } from "redux-observable"

// redux
import {
  reducer as moviesReducer,
  moviesRequestEpic,
} from "./src/redux/MoviesRedux"

// containers
import Navigator from "./src/containers/Navigator"

const logger = createLogger({ collapsed: true })
const middleware = []
const initialState = {}
const epicMiddleware = createEpicMiddleware({
  dependencies: {},
})
middleware.push(epicMiddleware)
middleware.push(logger)

const store = createStore(
  combineReducers({ movies: moviesReducer }),
  initialState,
  applyMiddleware(...middleware),
)
epicMiddleware.run(combineEpics(moviesRequestEpic))

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
