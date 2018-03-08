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
export default class PermitHistory extends Component {
  static navigationOptions = {
    title: 'Permit History'
  };
  render() {
    let h = Platform.OS === 'ios' ? 63 :  56;
    return (
      <Container>
          <Image
            style={{height:h, position: 'absolute', top: 0, left: 0}}
            source={require('../../tutorial/slide/slide1.jpg')}
          />
          <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
          <Left><Icon style={{color:'white'}} name="arrow-back"/></Left>
            <Body style={{justifyContent: 'center', alignItems: 'center'}}>
              <Title style={{color: "white",fontWeight: "300" }}>Permit History</Title>
            </Body>
            <Right/>
          </Header>


      </Container>
    );
  }
}
