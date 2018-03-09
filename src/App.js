import React, {Component} from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
import checkIfFirstLaunch from './checkIfFirstLaunch';

import Splash from "./tutorial/index";
import Login from "./login/index";
import Forgot from "./login/forgotpassword";
import Home from "./home/index";
import Applypermit from "./home/dashboard/applypermit";
import Applyovertime from "./home/dashboard/applyovertime";
import Applyleave from "./home/dashboard/applyleave";
import Applymedical from "./home/dashboard/applymedical";
import Applyreimburse from "./home/dashboard/applyreimburse";
import Approval from "./home/dashboard/approval";
import HistoryPermit from "./home/myess/history/permit";
import DetailPermit from "./home/myess/history/detailpermit";
import HistoryOvertime from "./home/myess/history/overtime";
import DetailOvertime from "./home/myess/history/detailovertime";
import HistoryLeave from "./home/myess/history/leave";
import DetailLeave from "./home/myess/history/detailleave";
import HistoryReimburse from "./home/myess/history/reimburse";
import DetailReimburse from "./home/myess/history/detailreimburse";
import HistoryMedical from "./home/myess/history/medical";
import DetailMedical from "./home/myess/history/detailmedical";
import DetailEpayslip from "./home/epayslip/detail";






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
         InitialScreen = Login;
       }
       var AppNavigator = StackNavigator({
         InitialScreen: {screen: InitialScreen},
         Login: {screen: Login},
         ForgotPassword: {screen: Forgot},
         Home: {screen: Home},
         Applypermit: {screen: Applypermit},
         Applyovertime: {screen: Applyovertime},
         Applyleave: {screen: Applyleave},
         Applymedical: {screen: Applymedical},
         Applyreimburse: {screen: Applyreimburse},
         Approval: {screen: Approval},
         HistoryPermit: {screen: HistoryPermit},
         DetailPermit: {screen: DetailPermit},
         HistoryOvertime: {screen: HistoryOvertime},
         DetailOvertime: {screen: DetailOvertime},
         HistoryLeave: {screen: HistoryLeave},
         DetailLeave: {screen: DetailLeave},
         HistoryReimburse: {screen: HistoryReimburse},
         DetailReimburse: {screen: DetailReimburse},
         HistoryMedical: {screen: HistoryMedical},
         DetailMedical: {screen: DetailMedical},
         DetailEpayslip: {screen: DetailEpayslip},
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
