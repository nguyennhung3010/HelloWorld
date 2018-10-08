import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image  } from 'react-native';
import BasicFlatList from './component/BasicFlatList';
import BasicSectionList from './component/BasicSectionList';
import LifeCycleComponent from './component/LifeCycle';
import ListData from './component/Notification';
import Warning from './component/Warning';
export default class App extends Component {
  render() {
    return (
        <View>
          <Warning />
          {/* <ListData /> */}
          {/* <BasicSectionList /> */}
          {/* <LifeCycleComponent /> */}
        </View>
    );
  }
}
