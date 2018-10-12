import React, { Component } from 'react';
import AddModal from './Modal';
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
    borderStyle_parts:{
        borderBottomRightRadius:3,
        borderBottomLeftRadius:3,
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
    },
    fixedTextStyle:{
        fontSize:20,
        color:'black',
        padding:5
    }
});

export default class WarningDetail extends Component{
    constructor(props) {
        super(props);
        this.state= ({
            deleteRowKey: null,
            foodsFromServer:[]
        })
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    _onPressAdd() {
        // alert('You add item');
        //showModal() from Modal
        this.refs.modal.showModal();
    }
    render(){
        const { navigate } = this.props.navigation
        return(
            <ScrollView>
                <View style={[styles.parent, styles.borderStyle]}>
                    <View style={{flexDirection:'column', flex:2}}>
                        <View style={{flex:3, justifyContent: 'center'}}>
                            <Text style={[styles.fixedTextStyle, {color:'green', marginLeft:5}]}>VNPT</Text>
                        </View>
                        <View style={[styles.borderStyle, {flex:2, justifyContent: 'center'}]}>
                            <Text style={[styles.fixedTextStyle, {marginLeft:5}]}>Hướng dẫn</Text>
                        </View>
                    </View>

                    <View style={[{flex:7, marginTop: 1}]}></View>

                    <View style={[styles.borderStyle_parts, {flex:1}]}>
                        <View style={[styles.buttonStyle, {flex:1, flexDirection:'row', }]}>
                            <View style={{flex: 5}}></View>
                            <TouchableHighlight 
                                style={{
                                    justifyContent:'center',
                                    flex: 1, alignItems:'center',
                                    //  backgroundColor: 'mediumseagreen'
                                    }}
                                onPress={this._onPressAdd}
                            >
                                <Text style={[styles.fixedTextStyle, { alignItems:'center', color: 'mediumseagreen'}]}> Kích hoạt </Text>
                            </TouchableHighlight>
                        </View>
                    </View>

                    <AddModal ref={'modal'} parentFlatList={this}>
                    
                    </AddModal>
                </View>
            </ScrollView>
        );
    }   
}