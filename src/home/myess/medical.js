import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, Icon, Button, ListItem,Left,Right } from "native-base";
import {Platform, View, Alert, TouchableOpacity} from "react-native";

import stylesios from "./styles";
import stylesandroid from "./stylesandroid";
export default class Medical extends Component {
  constructor(){

  super();

  this.state ={

    status:[]

  }
}

  render() {
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }


    var medical = [];
    var showmedical = [];

    ShowMedicalHideTextComponentView = (i) =>{

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
  	for(let i = 0; i < 2; i++){

  		medical.push(
        <Card  key={i} >
          <CardItem>
            <Body>
            <TouchableOpacity onPress={() => ShowMedicalHideTextComponentView(i)} style={{width:'100%'}}>
            {this.state.status[i] ?
              <View style={styles.buttonRight}>
              <Icon onPress={() => ShowMedicalHideTextComponentView(i)} style={{color:'grey'}} name="ios-arrow-down"/>
            </View>
            :
            <View style={styles.buttonRight}>
              <Icon onPress={() => ShowMedicalHideTextComponentView(i)} style={{color:'grey'}} name="ios-more"/>
            </View>}
            <View>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight]}>
                21 Agustus 2017
              </Text>
              <Text style={styles.cardText}>
                Rawat Inap <Text>{i+1}</Text>
              </Text>
            </View>
            </TouchableOpacity>
            {this.state.status[i] ? <View style={{width:'100%',marginTop:10}}>
            <View style={styles.line}/>
            <Text style={styles.cardText}>Date Range</Text>
            <Text style={[styles.cardText, styles.colorGrey, styles.textLight]}>
              21 Agustus 2017 - 22 Agustus 2017
            </Text>
            <View style={{marginTop:10}}/>
            <Text style={styles.cardText}>Description</Text>
            <Text style={[styles.cardText, styles.colorGrey, styles.textLight]}>
              Blablabla
            </Text>
            <View style={{marginTop:10}}/>
                <View style={{flex: .5,
                flexDirection: 'row',
                justifyContent: 'center'}}>
                <Button style={styles.buttonDelete}><Text style={[styles.cardText, {color:'red'}]}>DELETE</Text></Button>
                <Button style={styles.buttonEdit}><Text style={[styles.cardText,{color:'#01589a'}]}>EDIT</Text></Button>
                </View>
            </View> : null }
            </Body>
          </CardItem>
        </Card>
  		)
  	}

    return (
      <Content style={{backgroundColor:'#f0eff5'}}>
        { medical }
        <View  style={{backgroundColor:"#FFF",marginTop:10}}>
          <ListItem>
            <Left>
              <Text style={[styles.cardText]}>Medical History</Text>
            </Left>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </View>
      </Content>
    );
  }
}
