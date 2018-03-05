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

import Leave from "./leave.js";
import Medical from "./medical.js";
import Overtime from "./overtime.js";
import Permit from "./permit.js";
import Reimburse from "./reimburse.js";
export default class Myess extends Component {
  render() {

    return (
      <Content>
      <Tabs>
        <Tab
          heading={
            <TabHeading>
            <View>
              <Icon style={{alignSelf:"center", color: "#01589a"}} name="list-box" />
              <Text style={{alignSelf:"center", color: "#01589a", fontSize: 12, top: -4}}>Permit</Text>
              </View>
            </TabHeading>
          }
        >
          <Permit />
        </Tab>
        <Tab
          heading={
            <TabHeading>
            <View>
              <Icon style={{alignSelf:"center", color: "#01589a"}} name="clock" />
              <Text style={{alignSelf:"center", color: "#01589a", fontSize: 12, top: -4}}>Overtime</Text>
              </View>
            </TabHeading>
          }
        >
          <Overtime />
        </Tab>

        <Tab
          heading={
            <TabHeading>
            <View>
              <Icon style={{alignSelf:"center", color: "#01589a"}} name="calendar" />
              <Text style={{alignSelf:"center", color: "#01589a", fontSize: 12, top: -4}}>Leave</Text>
              </View>
            </TabHeading>
          }
        >
          <Leave />
        </Tab>
        <Tab
          heading={
            <TabHeading>
            <View>
              <Icon style={{alignSelf:"center", color: "#01589a"}} name="medical" />
              <Text style={{alignSelf:"center", color: "#01589a", fontSize: 12, top: -4}}>Medical</Text>
              </View>
            </TabHeading>
          }
        >
          <Medical />
        </Tab>
        <Tab
          heading={
            <TabHeading>
            <View>
              <Icon style={{alignSelf:"center", color: "#01589a"}} name="cash" />
              <Text style={{alignSelf:"center", color: "#01589a", fontSize: 12, top: -4}}>Reimburse</Text>
              </View>
            </TabHeading>
          }
        >
          <Reimburse />
        </Tab>
      </Tabs>
      </Content>
    );
  }
}
