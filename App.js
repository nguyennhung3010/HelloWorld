import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image  } from 'react-native';
import BasicFlatList from './component/BasicFlatList';

export default class App extends Component {
  render() {
    return (
        <View>
          <BasicFlatList />
        </View>
    );
  }
}
