/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Image, Button, Dimensions, Alert } from 'react-native';
import Tutorial from './tutorial/index';
import Login from './login/index'
import checkIfFirstLaunch from './checkIfFirstLaunch';


export default class Setup extends Component {
  constructor(props){
      super(props)

      this.state = {
          isFirstLaunch: false,
          hasCheckedAsyncStorage: false,
      }
  }
  async componentWillMount() {
    const isFirstLaunch = await checkIfFirstLaunch();
    this.setState({ isFirstLaunch, hasCheckedAsyncStorage: true });
  }

  render() {




    if (!this.state.hasCheckedAsyncStorage) {
      return null;
    }

    const {navigate} = this.props.navigation;



        if (this.state.isFirstLaunch){
          return (
            <View><Text>{this.state.isFirstLaunch}</Text></View>
          )
        }else {
          return (
            <Login />
          )
        }
  }
}
