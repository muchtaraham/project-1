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

import stylesios from "../styles";
import stylesandroid from "../stylesandroid";
export default class DetailReimburse extends Component {
  static navigationOptions = {
    title: 'Reimburse History'
  };

  constructor(){

    super();

    this.state ={



    }
  }
  render() {
    let h = Platform.OS === 'ios' ? 63 :  56;
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }
    return (
      <Container>
      <Image
        style={{height:h, position: 'absolute', top: 0, left: 0}}
        source={require('../../header.jpg')}
      />
      <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
      <Left><Icon style={{color:'white', width:50}} name="arrow-back" onPress={() => this.props.navigation.goBack()}/></Left>
        <Body style={{justifyContent: 'center', alignItems: 'center', flex:100,marginLeft: 50, marginRight: 50,width:'100%',}}>

          <Title style={{color: "white",fontWeight: "300" }}>Reimburse Details</Title>

        </Body>
        <Right/>
      </Header>
      <Content>
      <View style={{marginTop:10}}/>
      <View style={{width: '100%',backgroundColor:'#FFF', justifyContent: 'center'}}>
        <Icon style={{position: 'absolute',color:'grey',fontWeight:'bold',alignSelf:"flex-start", left:15}} name="cash"/>

        <View style={{marginLeft: 50, marginRight:50, paddingTop:10, paddingBottom:10}}>
          <Text style={{fontWeight:'bold',color:'grey'}}>Reimburse {(parseInt(this.props.navigation.state.params.reimburse)+1).toString()}</Text>
          <Text style={{fontSize:14,color:'grey'}}>Tanggal Pengajuan: 21 Agustus 2017</Text>
          <View style={{marginTop:5}}/>
          <Button success style={{height:20, borderRadius: 2}}>
            <Text style={{fontSize:14}}>Accepted</Text>
          </Button>
        </View>
      </View>
      <View style={{marginTop:20}}/>
      <View><Text style={{left:15,fontWeight:'bold',fontSize:14}}>PERMIT DETAILS</Text></View>
      <View style={{marginTop:10}}/>
      <View style={{width: '100%',backgroundColor:'#FFF', padding:15}}>
        <Text style={{fontWeight:'bold',color:'grey',fontSize:14}}>Date</Text>
        <Text style={{color:'grey',fontSize:14}}>21 Agustus 2017</Text>
        <View style={{marginTop:10}}/>
        <Text style={{fontWeight:'bold',color:'grey',fontSize:14}}>Total</Text>
        <Text style={{color:'grey',fontSize:14}}>Rp. 200.000</Text>
        <View style={{marginTop:10}}/>
        <Text style={{fontWeight:'bold',color:'grey',fontSize:14}}>Disetujui Oleh, Pada Tanggal</Text>
        <Text style={{color:'grey',fontSize:14}}>Aris Sudaryanto, 21 Agustus 2017</Text>
      </View>
      <View style={{marginTop:40}}/>
      <View style={{width: '100%',backgroundColor:'#ffaa00', alignItems:'center', padding:15}}>
        <Text style={{fontWeight:'bold',color:'#FFF'}}>REMOVE DATA</Text>
      </View>
      </Content>

      </Container>
    );
  }
}
