import React from "react";
import Setup from "./src/Setup";
import { StackNavigator } from 'react-navigation';
import Tutorial from "./src/tutorial/index";
import Login from "./src/login/index";
import Forgot from "./src/login/forgotpassword";

const App = StackNavigator({
  Slide: {screen: Tutorial},
  Login: {screen: Login},
  ForgotPassword: {screen: Forgot}
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
