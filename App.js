// import React, { Component } from 'react';
// import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image  } from 'react-native';
// import BasicFlatList from './component/BasicFlatList';
// import BasicSectionList from './component/BasicSectionList';
// import LifeCycleComponent from './component/LifeCycle';
// import ListData from './component/Notification';
// import WarningDetail from './component/WarningDetail';
// import Flatlist from './component/Flatlist';
// import Warning from './component/Warning';
// // import Stack from './component/Route';
// export default class App extends Component {
//   render() {
//     return (
//         <View>
//           <Warning />
//           {/* <WarningDetail /> */}
//           {/* <ListData /> */}
//           {/* <Flatlist /> */}
//           {/* <LifeCycleComponent /> */}
//         </View>
//     );
//   }
// }

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Warning from './component/Warning';
import WarningDetail from './component/WarningDetail';

 class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          
          onPress={() => 
            alert(`${this.props.navigation.navigate('WARNING_DETAIL')}`)
          }
        />
      </View>
    );
  }
}

 class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator({
    Home: {
        screen: Warning,
      },
    WARNING_DETAIL: {
      screen: WarningDetail,
    },
    Details: {
        screen: DetailsScreen,
      },
    
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}