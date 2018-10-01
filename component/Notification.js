import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image  } from 'react-native';
import flatListData from '../data/flatListData';
import nonActiveCrisisList from '../data/constData';
class Item extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return(
            <View style={styles.flatListItem}>
                <Image
                    source={{uri:this.props.item.imageUrl}}
                    style={styles.imageStyle}
                />
                <View>
                    <Text> {this.props.item.value}</Text>
                    <Text> {this.props.item.description}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatList: {
        // marginTop:10, 
    },
    flatListItem: {
        // margin:5, 
        marginTop: 15,
        borderRadius:5, 
        shadowRadius: 10, 
        // height:70, 
        borderColor:'grey', 
        borderWidth: 1,
        // backgroundColor: 'mediumseagreen',
        flex:1,
        flexDirection:'row',
        color: 'grey',
        // padding: 10,
        fontSize: 16,  
    },
    imageStyle:{
        width:100,
        height:100,
    }
});

export default class ListData extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
           
            <View style={{margin:10}}>
                <Text>{nonActiveCrisisList}</Text>
                <Text>NON-ACTIVE CRISIS LIST</Text>
                <FlatList 
                    style={styles.flatList}
                    data = {flatListData}
                    renderItem = {({item, index})=>{
                        return(<Item item = {item} index = {index}></Item>);
                    }}
                >
                </FlatList>
            </View>

        );
    }
}