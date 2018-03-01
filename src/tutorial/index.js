import React, { Component } from 'react';
import { View, Text, Image, Button, Dimensions, Alert } from 'react-native';
import { Navigation } from 'react-navigation';
import Swiper from 'react-native-swiper'

import checkIfFirstLaunch from './checkIfFirstLaunch';
import styles from './styles'
import Home from '../home/index'
const {width} = Dimensions.get('window')

const Tutorial = props => ( <View style={styles.container}>
        <Image style={styles.image} source={props.uri}/>
    </View>
)
export default class extends Component {
  static navigationOptions = {
    title: 'Tutorial'
  };

      constructor(props){
          super(props)

          this.state = {
              imagesSlider: [
                  require('./slide/slide1.jpg'),
                  require('./slide/slide2.jpg'),
                  require('./slide/slide3.jpg')
              ],
              isFirstLaunch: false,
              hasCheckedAsyncStorage: false,
          }
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

    const {navigate} = this.props.navigation;
    if (isFirstLaunch){
      return(

           <View style={{flex:1}}>
               <Swiper
                   height={240}
               >
               {
                   this.state.imagesSlider.map((item, i) => <Tutorial
                       uri={item}
                       key={i}
                   />)
               }

               </Swiper>

               <View style={styles.footer}><Text style={{fontSize:15,color:"#FFF"}} onPress={() => navigate("Home", {})}>SKIP</Text></View>
           </View>
      )
    }else {
      return (
        <Home/>
      )
    }
  }
}
