import React, { Component } from 'react';
import { View, Text, Image, Button, Dimensions, Alert } from 'react-native';

import Swiper from 'react-native-swiper'


import styles from './styles'

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
              ]
          }
      }

  render() {


    const {navigate} = this.props.navigation;

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

               <View style={styles.footer}><Text style={{fontSize:15,color:"#FFF"}} onPress={() => navigate("Login", {})}>SKIP</Text></View>
           </View>
      )

  }
}
