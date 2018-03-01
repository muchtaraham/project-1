import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Button, TextInput } from 'react-native';
import styles from "./styles";

import PasswordInputText from 'react-native-hide-show-password-input';
import { TextField } from 'react-native-material-textfield';


export default class Login extends Component {
  static navigationOptions = {
    title: 'Login'
  };
  constructor(props){
      super(props)

      this.state = {
        username: '',
        password:'',
        errorusername:'',
        errorpassword:''
      }
  }

  submitLogin = () => {
    if (this.state.username == '') {
      this.setState({ errorusername: 'Username is required!' });
    }else if (this.state.username != '') {
      this.setState({ errorusername: '' });
    }
    if (this.state.password == '') {
      this.setState({ errorpassword: 'Password is required!' });
    }else if (this.state.password != '') {
      this.setState({ errorpassword: '' });
    }

    if (this.state.username != '' && this.state.password != '') {
      this.props.navigation.navigate("Home")
    }

  }

  changeusername = (typedtext) => {
    if (typedtext == '') {
      this.setState({ errorusername: 'Username is required!' });
    }else if (typedtext != '') {
      this.setState({ errorusername: '' });
    }

    this.setState({ username: typedtext });
  }
  changepassword = (typedtext) => {
    if (typedtext == '') {
      this.setState({ errorpassword: 'Password is required!' });
    }else if (typedtext != '') {
      this.setState({ errorpassword: '' });
    }

    this.setState({ password: typedtext });
  }
  render() {
    const {navigate} = this.props.navigation;
    let { username } = this.state;
    let { password } = this.state;
    return(
      <ScrollView style={{backgroundColor: "#FFF"}}>
        <View style={styles.wrapper}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.image}
              source={require('./klola.jpg')}
           />
           </View>
           <TextField style={styles.textfield} error={this.state.errorusername} label='Username' value={username} onChangeText={ this.changeusername }/>
           <PasswordInputText style={styles.textfield} error={this.state.errorpassword} label='Password' value={password} onChangeText={ this.changepassword }/>
           <Text style={styles.button} onPress={this.submitLogin}>LOGIN</Text>
           <Text style={styles.buttonwhite} onPress={() => alert("yo")}>Login with QR Code? <Text style={styles.textbold}>Please Scan QR</Text></Text>
           <Text style={styles.buttonwhite} onPress={() => navigate("ForgotPassword", {})}><Text style={{fontSize: 15}}>Forgot Password?</Text></Text>

         </View>



       </ScrollView>
    )
  }
}
