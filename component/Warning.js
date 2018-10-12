import React, {Component} from 'react';
import { FlatList, Text, View, StyleSheet, Image, Alert, 
    Platform, TouchableHighlight, TouchableOpacity, ScrollView  } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import {getFoodsFromServer} from '../networking/server';
import WarningDetail from './WarningDetail';
// import { WARNING_DETAIL } from './Route';

class FlatListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
        // this._Goto=this._Goto.bind(this);
    }

    _Goto=()=>{
        // alert(`${ this.props.parentFlatList.props.navigation.navigate('WARNING_DETAIL')}`);
        this.props.parentFlatList.props.navigation.navigate('WARNING_DETAIL')
    }

    render() {    
        return( 
            <TouchableOpacity
                onPress={
                    this._Goto
                }
            >
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1, backgroundColor:'mediumseagreen', flexDirection:'row'}}>
                        <Image
                            source={{uri:this.props.item.imageUrl}}
                            style={{width:100, height:100, margin: 5}}
                        >
                        </Image>
                        
                        <View style={{flexDirection:'column', flex:1}}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.value}</Text>
                        </View>
                    </View>
                    <View style={{height:1, color:'white'}}>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 5,
        fontSize: 16
    }
});

export default class Warning extends Component {
    constructor(props) {
        super(props);
        this.state= ({
            deleteRowKey: null,
            foodsFromServer:[]
        })
    }
    
    
  render() {
    return (
        <ScrollView>
            <View style={{marginTop:Platform === 'ios'? 34: 22}}>
                <View style={{backgroundColor:'tomato', height: 64, justifyContent: "flex-end", flexDirection:'row', alignItems: 'center'}}>
                    <TouchableHighlight style={{marginRight: 10}} onPress={this._onPressAdd}>
                        <Image
                            style={{width: 35, height: 35}}
                            source={require('../icon/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>

                <FlatList 
                    ref={'flatList'}
                    data = {flatListData}
                    // data = {this.state.foodsFromServer}
                    renderItem = {({item, index}) => {
                        console.log(`item=${JSON.stringify(item)}, index = ${index}`);
                        return(
                            //parentFlatList = {this}: Make FlatList as props of FlatListItem
                            <FlatListItem item = {item} index = {index} parentFlatList = {this}>
                            </FlatListItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        </ScrollView>
    );
}

// render() {
//     return(<View><Text>OK</Text></View>);
// }
}
