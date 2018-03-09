import React, { Component } from "react";
import {StyleSheet, Platform} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon
} from "native-base";


import {
  Image, StatusBar, View
} from "react-native";

import stylesios from "./styles";
import stylesandroid from "./stylesandroid";
export default class Applyreimburse extends Component {
  static navigationOptions = {
    title: 'Permit History'
  };
  render() {
    let h = Platform.OS === 'ios' ? 63 :  56;
    return (
      <Container>
      <Image
        style={{height:h, position: 'absolute', top: 0, left: 0}}
        source={require('../header.jpg')}
      />
      <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
      <Left><Icon style={{color:'white', width:50}} name="arrow-back" onPress={() => this.props.navigation.goBack()}/></Left>
        <Body style={{justifyContent: 'center', alignItems: 'center', flex:100,marginLeft: 50, marginRight: 50,width:'100%',}}>

          <Title style={{color: "white",fontWeight: "300" }}>Apply Reimburse</Title>

        </Body>
        <Right/>
      </Header>


      </Container>
    );
  }
}
