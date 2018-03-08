import React, { Component } from "react";
import {
  Text,
  Container,
  Header,
  Title,
  Content,
  Tabs,
  Tab,
  Icon,
  View,
  TabHeading
} from "native-base";
import {StyleSheet, Platform} from "react-native";

import stylesios from "./styles";
import stylesandroid from "./stylesandroid";

import Leave from "./leave.js";
import Medical from "./medical.js";
import Overtime from "./overtime.js";
import Permit from "./permit.js";
import Reimburse from "./reimburse.js";
export default class Myess extends Component {
  render() {
    var styles = stylesandroid;
    if (Platform.OS === 'ios') {
      styles = stylesios;
    }
    return (
      <Container>
      <Tabs style={styles.Tabs}>
        <Tab
          heading={
            <TabHeading style={styles.TabHeading}>
            <View>
              <Icon style={styles.iconColor} name="list-box" />
              <Text style={styles.textTab}>Permit</Text>
              </View>
            </TabHeading>
          }
        >
          <Permit />
        </Tab>
        <Tab
          heading={
            <TabHeading style={styles.TabHeading}>
            <View>
              <Icon style={styles.iconColor} name="clock" />
              <Text style={styles.textTab}>Overtime</Text>
              </View>
            </TabHeading>
          }
        >
          <Overtime />
        </Tab>

        <Tab
          heading={
            <TabHeading style={styles.TabHeading}>
            <View>
              <Icon style={styles.iconColor} name="calendar" />
              <Text style={styles.textTab}>Leave</Text>
              </View>
            </TabHeading>
          }
        >
          <Leave />
        </Tab>
        <Tab
          heading={
            <TabHeading style={styles.TabHeading}>
            <View>
              <Icon style={styles.iconColor} name="medical" />
              <Text style={styles.textTab}>Medical</Text>
              </View>
            </TabHeading>
          }
        >
          <Medical />
        </Tab>
        <Tab
          heading={
            <TabHeading style={styles.TabHeading}>
            <View>
              <Icon style={styles.iconColor} name="cash" />
              <Text style={styles.textTab}>Reimburse</Text>
              </View>
            </TabHeading>
          }
        >
          <Reimburse />
        </Tab>
      </Tabs>
      </Container>
    );
  }
}
