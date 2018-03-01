import React from "react";
import Setup from "./src/Setup";
import { StackNavigator } from 'react-navigation';
import Tutorial from "./src/tutorial/index";
import Home from "./src/home/index";

const App = StackNavigator({
  Slide: {screen: Tutorial},
  Home: {screen: Home}
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });

// export default class App extends React.Component {
//   render() {
//     return <Setup />;
//   }
// }
export default App
