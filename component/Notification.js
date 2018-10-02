import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image, ScrollView, Dimensions  } from 'react-native';
import flatListData from '../data/flatListData';
import nonActiveCrisisList from '../data/constData';

var screen = Dimensions.get('window');
class Item extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render(){
        return(
            <View style={styles.flatListItem}>
                <TouchableHighLight>
                    <Image
                        source={{uri:this.props.item.imageUrl}}
                        style={styles.imageStyle}
                    />
                    <View>
                        <Text> {this.props.item.value}</Text>
                        <Text> {this.props.item.description}</Text>
                    </View>
                </TouchableHighLight>
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
    },
    titleText:{
        fontWeight:'bold',
        color:'#117711',
        margin:5
    }
});

export default class ListData extends Component{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <ScrollView>
                <View style={{flex:1, flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Devonshire_tea.jpg/240px-Devonshire_tea.jpg'}}
                            style={{width:screen.width, height: screen.height*2/5}}
                        />
                        <Text style={styles.titleText}>Cảnh báo khủng hoảng chưa kích hoạt</Text>
                        <View style={{height:1, backgroundColor:'#117711'}}></View>
                    </View>
                    <View style={{margin:10, flex:1}}>
                        <FlatList 
                            style={styles.flatList}
                            data = {flatListData}
                            renderItem = {({item, index})=>{
                                return(<Item item = {item} index = {index}></Item>);
                            }}
                        >
                        </FlatList>
                    </View>
                </View>
            </ScrollView>
        );
    }
}