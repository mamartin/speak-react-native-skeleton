import React from "react"
import { SafeAreaView, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: { flex: 1 },
})

export default class Detail extends React.PureComponent<null> {
  render() {
    const { movieId } = this.props.navigation.state.params

    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello {movieId}</Text>
      </SafeAreaView>
    )
  }
}
