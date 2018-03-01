import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Button, TextInput } from 'react-native';
import styles from "./styles";
import { Navigation } from 'react-navigation';
import PasswordInputText from 'react-native-hide-show-password-input';
import { TextField } from 'react-native-material-textfield';


export default class ForgotPassword extends Component {
  static navigationOptions = {
    title: 'Forgot Password'
  };
  state = {
    email: '',
    erroremail:''
  };
  submitLogin = () => {
    if (this.state.email == '') {
      this.setState({ erroremail: 'Email is required!' });
    }else if (this.state.email != '') {
      this.setState({ erroremail: '' });
    }

    if (this.state.email != '') {
      alert("GO");
    }

  }

  changeemail = (typedtext) => {
    if (typedtext == '') {
      this.setState({ erroremail: 'Email is required!' });
    }else if (typedtext != '') {
      this.setState({ erroremail: '' });
    }

    this.setState({ email: typedtext });
  }
  render() {
    const {navigate} = this.props.navigation;
    let { email } = this.state;
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
           <TextField style={styles.textfield} error={this.state.erroremail} label='Email' value={email} onChangeText={ this.changeemail }/>
           <Text style={styles.textforgot}>We will send you an emailwith further instructions to reset your password</Text>
           <Text style={styles.button} onPress={this.submitLogin}>SEND</Text>

           <Text style={styles.buttonwhite} onPress={() => navigate("Login")}><Text style={{fontSize: 15}}>Back to Login</Text></Text>

         </View>



       </ScrollView>
    )
  }
}
