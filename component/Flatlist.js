import React, {Component} from 'react';
import { FlatList, Text, View, StyleSheet, Image, Alert, Platform, TouchableHighlight, CheckBox  } from 'react-native';
import flatListData from '../data/flatListData';
import {getFoodsFromServer} from '../networking/server';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check: false, 
            activeRowKey: null
        }
    }

    _onCheckBox(){
        this.setState({
            check: !this.state.check
        });
    }

    render() {
        return( 
            <View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={[styles.text, {flex: 9}]}>Đội xử lý hóa học</Text>
                    <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                        <CheckBox value={this.state.check} onChange={()=>this._onCheckBox()} />
                    </View>
                </View>
                <View style={styles.line}></View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 5,
        fontSize: 16
    },
    text:{
        fontSize:16,
        paddingTop:10, 
        color: 'black',
    },
    line:{
        // marginTop:2,
        marginTop:5,
        backgroundColor:'grey', 
        height:2
    },
});

export default class Flatlist extends Component {
    constructor(props) {
        super(props);
        this.state= ({
            deleteRowKey: null,
            foodsFromServer:[]
        })
        //if haven't this line, call _onPressAdd() will be error, because this.refs = null, explaned
        // this._onPressAdd this: is _onPressAdd
        // this._onPressAdd.bind(this)=> this: BasicFlatList's Object
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    componentDidMount(){
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getFoodsFromServer().then((foods) => {
            this.setState({foodsFromServer: foods})
        }).catch((error) => {
            this.setState({foodsFromServer: []});
        });
    }
    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            // alert("OK");
            return{deleteRowKey:deleteKey};
            
        });
        //after refresh, auto go to end of FlatList
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        // alert('You add item');
        //showAddModal() from AddModal
        this.refs.addModal.showAddModal();
    }
  render() {
    return (
        <View style={{marginTop:Platform === 'ios'? 34: 22}}>
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
    );
}
}
