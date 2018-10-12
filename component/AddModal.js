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
    generateKey=(numberOfCharacter)=>{
        return require('random-string')({length:numberOfCharacter});
    }
    // resetTextInPut=() => {
    //     this.setState({
    //         newFoodName:'',
    //         newFoodDes:''
    //     });
    // }
    render() {
        return(
            //ref là tên tham chiếu như tên biến trỏ đến chính nó
            <Modal 
                ref='modal'
                style={{
                    width:screen.width*3/5, 
                    height: screen.height/3, 
                    justifyContent: 'center', 
                    shadowRadius: 10,
                    alignItems:'center',
                    borderRadius: Platform.OS === 'android'? 30: 0}}
                position='center' 
                onClosed = {() =>{
                    // alert('Modal closed!')
                }
            }>
                <Text style={{fontSize: 16, fontWeight:'bold'}}>New food's information </Text>
                <TextInput 
                    style={{
                        height:40,
                        // borderBottomColor:'grey',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        // borderBottomWidth: 1,
                        width: 150
                    }}
                    //cập nhật text vừa gõ vào state
                    onChangeText = {(text) => this.setState({newFoodName:text})}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
                />
                <TextInput 
                    style={{
                        height:40,
                        // borderBottomColor:'grey',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        // borderBottomWidth: 1,
                        width: 150
                    }}
                    onChangeText = {(text) => this.setState({newFoodDes:text})}
                    placeholder="Enter new food's des"
                    value={this.state.newFoodDes}
                    > 
                </TextInput>

                 <TouchableHighlight
                    onPress={() => {
                        if(this.state.newFoodName.length == 0 || this.state.newFoodDes.length == 0 ){
                            alert("You must enter food's name and des");
                            return;
                        }
                        const newKey = this.generateKey(24);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Devonshire_tea.jpg/240px-Devonshire_tea.jpg",
                            description: this.state.newFoodDes
                        };
                        flatListData.push(newFood);
                        
                        //in AddModal which is added in BasicFlatList have a prop is parentFlatList, refer to BasicFlatList
                        this.props.parentFlatList.refreshFlatList('1');
                        this.refs.modal.close();
                        // this.resetTextInPut();
                        // Reset value in TextInput
                        this.setState({
                            newFoodName:'',
                            newFoodDes:''
                        });
                        const x = `${JSON.stringify(newFood)}`;
                        alert(x);
                    }}

                 >
                    <View
                        style={{
                            marginTop: 20,
                            height:35,
                            alignContent:'center',
                            alignItems:'center',
                            justifyContent:'center',
                            width: 80,
                            backgroundColor:'mediumseagreen',
                            borderRadius:6
                        }}
                    >
                        <Text style={{color:'white', alignContent:'center'}}>save</Text>
                    </View>
                </TouchableHighlight>
            </Modal>
        );
    }
}