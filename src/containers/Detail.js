import React from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"
import { connect } from "react-redux"
import { RoundedButton } from "../components"
import { onToggleFavorite } from "../redux/MoviesRedux"

const styles = StyleSheet.create({
  container: { flex: 1 },
})

// For illustration purposes only
const getMovieById = (state, movieId) =>
  state.movies.items.filter(movie => movie.id === movieId)[0]

class Detail extends React.PureComponent<null> {
  static navigationOptions = { title: "Movie detail" }

  render() {
    const { movie, onToggleFavorite, isMovieFavorite } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <Text>{movie.title}</Text>
        <RoundedButton onPress={() => onToggleFavorite(movie.id)}>
          {isMovieFavorite ? "Remove" : "Add"}
        </RoundedButton>
      </SafeAreaView>
    )
  }
}
const mapStateToProps = (state, props) => {
  const { movieId } = props.navigation.state.params
  return {
    movie: getMovieById(state, movieId),
    isMovieFavorite: state.movies.favorites.indexOf(movieId) > -1,
  }
}

const mapDispatchToProps = {
  onToggleFavorite,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail)
