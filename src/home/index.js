import React, { Component } from "react";
import {StyleSheet} from "react-native";
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
  Icon,
  View
} from "native-base";

import {
  Image
} from "react-native";
import styles from "./styles";

import Dashboard from "./dashboard/index";
import Epayslip from "./epayslip/index";
import Account from "./myaccount/index";
import Myess from "./myess/index";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      page: <Dashboard/>,
      title: "Dashboard",
      heightgambar: 63
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      page: <Dashboard/>,
      title: "Dashboard",
      heightgambar: 63
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      page: <Myess/>,
      title: "My ESS",
      heightgambar: 63
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      page: <Epayslip/>,
      title: "E-Payslip",
      heightgambar: 63
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      page: <Account/>,
      title: "My Account",
      heightgambar: 63
    });
  }
  render() {

    return (
      <Container style={styles.container}>

          <Image
            style={{height:this.state.heightgambar, position: 'absolute', top: 0, left: 0}}
            source={require('../tutorial/slide/slide1.jpg')}
          />
          <Header style={{ backgroundColor: 'transparent' }}>
            <Left/>
            <Body>
              <Title style={{color: "white"}}>{this.state.title}</Title>
            </Body>
            <Right />
          </Header>


        {this.state.page}


        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon style={{color: "#01589a"}} active={this.state.tab1} name="home" />
              <Text style={styles.labelbutton}>Home</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon style={{color: "#01589a"}} active={this.state.tab2} name="paper" />
              <Text style={styles.labelbutton}>My ESS</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon style={{color: "#01589a"}} active={this.state.tab3} name="cash" />
              <Text style={styles.labelbutton}>E-Payslip</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon style={{color: "#01589a"}} active={this.state.tab4} name="person" />
              <Text style={styles.labelbutton}>My Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
