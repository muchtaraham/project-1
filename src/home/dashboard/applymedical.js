import React, { Component } from "react";
import {Modal, TouchableHighlight, StyleSheet, Platform, ScrollView, Image, StatusBar, View, TouchableOpacity, Alert, TextInput} from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

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
  Picker,
  Card, CardItem
} from "native-base";
import PopupDialog from 'react-native-popup-dialog';
import moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import NumberFormat from 'react-number-format';


import stylesios from "./styles";
import stylesandroid from "./stylesandroid";
export default class Applymedical extends Component {
  static navigationOptions = {
    title: 'Permit History'
  };

  constructor(props) {
    var datee = moment(new Date()).format('DD/MM/YYYY');
    super(props);
    this.state = {
      component: "Penyakit Serius",
      recipe:"",
      total:"",
      tanggal:datee,
      deviation:"",
      componentArr: [],
      recipeArr:[],
      totalArr:[],
      tanggalArr:[],
      deviationArr:[],
      insuredpegawai: true,
      insuredkeluarga: false,
      reimburse:true,
      nonreimburse:false,
      modalVisible: false,
      isDateTimePickerVisible: false,
      listcomponen: [],
      totalsubmition: "0",
      totaldeviation: "0"
    };
  }
  _onValueChangeComponent(value: string) {this.setState({component: value});}
  _changeInsuredPegawai = () => this.setState({ insuredpegawai: true,insuredkeluarga: false });
  _changeInsuredKeluarga = () => this.setState({ insuredpegawai: false,insuredkeluarga: true });
  _changeReimburse = () => this.setState({ reimburse: true,nonreimburse: false });
  _changeNonreimburse = () => this.setState({ reimburse: false,nonreimburse: true });
  _setModalVisible(visible) {this.setState({modalVisible: visible});}
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  _handleDatePicked = (date) => {
      console.log('A date has been picked: ', date);
      var datee = moment(date).format('DD/MM/YYYY');
      this.setState({
        tanggal: datee
      });
      this._hideDateTimePicker();
  };

  _addComponen = (pop) =>{
    var date = moment(new Date()).format('DDMMMYYYY H:mm:ss');
    var datee = moment(new Date()).format('DD/MM/YYYY');
    this.state.componentArr.push(this.state.component);
    this.state.recipeArr.push(this.state.recipe);
    this.state.tanggalArr.push(this.state.tanggal);
    this.state.totalArr.push(this.state.total);
    this.state.deviationArr.push(this.state.deviation);
    this.state.listcomponen.push(
      <Card key={date}>
        <CardItem>


        <View style={{width:"70%"}}>
          <Text style={{fontSize:12,fontWeight:"600",color:'grey'}}>
          {this.state.component}
          </Text>
          <Text style={{fontSize:10,color:'grey'}}>
          Recipe Number: {this.state.recipe} | Date: {this.state.tanggal}
          </Text>
          <NumberFormat value={this.state.deviation} displayType={'text'} thousandSeparator={true} prefix={''} renderText={value =>   <Text style={{fontSize:10,color:'grey'}}>Deviation: {value},-</Text>} />
        </View>

      <View style={{width:"30%", alignItems:"flex-end"}}>

      <NumberFormat value={this.state.total} displayType={'text'} thousandSeparator={true} prefix={''} renderText={value =>  <Text style={{fontSize:14,color:'grey',fontWeight:"bold"}}>{value},-</Text>} />
      </View>
    </CardItem>
    </Card>
  );
  this.setState({
    listcomponen: this.state.listcomponen,
    component: "Penyakit Serius",
    recipe:"",
    total:"",
    tanggal:datee,
    componentArr: this.state.componentArr,
    recipeArr: this.state.recipeArr,
    totalArr: this.state.totalArr,
    tanggalArr: this.state.tanggalArr,
    deviationArr: this.state.deviationArr,
  });
    pop.dismiss(() => {
      console.log('callback - will be called immediately')
    });
    var jumlah = 0;
    this.state.totalArr.find((el) => {
      jumlah = jumlah + parseInt(el);
    })

    var jumlahdev = 0;
    this.state.deviationArr.find((el) => {
      jumlahdev = jumlahdev + parseInt(el);
    })

    this.setState({totalsubmition:jumlah.toString()});
    this.setState({totaldeviation:jumlahdev.toString()});

  }

  _submitForm = () => {

      Alert.alert(
        'Apply Medical',
        'Success!',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )

        var datee = moment(new Date()).format('DD/MM/YYYY');
      this.setState({
        component: "Penyakit Serius",
        recipe:"",
        total:"",
        tanggal:datee,
        deviation:"",
        componentArr: [],
        recipeArr:[],
        totalArr:[],
        tanggalArr:[],
        deviationArr:[],
        insuredpegawai: true,
        insuredkeluarga: false,
        reimburse:true,
        nonreimburse:false,
        modalVisible: false,
        isDateTimePickerVisible: false,
        listcomponen: [],
        totalsubmition: "0",
        totaldeviation: "0"
      });
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

          <Title style={{color: "white",fontWeight: "300" }}>Apply Medical</Title>

        </Body>
        <Right/>
      </Header>
      <Content>
      <ScrollView>

        <View style={styles.wrapper}>

            <Form>
              <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Insured</Text>
              <RadioForm
                formHorizontal={true}
                animation={true}
                style={{marginLeft:-10}}
              >
              <RadioButton labelHorizontal={true} >

                <RadioButtonInput
                  obj={0}
                  index={0}
                  isSelected={this.state.insuredpegawai}
                  onPress={this._changeInsuredPegawai}
                  borderWidth={1.5}
                  buttonInnerColor={'#01589a'}
                  buttonOuterColor={'#01589a'}
                  buttonSize={10}
                  buttonOuterSize={16}
                  buttonStyle={{}}
                  buttonWrapStyle={{marginLeft: 10}}
                />
                <TouchableOpacity onPress={this._changeInsuredPegawai}>
                  <Text style={{marginLeft:10, color:'grey', fontSize:12, width:100}}>Pegawai</Text>
                </TouchableOpacity>
                </RadioButton>
                <RadioButton labelHorizontal={true} >

                  <RadioButtonInput
                    obj={0}
                    index={1}
                    isSelected={this.state.insuredkeluarga}
                    onPress={this._changeInsuredKeluarga}
                    borderWidth={1.5}
                    buttonInnerColor={'#01589a'}
                    buttonOuterColor={'#01589a'}
                    buttonSize={10}
                    buttonOuterSize={16}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10}}
                  />
                  <TouchableOpacity onPress={this._changeInsuredKeluarga}>
                    <Text style={{marginLeft:10, color:'grey', fontSize:12, width:120}}>Anggota Keluarga</Text>
                  </TouchableOpacity>
                  </RadioButton>

              </RadioForm>
              <View style={{margin:5}}/>
              <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Payment Type</Text>
              <RadioForm
                formHorizontal={true}
                animation={true}
                style={{marginLeft:-10}}
              >
              <RadioButton labelHorizontal={true} >

                <RadioButtonInput
                  obj={0}
                  index={0}
                  isSelected={this.state.reimburse}
                  onPress={this._changeReimburse}
                  borderWidth={1.5}
                  buttonInnerColor={'#01589a'}
                  buttonOuterColor={'#01589a'}
                  buttonSize={10}
                  buttonOuterSize={16}
                  buttonStyle={{}}
                  buttonWrapStyle={{marginLeft: 10}}
                />
                <TouchableOpacity onPress={this._changeReimburse}>
                  <Text style={{marginLeft:10, color:'grey', fontSize:12, width:100}}>Reimbursement</Text>
                  </TouchableOpacity>
                </RadioButton>
                <RadioButton labelHorizontal={true} >

                  <RadioButtonInput
                    obj={0}
                    index={0}
                    isSelected={this.state.nonreimburse}
                    onPress={this._changeNonreimburse}
                    borderWidth={1.5}
                    buttonInnerColor={'#01589a'}
                    buttonOuterColor={'#01589a'}
                    buttonSize={10}
                    buttonOuterSize={16}
                    buttonStyle={{}}
                    buttonWrapStyle={{marginLeft: 10}}
                  />
                  <TouchableOpacity onPress={this._changeNonreimburse}>
                    <Text style={{marginLeft:10, color:'grey', fontSize:12, width:120}}>Non Reimbursement</Text>
                    </TouchableOpacity>
                  </RadioButton>

              </RadioForm>

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
                <View>
                  <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Medical Component</Text>
                  <Icon style={[styles.formAlertIconClose,{color:'#01589a'}]}  onPress={() => {this.popupDialog.show()}} name="ios-add"/>
                </View>

              { this.state.listcomponen }
              <View>
                <Text style={{fontSize:12,fontWeight:"600",color:'grey'}}>Total Submission</Text>
                <NumberFormat value={this.state.totalsubmition} displayType={'text'} thousandSeparator={true} prefix={''} renderText={value =>  <Text style={{fontSize:12,fontWeight:"600",color:'grey',alignSelf:'flex-end',position: 'absolute'}}>{value},-</Text>} />
              </View>
              <View>
                <Text style={{fontSize:12,fontWeight:"600",color:'grey'}}>Total Deviation</Text>
                <NumberFormat value={this.state.totaldeviation} displayType={'text'} thousandSeparator={true} prefix={''} renderText={value =>  <Text style={{fontSize:12,fontWeight:"600",color:'grey',alignSelf:'flex-end',position: 'absolute'}}>{value},-</Text>} />
              </View>



              <View style={{margin:5}}/>
              <Button full small warning onPress={() => this._submitForm()}>
                <Text>SUBMIT</Text>
              </Button>
            </Form>
        </View>
      </ScrollView>
      </Content>
      <PopupDialog
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          height={350}
          width={300}
        >
        <View style={styles.wrapper}>

            <Form>
            <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Medical Component</Text>
            <View style={styles.formBorderItem}>
            <Picker
              mode="dropdown"
              iosHeader="Medical Component"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: '100%',height:30}}
              selectedValue={this.state.component}
              onValueChange={this._onValueChangeComponent.bind(this)}
            >
              <Item label="Penyakit Serius" value="Penyakit Serius" />
              <Item label="Penyakit Ringan" value="Penyakit Ringan" />
            </Picker>
            </View>
            <Text style={{fontSize:10,color:'grey',alignSelf:'flex-end'}}>Credit Limit: 1.500.000</Text>


            <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Date</Text>
            <View style={[styles.formBorderItem,{justifyContent:'center',height:30}]}>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              <Text style={{fontSize:14}}>{this.state.tanggal}</Text>
            </TouchableOpacity>
            </View>


            <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Recipe Number</Text>
            <View style={styles.formBorderItem}>
            <TextInput
              value={this.state.recipe} onChangeText={(text) => this.setState({recipe: text})}
              style={{height:30}}
            />
            </View>


            <Text style={{fontSize: 14,marginTop:10,marginBottom:5}}>Total</Text>
            <View style={styles.formBorderItem}>
            <TextInput
              keyboardType='numeric'
              value={this.state.total} onChangeText={(text) => this.setState({total: text, deviation: (parseInt(text)*0.1).toFixed(0).toString()})}
              style={{height:30}}
            />
            </View>
            <Button full small style={{backgroundColor:'#01589a',marginTop:10}} onPress={() => this._addComponen(this.popupDialog)}>
              <Text>Add Component</Text>
            </Button>

            </Form>
          </View>
        </PopupDialog>


        <DateTimePicker
          mode='date'
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </Container>


    );
  }
}
