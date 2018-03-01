import React, {Component} from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Splash from "./tutorial/index";
import Login from "./login/index";
import Forgot from "./login/forgotpassword";

 var a = "o";



 var InitialScreen = Splash;
 if (a == "o") {
   InitialScreen = Login;
 }
 var AppNavigator = StackNavigator({
   InitialScreen: {screen: InitialScreen},
   Login: {screen: Login},
   ForgotPassword: {screen: Forgot}
 },
 {
   headerMode: 'none',
   navigationOptions: {
     headerVisible: false,
   }
  });
 //
 // export default () =>
 //   <Root>
 //     <AppNavigator />
 //   </Root>;

 export default class App extends React.Component {
   render() {
     return <Root>
       <AppNavigator />
     </Root>;
   }
 }
