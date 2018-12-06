import { from } from "rxjs"
import { filter, switchMap, flatMap } from "rxjs/operators"

// api
import { getMovies } from "../services/api"

export const initialState = {
  loading: false,
  items: [],
  error: null,
}

export const onMoviesRequest = () => ({
  type: "ON_MOVIES_REQUEST",
})
export const onMoviesSuccess = movies => ({
  type: "ON_MOVIES_SUCCESS",
  movies,
})
export const onMoviesFail = error => ({
  type: "ON_MOVIES_FAIL",
  error,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
      }
    case "ON_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        items: action.movies.results,
      }
    case "ON_MOVIES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state
  }
}

export const moviesRequestEpic = action$ =>
  action$.pipe(
    filter(action => action.type === "ON_MOVIES_REQUEST"),
    switchMap(() =>
      from(getMovies()).pipe(
        flatMap(response => from([onMoviesSuccess(response.data)])),
      ),
    ),
  )
