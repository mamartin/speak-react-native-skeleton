// @flow
import "rxjs"

import React from "react"
import Expo from "expo"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { createLogger } from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { PersistGate } from "redux-persist/integration/react"

// redux
import { reducer as moviesReducer } from "./src/redux/MoviesRedux"

// containers
import Navigator from "./src/containers/Navigator"

const logger = createLogger({ collapsed: true })
const middleware = []
const initialState = {}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["movies"],
}

middleware.push(logger)

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ movies: moviesReducer }),
)

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(...middleware),
)

const persistor = persistStore(store)

export default class App extends React.PureComponent<null> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    )
  }
}
