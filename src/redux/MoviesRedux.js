export const initialState = {
  items: [],
  favorites: [],
}

export const onGetMovies = movies => ({
  type: "ON_GET_MOVIES",
  movies,
})
export const onToggleFavorite = movieId => ({
  type: "ON_TOGGLE_FAVORITE",
  movieId,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_GET_MOVIES":
      return {
        ...state,
        items: action.movies,
      }
    case "ON_TOGGLE_FAVORITE":
      return {
        ...state,
        favorites:
          state.favorites.indexOf(action.movieId) > -1
            ? state.favorites.filter(favorite => favorite !== action.movieId)
            : [...state.favorites, action.movieId],
      }
    default:
      return state
  }
}
