import React, {Component} from 'react';
import { FlatList, Text, View, StyleSheet, Image, Alert, Platform, TouchableHighlight, Dimensions, TextInput } from 'react-native';
import flatListData from '../data/flatListData';
import Modal from 'react-native-modalbox'
import Button from 'react-native-button'

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newFoodName:'',
            newFoodDes:''
        }
    }
    showAddModal=()=>{
        this.refs.modal.open();
    }
    render() {
        return(
            //ref là tên tham chiếu như tên biến trỏ đến chính nó
            <Modal 
                style={{
                    width:screen.width-180, 
                    height: 280, 
                    justifyContent: 'center', 
                    shadowRadius: 10,
                    alignItems:'center',
                    borderRadius: Platform.OS === 'android'? 30: 0}}
                ref='modal'
                position='center' 
                onClosed = {() =>{
                    alert('Modal closed!')
                }
            }>
            <Text style={{fontSize: 16, fontWeight:'bold'}}>New food's information </Text>
            <TextInput 
                style={{height:40,}}
                //cập nhật text vừa gõ vào state
                onChangeText = {(text) => this.setState({newFoodName:text})}
                placeholder="Enter new food's name"
                value={this.state.newFoodName}
            />
            {/* </TextInput> */}
            <TextInput style={{fontSize: 16, fontWeight:'bold'}}> </TextInput>
            </Modal>
        );
    }
}