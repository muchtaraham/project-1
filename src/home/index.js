import React, { Component } from "react";
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
import styles from "./styles";

import Dashboard from "./home";
import Epayslip from "./epayslip";
import Account from "./account";
import Myess from "./myess";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      page: <Dashboard/>
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      page: <Dashboard/>
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      page: <Myess/>
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      page: <Epayslip/>
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      page: <Account/>
    });
  }
  render() {
    return (
      <Container style={styles.container}>



        {this.state.page}


        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
              <Icon style={{color: "#005a99"}} active={this.state.tab1} name="home" />
              <Text style={styles.labelbutton}>Home</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon style={{color: "#005a99"}} active={this.state.tab2} name="paper" />
              <Text style={styles.labelbutton}>My ESS</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
              <Icon style={{color: "#005a99"}} active={this.state.tab3} name="cash" />
              <Text style={styles.labelbutton}>E-Payslip</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon style={{color: "#005a99"}} active={this.state.tab4} name="person" />
              <Text style={styles.labelbutton}>My Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
