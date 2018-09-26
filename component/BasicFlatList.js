import React, {Component} from 'react';
import { FlatList, Text, View, StyleSheet, Image, Alert, Platform, TouchableHighlight  } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from './AddModal';
// import {getFoodFromServer} from '../networking/server';
class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {   
                        const deletingRow = this.state.activeRowKey; 
                        Alert.alert(
                            'Alert title',
                            'Are u want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel press'), style: 'cancel'},
                                {text: 'yes', onPress: () => {
                                    // splice to delete
                                    flatListData.splice(this.props.index, 1);
                                    // Refrest FlastList, reload UI
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }}
                            ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            secId: 1
        };
        return( 
            <Swipeout {...swipeSetting}>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1, backgroundColor:'mediumseagreen', flexDirection:'row'}}>
                        <Image
                            source={{uri:this.props.item.imageUrl}}
                            style={{width:100, height:100, margin: 5}}
                        >
                        </Image>
                        
                        <View style={{flexDirection:'column', flex:1}}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.des}</Text>
                        </View>
                    </View>
                    <View style={{height:1, color:'white'}}>

                    </View>
                    <Text></Text>
                </View>
            </Swipeout>
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

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state= ({
            deleteRowKey: null,
        })
        //if haven't this line, call _onPressAdd() will be error, because this.refs = null
        //this._onPressAdd this: is _onPressAdd
        // this._onPressAdd.bind(this)=> this: BasicFlatList's Object
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return{deleteRowKey:deleteKey};
        });
    }
    _onPressAdd() {
        // alert('You add item');
        //showAddModal() from AddModal
        this.refs.addModal.showAddModal();
    }
  render() {
    return (
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
                data = {flatListData}
                renderItem = {({item, index}) => {
                    // console.log(`item=${JSON.stringify(item)}, index = ${index}`);
                    return(
                        //parentFlatList = {this}: Make FlatList as props of FlatListItem
                        <FlatListItem item = {item} index = {index} parentFlatList = {this}>
                        </FlatListItem>
                    );
                }}
            >
            </FlatList>
            
            <AddModal ref={'addModal'} parentFlatList={this}>
                
            </AddModal>
        </View>
    );
}
}
