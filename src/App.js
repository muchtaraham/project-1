import React, {Component} from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import checkIfFirstLaunch from './checkIfFirstLaunch';

import Splash from "./tutorial/index";
import Login from "./login/index";
import Forgot from "./login/forgotpassword";
import Home from "./home/index";


 //
 // export default () =>
 //   <Root>
 //     <AppNavigator />
 //   </Root>;

   export default class App extends React.Component {
     constructor(props) {
         super(props);

         this.state = {
           isFirstLaunch: false,
           hasCheckedAsyncStorage: false,
         };
       }

       async componentWillMount() {
         const isFirstLaunch = await checkIfFirstLaunch();
         this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
       }


     render() {
       const { hasCheckedAsyncStorage, isFirstLaunch } = this.state;
       if (!hasCheckedAsyncStorage) {
         return null;
       }
       var InitialScreen = Splash;
       if (!isFirstLaunch) {
         InitialScreen = Home;
       }
       var AppNavigator = StackNavigator({
         InitialScreen: {screen: InitialScreen},
         Login: {screen: Login},
         ForgotPassword: {screen: Forgot},
         Home: {screen: Home}
       },
       {
         headerMode: 'none',
         navigationOptions: {
           headerVisible: false,
         }
        });

       return <Root>
         <AppNavigator />
       </Root>;
     }
   }
