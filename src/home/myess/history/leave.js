import React, { Component } from "react";
import {StyleSheet, Platform, TouchableOpacity, Alert} from "react-native";
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
  Icon,
  Card, CardItem
} from "native-base";


import {
  Image, StatusBar, View
} from "react-native";

import stylesios from "../styles";
import stylesandroid from "../stylesandroid";
export default class Leave extends Component {
  static navigationOptions = {
    title: 'Leave History'
  };
  constructor(){

    super();

    this.state ={

      status:[]

    }
  }

  _showLeaveMenu = (i) => {

    Alert.alert(
      'Leave Data',
      'Izin '+(parseInt(i)+2).toString()+' Hari',
      [
        {text: 'View Detail', onPress: () => this.props.navigation.navigate("DetailLeave",{leave:i})},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

      ],
      { cancelable: false }
    )
  }

  render() {
    let h = Platform.OS === 'ios' ? 63 :  56;
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }


    var leave = [];
    var listdetail = [];
    var show = [];

    ShowHideTextComponentView = (i) =>{

      if(this.state.status[i])
      {
        this.state.status[i] = false;
        this.setState({status:this.state.status})
      }
      else
      {
        this.state.status[i] = true;
        this.setState({status:this.state.status})
      }
    }
  	for(let i = 2017; i > 2016; i--){

  		leave.push(
        <View  key={i}>
        <Card>
        <TouchableOpacity  onPress={() => ShowHideTextComponentView(i)}>
        <CardItem>
          <Body>
          {this.state.status[i] ?
            <View style={styles.buttonRight}>
            <Icon onPress={() => ShowHideTextComponentView(i)} style={{color:'grey', marginTop:-5}} name="ios-arrow-down"/>
          </View>
          :
          <View style={styles.buttonRight}>
            <Icon onPress={() => ShowHideTextComponentView(i)} style={{color:'grey', marginTop:-5}} name="ios-arrow-forward"/>
          </View>}
          <View>
            <Text style={styles.cardText}>
              {i}
            </Text>
          </View>

          </Body>
        </CardItem>
        </TouchableOpacity>
        </Card>
        {this.state.status[i] ? <View style={{marginTop:5, marginBottom: 5}}>{listdetail}</View>: null }
        </View>
  		)
  	}

    for(let i = 0; i < 12; i++){
      listdetail.push(
        <Card  key={i} >
          <CardItem>
            <Body>

            <View style={styles.buttonRight}>
              <Icon onPress={() => this._showLeaveMenu(i)} style={{color:'grey'}} name="ios-more"/>
            </View>
            <View>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight]}>
                21 Agustus 2017
              </Text>
              <Text style={styles.cardText}>
                Izin <Text>{i+2}</Text> Hari
              </Text>
              <View style={{marginTop:5}}/>
              <Button danger style={{height:15, borderRadius: 2}}>
                <Text style={{fontSize:10}}>Rejected</Text>
              </Button>
            </View>

            </Body>
          </CardItem>
        </Card>
      )
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
              <Title style={{color: "white",fontWeight: "300" }}>Leave History</Title>
            </Body>
            <Right/>
          </Header>

          <Content style={{backgroundColor:'#f0eff5'}}>
            { leave }
          </Content>
      </Container>
    );
  }
}
