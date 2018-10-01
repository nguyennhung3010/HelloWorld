import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image  } from 'react-native';
import BasicFlatList from './component/BasicFlatList';
import BasicSectionList from './component/BasicSectionList';
import LifeCycleComponent from './component/LifeCycle';
import ListData from './component/Notification';
export default class App extends Component {
  render() {
    return (
        <View>
          <ListData />
          {/* <BasicSectionList /> */}
          {/* <LifeCycleComponent /> */}
        </View>
    );
  }
}
