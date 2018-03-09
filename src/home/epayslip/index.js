import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body, Icon, Button } from "native-base";
import {Platform, View, Alert, TouchableOpacity, TextInput} from "react-native";

import stylesios from "../myess/styles";
import stylesandroid from "../myess/stylesandroid";
import PopupDialog from 'react-native-popup-dialog';
export default class Epayslip extends Component {
  constructor(){

    super();

    this.state ={

      status:[],
      bulan: 'JAN'

    }
  }

  _showEpayslipMenu = (i) => {

    Alert.alert(
      'E-Payslip',
      '',
      [
        {text: 'View E-Payslip', onPress: () => {this.popupDialog.show()}},
        {text: 'Download', onPress: () => console.log('Cancel Pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},

      ],
      { cancelable: false }
    )
  }

  render() {
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }


    var epayslip = [];
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

  		epayslip.push(
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
              <Icon onPress={() => this._showEpayslipMenu(i)} style={{color:'grey'}} name="ios-more"/>
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
        { epayslip }

        <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            height={200}
            width={300}
          >
          <View style={styles.wrapper}>
              <View style={{padding:15, borderBottomWidth:1,borderColor:'grey'}}>
                <Text style={{fontSize:12,color:'grey',fontWeight:'bold'}}>Password E-Payslip</Text>
              </View>
              <View style={{padding:15}}>
                <View style={{borderColor: '#CDCDCD',borderWidth: 1,borderRadius: 2}}>
                <TextInput
                  placeholder="Enter Password E-Payslip"
                  style={{height:30}}
                />
                </View>

                <Button full small style={{backgroundColor:'#ffaa00',marginTop:10}} onPress={() => this.props.navigation.navigate("DetailEpayslip")}>
                  <Text>SUBMIT</Text>
                </Button>
                <Button full small style={{backgroundColor:'#EFEFEF',marginTop:10}} onPress={() => this.popupDialog.dismiss()}>
                  <Text style={{color:'#01589a'}}>CANCEL</Text>
                </Button>
              </View>
            </View>
          </PopupDialog>
      </Content>
    );
  }
}
