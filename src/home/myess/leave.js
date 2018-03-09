import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, Icon, Button, ListItem,Left,Right } from "native-base";
import {Platform, View, Alert, TouchableOpacity} from "react-native";

import stylesios from "./styles";
import stylesandroid from "./stylesandroid";
export default class Leave extends Component {
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


    var leave = [];
    var showleave = [];

    ShowLeaveHideTextComponentView = (i) =>{

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

  		leave.push(
        <Card  key={i} >
          <CardItem>
            <Body>
            <TouchableOpacity onPress={() => ShowLeaveHideTextComponentView(i)} style={{width:'100%'}}>
            {this.state.status[i] ?
              <View style={styles.buttonRight}>
              <Icon onPress={() => ShowLeaveHideTextComponentView(i)} style={{color:'grey'}} name="ios-arrow-down"/>
            </View>
            :
            <View style={styles.buttonRight}>
              <Icon onPress={() => ShowLeaveHideTextComponentView(i)} style={{color:'grey'}} name="ios-more"/>
            </View>}
            <View>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight]}>
                21 Agustus 2017
              </Text>
              <Text style={styles.cardText}>
                Izin <Text>{i+2}</Text> Hari
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
        { leave }
        <Card>
          <CardItem>
          <Body>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("HistoryLeave")} style={{width:'100%'}}>
          <View style={styles.buttonRight}>
            <Icon style={{color:'grey', marginTop:-5}} name="ios-arrow-forward"/>
          </View>
          <View>
            <Text style={styles.cardText}>
            Leave History
            </Text>
          </View>

        </TouchableOpacity>
        </Body>
      </CardItem>
      </Card>
      </Content>
    );
  }
}
