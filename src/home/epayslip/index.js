import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, Icon, Button } from "native-base";
import {Platform, View, Alert} from "react-native";

import stylesios from "../myess/styles";
import stylesandroid from "../myess/stylesandroid";
export default class Epayslip extends Component {
  constructor(){

  super();

  this.state ={

    status:[],
    bulan: 'JAN'

  }
}

  render() {
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }


    var permit = [];
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
  	for(let i = 2017; i > 2015; i--){

  		permit.push(
        <View  key={i}>
        <Card>
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

        </Card>
        {this.state.status[i] ? <View style={{marginTop:5, marginBottom: 5}}>{listdetail}</View>: null }
        </View>
  		)
  	}
    for(let i = 1; i < 13; i++){
      var bul = 'JAN';
      if (i == 1){
        bul = 'JAN';
      }
      if (i == 2){
        bul = 'FEB';
      }
      if (i == 3){
        bul = 'MAR';
      }
      if (i == 4){
        bul = 'APR';
      }
      if (i == 5){
        bul = 'MEI';
      }
      if (i == 6){
        bul = 'JUN';
      }
      if (i == 7){
        bul = 'JUL';
      }
      if (i == 8){
        bul = 'AUG';
      }
      if (i == 9){
        bul = 'SEP';
      }
      if (i == 10){
        bul = 'OKT';
      }
      if (i == 11){
        bul = 'NOV';
      }
      if (i == 12){
        bul = 'DES';
      }
      listdetail.push(
        <Card key={i}>
        <CardItem>
          <Body>
            <View style={styles.buttonRight}>
              <Icon style={{color:'grey'}} name="ios-more"/>
            </View>
            <View style={styles.buttonLeft}>
              <Text>{bul}</Text>
            </View>
            <View style={{marginLeft: 50}}>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight]}>
                Jenis Gaji
              </Text>
              <Text style={styles.cardText}>
                KONSOLIDASI
              </Text>
            </View>

          </Body>
        </CardItem>
        </Card>
      )
    }

    return (
      <Content style={{backgroundColor:'#f0eff5'}}>
        { permit }
      </Content>
    );
  }
}
