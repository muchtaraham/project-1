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

import stylesios from "../myess/styles";
import stylesandroid from "../myess/stylesandroid";
export default class Detail extends Component {
  static navigationOptions = {
    title: 'Permit History'
  };
  render() {
    let h = Platform.OS === 'ios' ? 63 :  56;
    return (
      <Container>
      <Image
        style={{height:h, position: 'absolute', top: 0, left: 0}}
        source={require('../header.jpg')}
      />
      <Header style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
      <Left><Icon style={{color:'white', width:50}} name="arrow-back" onPress={() => this.props.navigation.goBack()}/></Left>
        <Body style={{justifyContent: 'center', alignItems: 'center', flex:100,marginLeft: 50, marginRight: 50,width:'100%',}}>

          <Title style={{color: "white",fontWeight: "300" }}>E-Payslip Agustus</Title>

        </Body>
        <Right/>
      </Header>
      <Content>
      <View style={{marginTop:10}}/>
      <View style={{width: '100%',backgroundColor:'#FFF', justifyContent: 'center'}}>
        <Icon style={{position: 'absolute',color:'grey',fontWeight:'bold',alignSelf:"flex-start", left:15}} name="cash"/>

        <View style={{marginLeft: 50, marginRight:50, paddingTop:10, paddingBottom:10}}>
          <Text style={{fontWeight:'bold',color:'grey'}}>Agustus</Text>
          <Text style={{fontSize:10,color:'grey'}}>Periode Pertama | 25 Agustus 2017</Text>

        </View>
        <Text style={{fontWeight:'bold',color:'grey',alignSelf:'flex-end',position:'absolute',right:15}}>32.820.000,-</Text>
      </View>

      <View style={{marginTop:20}}/>
      <View><Text style={{left:15,fontWeight:'bold',fontSize:14}}>PENDAPATAN</Text></View>
      <View style={{marginTop:10}}/>
      <View style={{width: '100%',backgroundColor:'#FFF', padding:15}}>
        <View>
          <Text style={{color:'grey',fontSize:14}}>Gaji Pokok</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>32.000.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>Tunj. Tetap Lainnya</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>100.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>Tunj. Transport</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>800.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>JHT Perusahaan</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>1.800.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>JKK</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>40.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>JKM</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>30.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>BPJS Kesehatan Perusahaan</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>320.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>Tunj. Pajak</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>1.800.000</Text>
        </View>
        <View style={{width:'100%',borderBottomWidth:1,borderColor:'grey',marginTop:10}}/><View style={{marginTop:10}}/>
        <View>
          <Text style={{fontSize:14}}>Total Pendapatan</Text>
          <Text style={{fontWeight:'bold',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>33.800.000</Text>
        </View>
      </View>

      <View style={{marginTop:20}}/>
      <View><Text style={{left:15,fontWeight:'bold',fontSize:14}}>POTONGAN</Text></View>
      <View style={{marginTop:10}}/>
      <View style={{width: '100%',backgroundColor:'#FFF', padding:15}}>
        <View>
          <Text style={{color:'grey',fontSize:14}}>JHT Pegawai</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>700.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>JHT Perusahaan</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>1.800.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>JKK</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>40.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>JKM</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>30.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>BPJS Kesehatan Pegawai</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>40.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>BPJS Kesehatan Perusahaan</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>320.000</Text>
        </View>

        <View style={{marginTop:10}}/>
        <View>
          <Text style={{color:'grey',fontSize:14}}>Tunj. Pajak</Text>
          <Text style={{fontWeight:'bold',color:'grey',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>1.800.000</Text>
        </View>

        <View style={{width:'100%',borderBottomWidth:1,borderColor:'grey',marginTop:10}}/><View style={{marginTop:10}}/>
        <View>
          <Text style={{fontSize:14}}>Total Potongan</Text>
          <Text style={{fontWeight:'bold',fontSize:14,alignSelf:'flex-end',position:'absolute'}}>2.880.000</Text>
        </View>
      </View>


      <View style={{marginTop:40}}/>
      <View style={{width: '100%',backgroundColor:'#ffaa00', alignItems:'center', padding:15}}>
        <Text style={{fontWeight:'bold',color:'#FFF'}}>DOWNLOAD E-PAYSLIP</Text>
      </View>
      </Content>

      </Container>
    );
  }
}
