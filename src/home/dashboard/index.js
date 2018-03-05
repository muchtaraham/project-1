import React, { Component } from "react";
import {
  Content,
  View,
  Text,
  Button,
  Icon
} from "native-base";

import {
  Image,
  Alert
} from "react-native";
import styles from "./styles";
export default class Home extends Component {
  render() {
    return (

          <Content style={{backgroundColor: "#f7f7f7"}}>
          <Image
            style={styles.imageatas}
            source={require('../../tutorial/slide/slide1.jpg')}
          />
          <Image
          style={styles.imageprofile}
            source={require('../../tutorial/slide/slide1.jpg')}
          />
          <Text style={styles.profileName}>Aris Sudaryanto</Text>
          <Text style={styles.profileTitle}>M1020 / Software Engineer</Text>
          <View style={styles.wrapper}>
            <View style={styles.container}>
                <Button style={styles.box}>
                <View>
                  <Icon style={{alignSelf:"center", color: "#01589a"}} name="list-box" />
                  <Text style={{alignSelf:"center", color: "#01589a", fontSize: 14}}>Permit</Text>
                  </View>
                </Button>
                <Button style={styles.box}>
                <View>
                  <Icon style={{alignSelf:"center", color: "#01589a"}} name="clock" />
                  <Text style={{alignSelf:"center", color: "#01589a", fontSize: 14}}>Overtime</Text>
                  </View>
                  </Button>
                <Button style={styles.box}>
                <View>
                  <Icon style={{alignSelf:"center", color: "#01589a"}} name="calendar" />
                  <Text style={{alignSelf:"center", color: "#01589a", fontSize: 14}}>Leave</Text>
                  </View>
                  </Button>
            </View>
            <View style={styles.container}>
                <Button style={styles.box}>
                <View>
                  <Icon style={{alignSelf:"center", color: "#01589a"}} name="medical" />
                  <Text style={{alignSelf:"center", color: "#01589a", fontSize: 14}}>Medical</Text>
                  </View>
                  </Button>
                <Button style={styles.box}>
                <View>
                  <Icon style={{alignSelf:"center", color: "#01589a"}} name="cash" />
                  <Text style={{alignSelf:"center", color: "#01589a", fontSize: 14}}>Reimburse</Text>
                  </View>
                  </Button>
                <Button style={styles.box}>
                <View>
                  <View style={styles.backgroundRoundRed}><Text style={{alignSelf:"center",fontSize:10, color: 'white', fontWeight: 'bold'}}>8</Text></View>
                  <Icon style={{alignSelf:"center", color: "#01589a"}} name="checkmark-circle" />
                  <Text style={{alignSelf:"center", color: "#01589a", fontSize: 14}}>Approval</Text>
                  </View>
                  </Button>
            </View>
          </View>

          <Text style={{left: 20, color: "#3c3c3c", fontSize: 14}}>ESS Statistics</Text>
          <View style={styles.wrapperbawah}>
          <View style={styles.containerbawah}>
              <View style={[styles.boxbawah, styles.borderright]}>
              <Text style={{alignSelf:"center", color:"#6b6978", fontSize: 18, fontWeight: "bold"}}>14</Text>
                <Text style={{alignSelf:"center", color: "#8b8996", fontSize: 13}}>Permit</Text>
                </View>
              <View style={[styles.boxbawah, styles.borderright]}>
              <Text style={{alignSelf:"center", color:"#6b6978", fontSize: 18, fontWeight: "bold"}}>4</Text>
                <Text style={{alignSelf:"center", color: "#8b8996", fontSize: 13}}>Overtime</Text>
                </View>
              <View style={[styles.boxbawah, styles.borderright]}>
                <Text style={{alignSelf:"center", color:"#6b6978", fontSize: 18, fontWeight: "bold"}}>1</Text>
                <Text style={{alignSelf:"center", color: "#8b8996", fontSize: 13}}>Leave</Text>
                </View>
              <View style={[styles.boxbawah, styles.borderright]}>
              <Text style={{alignSelf:"center", color:"#6b6978", fontSize: 18, fontWeight: "bold"}}>1</Text>
                <Text style={{alignSelf:"center", color: "#8b8996", fontSize: 13}}>Medical</Text>
                </View>
              <View style={styles.boxbawah}>
              <Text style={{alignSelf:"center", color:"#6b6978", fontSize: 18, fontWeight: "bold"}}>1</Text>
                <Text style={{alignSelf:"center", color: "#8b8996", fontSize: 13}}>Reimburse</Text>
                </View>
          </View>
          </View>
          </Content>






    );
  }
}
