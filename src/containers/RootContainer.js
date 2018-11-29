// @flow
import React from "react"
import { Text, SafeAreaView, StyleSheet, FlatList } from "react-native"
import { connect } from "react-redux"

// data
import moviesData from "../../mock/movies"

// components
import { RoundedButton } from "../components"
import { Colors } from "../themes"

// redux
import { onGetMovies } from "../redux/MoviesRedux"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
})

type Props = {
  movies: Array<*>,
  onGetMovies: typeof onGetMovies,
}

class RootContainer extends React.PureComponent<Props> {
  render() {
    const { movies, onGetMovies } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          renderItem={({ item }) => <Text>{item.title}</Text>}
          data={movies}
          keyExtractor={item => item.id.toString()}
        />
        <RoundedButton onPress={() => onGetMovies(moviesData)}>
          Download movies
        </RoundedButton>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
})

const mapDispatchToProps = {
  onGetMovies,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer)
