import React, { Component } from "react";
import {StyleSheet, Platform, ScrollView} from "react-native";
import { DatePickerDialog } from 'react-native-datepicker-dialog';

import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { TextField } from 'react-native-material-textfield';
import { Switch } from 'react-native-switch';

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
export default class Applyovertime extends Component {

  constructor(props) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var date = moment(new Date()).format('DD');
    var month = moment(new Date()).format('MMM');
    var year = moment(new Date()).format('YYYY');
    var dayNumber = moment(new Date()).format('d');
    var day = days[dayNumber];
    var datee = moment(new Date()).format('DD-MMM-YYYY');
    var jam = moment(new Date()).format('h.mm A');
    super(props);
    this.state = {
      selected1: "key1",

      fromDate: null,
      fromClock: jam,
      fromTanggal: date,
      fromDay: day,
      fromMonthYear: month+' '+year,
      toDate: null,
      toClock: jam,
      toMonthYear: month+' '+year,
      toDay: day,
      toTanggal: date,
      isDateTimePickerVisible: false,
      isDateTimePickerVisibleTo: false,
      description: '',
      showAlert: true
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
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
      var jam = moment(date).format('h.mm A');
      this.setState({
        fromClock: jam,
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
      var jam = moment(date).format('h.mm A');
      this.setState({
        toClock: jam,
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
      'Apply Overtime',
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

              <Title style={{color: "white",fontWeight: "300" }}>Apply Overtime</Title>

            </Body>
            <Right/>
          </Header>

          <Content>

          <ScrollView>

            <View style={styles.wrapper}>

                <Form>
                <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Project Name</Text>
                <View style={styles.formBorderItem}>
                <Input/>
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
                        <Text style={styles.formDateRightText}>{this.state.fromClock}</Text>
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
                        <Text style={styles.formDateRightText}>{this.state.toClock}</Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                </View>

                <View style={{margin:5}}/>
                <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Day Off</Text>
                <Switch
                    value={true}
                    onValueChange={(val) => console.log(val)}
                    disabled={false}
                    circleSize={25}
                    barHeight={25}
                    activeText={''}
                    inActiveText={''}
                    circleBorderWidth={1.5}
                    backgroundActive={'#01589a'}
                    backgroundInactive={'gray'}
                    circleActiveColor={'#FFF'}
                    circleInActiveColor={'#FFF'}
                  />
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
                            mode='datetime'
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                          />

                          <DateTimePicker
                            mode='datetime'
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
