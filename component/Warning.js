import React, { Component } from 'react';
import { 
    FlatList, 
    ActivityIndicator, 
    Text, View, 
    StyleSheet, 
    Image, 
    ScrollView, 
    Dimensions, 
    TouchableHighlight, 
    Platform  } from 'react-native';
var screen = Dimensions.get('window');
const styles = StyleSheet.create({
    parent: {
        margin: 10,
        flexDirection:'column',
        // flex:1,
        height: screen.height
    },
    borderStyle:{
        borderRadius:3,
        borderColor:'grey', 
        borderWidth: 1,
    },
    buttonStyle:{
        borderRadius:3,
        borderColor:'grey', 
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center', 
        // backgroundColor: 'mediumseagreen',
        margin:10,

    }
});

export default class Warning extends Component{
    render(){
        return(
            <View style={[styles.parent, styles.borderStyle]}>
                <View style={{flexDirection:'column', flex:2}}>
                    <View style={{flex:3, justifyContent: 'center'}}>
                        <Text>VNPT</Text>
                    </View>
                    <View style={[styles.borderStyle, {flex:2, justifyContent: 'center'}]}>
                        <Text>Hướng dẫn</Text>
                    </View>
                </View>

                <View style={[{flex:7, marginTop: 1}]}></View>

                <View style={[styles.borderStyle, {flex:1}]}>
                    <View style={[styles.buttonStyle, {flex:1, flexDirection:'row', }]}>
                        <View style={{flex: 5}}></View>
                        <TouchableHighlight style={{justifyContent:'center', flex: 1, alignItems:'center', backgroundColor: 'mediumseagreen'}}>
                            <Text style={{ alignItems:'center'}}> Kích hoạt </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }   
}