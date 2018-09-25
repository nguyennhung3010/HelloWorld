//https://www.youtube.com/watch?v=6gwqHtVNQSw&index=19&list=PLWBrqglnjNl31S91FFE63DtuRc9v9LSGl
import React, {component} from 'react';
import {AppRegistry, View,Text, StyleSheet, FlatList, Alert} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

//an item component for flatlist
class FlatListItem extends component {
    constructor(props){
        super(props);
        this.state = {
            //this state saved your key of deleting object (flatListData item)
            activeRowKey: null
        };
    }
    render() {
        //this object contain the swipeOut's props 
        const swipeSetting = {
            autoClose: true,
            onClose:(secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({activeRowKey: null})
                }
            },
            onOpen:(secId, rowId, direction) => {
                this.setState({activeRowKey: this.props.item.key})
            },
            //button delete, 
            right: [ {
                // event when on press butto delete
                onPress:() => {
                    const deletingRow = this.state.activeRowKey;
                    Alert.alert(
                        'Alert',
                        'Are you sure you want to delete? ',
                        [
                            {text: 'No', onPress: () => console.log('cancel press'), style: 'cancel'},
                            {text: 'Yes', onPress: () => {
                                // remove 1 element in an array at index
                                flatListData.slice(this.props.index, 1)
                                //refresh FlatList
                                this.props.parentFlatList.refreshFlatList(deletingRow);
                            }}
                        ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ],
            // index of item in flatList
            rowId: this.props.index,
            sectionId:1

        };

        return(
            //Sd swipeOut để delete 1 item, [...] kiểu dùng nhiều props
            <Swipeout {...swipeSetting}>
                <View style={{
                    flex:1, 
                    flexDirection:'column',
                    //nếu item chẵn thì màu blue
                    backgroundColor: this.item.index % 2 == 0? 'blue':'red'
                }}>
                    <View style={{
                        flex:1, 
                        flexDirection:'row',
                        //nếu item chẵn thì màu blue
                        backgroundColor: this.item.index % 2 == 0? 'blue':'red'
                    }}>
                        <Image
                            source={{uri=this.props.item.image}}
                            style={{width: 108, height: 108, margin: 5}}
                        ></Image>
                        <View style={{flexDirection:'column'}}>
                            <Text style = {styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style = {styles.flatListItem}>{this.props.item.des}</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor: 'white', height: 1}}></View>
                </View>
            </Swipeout>
            
        );
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
});

export default class BasicFlatlist extends component {
    constructor(props){
        super(props);
        this.state = {
            //key of deleting object
            deleteRowKey: null
        };
    }
    refreshFlatList = (deleteKey) => {
        // if change state => UI is changed
        this.setState((prevState) => {
            return{
                deleteRowKey: deleteKey
            };
        });
    }
    render() {
        return(
            <View style={{flex:1, marginTop:25}}>
                <FlatList
                    data={flatListData}
                    renderItem={(item, index) => {
                        //console.log('item = ${JSON.stringify(item)}), index = ${index}');
                        //return từng hàng 1
                        return(
                            //item và index tự định nghĩa là 2  props của FlatListItem
                            <FlatListItem item={item} index={index} 
                            //make FlatList as props of FlatListItem
                            parentFlatList={this}>
                            </FlatListItem>
                        );
                    }}
                >
                </FlatList>
            </View>
        );
    }
}