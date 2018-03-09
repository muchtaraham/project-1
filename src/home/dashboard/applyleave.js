import React, { Component } from "react";
import {StyleSheet, Platform, ScrollView} from "react-native";
import { DatePickerDialog } from 'react-native-datepicker-dialog';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { TextField } from 'react-native-material-textfield';
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
  Form,
  Input,
  Item,
  Icon,
  Picker

} from "native-base";


import {
  Image, StatusBar, View, TouchableOpacity, Alert, TextInput
} from "react-native";

import stylesios from "./styles";
import stylesandroid from "./stylesandroid";
export default class Applyleave extends Component {

  constructor(props) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = moment(new Date()).format('DD');
    var month = moment(new Date()).format('MMM');
    var year = moment(new Date()).format('YYYY');
    var dayNumber = moment(new Date()).format('d');
    var day = days[dayNumber];
    var datee = moment(new Date()).format('DD-MMM-YYYY');
    super(props);
    this.state = {
      type: "key1",
      quota: "key1",
      fromDate: null,
      fromTanggal: date,
      fromDay: day,
      fromMonthYear: month+' '+year,
      toDate: null,
      toMonthYear: month+' '+year,
      toDay: day,
      toTanggal: date,
      isDateTimePickerVisible: false,
      isDateTimePickerVisibleTo: false,
      description: '',
      showAlert: true
    };
  }
  onValueChangeQuota(value: string) {
    this.setState({
      quota: value
    });
  }
  onValueChangeType(value: string) {
    this.setState({
      type: value
    });
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var dates = moment(date).format('DD');
      var month = moment(date).format('MMM');
      var year = moment(date).format('YYYY');
      var dayNumber = moment(date).format('d');
      var day = days[dayNumber];
      this.setState({
        fromDate: date,
        fromTanggal: dates,
        fromDay: day,
        fromMonthYear: month+' '+year,
      });
      this._hideDateTimePicker();
  };

  _showDateTimePickerTo = () => this.setState({ isDateTimePickerVisibleTo: true });
  _hideDateTimePickerTo = () => this.setState({ isDateTimePickerVisibleTo: false });
  _handleDatePickedTo = (date) => {
      console.log('A date has been picked: ', date);
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var dates = moment(date).format('DD');
      var month = moment(date).format('MMM');
      var year = moment(date).format('YYYY');
      var dayNumber = moment(date).format('d');
      var day = days[dayNumber];
      this.setState({
        toDate: date,
        toTanggal: dates,
        toDay: day,
        toMonthYear: month+' '+year,
      });
      this._hideDateTimePickerTo();
  };

  removeAlert = () => this.setState({ showAlert: false });

  submit = () => {
    Alert.alert(
      'Apply Leave',
      'Success!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render() {
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }
    let h = Platform.OS === 'ios' ? 63 :  56;
    return (
      <Container style={{backgroundColor:'white'}}>

          <Image
            style={{height:h, position: 'absolute', top: 0, left: 0}}
            source={require('../header.jpg')}
          />
          <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
          <Left><Icon style={{color:'white', width:50}} name="arrow-back" onPress={() => this.props.navigation.goBack()}/></Left>
            <Body style={{justifyContent: 'center', alignItems: 'center', flex:100,marginLeft: 50, marginRight: 50,width:'100%',}}>

              <Title style={{color: "white",fontWeight: "300" }}>Apply Leave</Title>

            </Body>
            <Right/>
          </Header>

          <Content>

          <ScrollView>
          {this.state.showAlert ?
          <View style={styles.formAlert}>

            <Icon style={styles.formAlertIconLeft} name="ios-megaphone"/>


            <Icon onPress={this.removeAlert} style={styles.formAlertIconClose} name="ios-close"/>

            <View style={styles.formAlertContent}>
              <Text style={{fontSize:14,color:'#AAA'}}>Jika pengajuan ijin melewati hari libur (Sabtu, Minggu & Hari libur) mohon dibuat pengajuan yang terpisah !</Text>
            </View>
          </View>
          : null }
            <View style={styles.wrapper}>

                <Form>
                <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Type</Text>
                <View style={styles.formBorderItem}>
                <Picker
                  mode="dropdown"
                  iosHeader="Type"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: '100%'}}
                  selectedValue={this.state.type}
                  onValueChange={this.onValueChangeType.bind(this)}
                >
                  <Item label="Cuti Tahunan" value="key1" />
                  <Item label="Cuti Melahirkan" value="key2" />
                </Picker>
                </View>

                <View style={{margin:5}}/>
                <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Quota</Text>
                <View style={styles.formBorderItem}>
                <Picker
                  mode="dropdown"
                  iosHeader="Quota"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: '100%'}}
                  selectedValue={this.state.quota}
                  onValueChange={this.onValueChangeQuota.bind(this)}
                >
                  <Item label="Izin 1 Hari" value="key1" />
                  <Item label="Izin 2 Hari" value="key2" />
                  <Item label="Izin 3 Hari" value="key3" />
                  <Item label="Izin 4 Hari" value="key4" />
                  <Item label="Izin 5 Hari" value="key5" />
                </Picker>
                </View>

                <View style={{margin:5}}/>

                <View style={[styles.container,{alignSelf:'center',alignItems:'center'}]}>
                <TouchableOpacity onPress={this._showDateTimePicker} >
                  <View style={styles.formDate}>
                    <View style={styles.formDateTitle}><Text style={styles.formDateTitleText}>From</Text></View>
                    <View style={styles.container}>
                      <View style={styles.formDateTanggal}><Text style={styles.formDateTanggalText}>{this.state.fromTanggal}</Text></View>
                      <View style={styles.formDateRight}>
                        <Text style={styles.formDateRightText}>{this.state.fromMonthYear}</Text>
                        <Text style={styles.formDateRightText}>{this.state.fromDay}</Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this._showDateTimePickerTo} >
                  <View style={styles.formDate}>
                    <View style={styles.formDateTitle}><Text style={styles.formDateTitleText}>To</Text></View>
                    <View style={styles.container}>
                      <View style={styles.formDateTanggal}><Text style={styles.formDateTanggalText}>{this.state.toTanggal}</Text></View>
                      <View style={styles.formDateRight}>
                        <Text style={styles.formDateRightText}>{this.state.toMonthYear}</Text>
                        <Text style={styles.formDateRightText}>{this.state.toDay}</Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                </View>

                <View style={{margin:5}}/>
                <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Description</Text>
                <View>
                <TextInput
                  style={styles.formTextInput}
                  onChangeText={(text) => this.setState({description: text})}
                  multiline = {true}
                  value={this.state.description}
                />
                </View>
                <View style={{margin:5}}/>
                <Button full small warning onPress={() => this.submit()}>
                  <Text>SUBMIT</Text>
                </Button>
                </Form>



                          <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                          />

                          <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisibleTo}
                            onConfirm={this._handleDatePickedTo}
                            onCancel={this._hideDateTimePickerTo}
                          />
             </View>



           </ScrollView>
          </Content>
      </Container>
    );
  }
}
