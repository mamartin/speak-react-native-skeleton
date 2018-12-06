import { createStackNavigator, createAppContainer } from "react-navigation"
import RootContainer from "./RootContainer"
import Detail from "./Detail"

export default createAppContainer(
  createStackNavigator({
    Root: { screen: RootContainer },
    Detail: { screen: Detail },
  }),
)
