import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Button, TextInput } from 'react-native';
import styles from "./styles";
import { Navigation } from 'react-navigation';
// import PasswordInputText from 'react-native-hide-show-password-input';
import { TextField } from 'react-native-material-textfield';


export default class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    return(
      <ScrollView style={{backgroundColor: "#FFF"}}>
        <View style={styles.wrapper}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.image}
              source={require('./klola.jpg')}
           />
           </View>
           <TextField style={styles.textfield} label='Username'  />
           <TextField style={styles.textfield} label='Password' secureTextEntry={true} />
           <Text style={styles.button} onPress={() => alert("ok")}>LOGIN</Text>
           <Text style={styles.buttonwhite} onPress={() => alert("yo")}>Login with QR Code? <Text style={styles.textbold}>Please Scan QR</Text></Text>
           <Text style={styles.buttonwhite} onPress={() => alert("yo")}><Text style={{fontSize: 15}}>Forgot Password?</Text></Text>

         </View>
       </ScrollView>
    )
  }
}
