import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Badge,
  Left,
  Right,
  Body,
  Switch,
  Radio,
  Picker,
  Separator
} from "native-base";
import stylesios from "../myess/styles";
import stylesandroid from "../myess/stylesandroid";

const Item = Picker.Item;

class NHListIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: "key1",
      results: {
        items: []
      }
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  render() {
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }

    return (
      <Container style={styles.container}>


        <Content>

          <Separator bordered noTopBorder>
          <Text style={[styles.cardText], {color:'black'}}>Account</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor:'transparent'}}>
                <Icon name="ios-briefcase" style={styles.colorGrey} />
              </Button>
            </Left>
            <Body>
              <Text style={[styles.cardText]}>Employee Information</Text>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight, {fontSize:12}]}>Show Employee Information</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor:'transparent'}}>
                <Icon name="ios-person" style={styles.colorGrey} />
              </Button>
            </Left>
            <Body>
              <Text style={[styles.cardText]}>Account</Text>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight, {fontSize:12}]}>Manage your password and settings</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor:'transparent'}}>
                <Icon name="ios-settings-outline" style={styles.colorGrey} />
              </Button>
            </Left>
            <Body>
              <Text style={[styles.cardText]}>Settings</Text>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight, {fontSize:12}]}>Setting application</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <Separator bordered>
          <Text style={[styles.cardText], {color:'black'}}>Features</Text>
          </Separator>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor:'transparent'}}>
                <Icon name="ios-help-circle-outline" style={styles.colorGrey} />
              </Button>
            </Left>
            <Body>
              <Text style={[styles.cardText]}>Help</Text>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight, {fontSize:12}]}>Find the best answer for your question</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor:'transparent'}}>
                <Icon name="ios-alert-outline" style={styles.colorGrey} />
              </Button>
            </Left>
            <Body>
              <Text style={[styles.cardText]}>About Klola</Text>
              <Text style={[styles.cardText, styles.colorGrey, styles.textLight, {fontSize:12}]}>Application version 1.0.0</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <Separator bordered />
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor:'transparent'}}>
                <Icon name="ios-log-out" style={styles.colorGrey} />
              </Button>
            </Left>
            <Body>
              <Text>Log Out</Text>
            </Body>
            <Right>

            </Right>
          </ListItem>
          <Separator  />
        </Content>
      </Container>
    );
  }
}

export default NHListIcon;
