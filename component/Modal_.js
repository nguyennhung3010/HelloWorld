import React, {Component} from 'react';
import { 
    FlatList, Text, View, StyleSheet, Image, Alert,
    Platform, TouchableHighlight, Dimensions, TextInput, CheckBox } from 'react-native';
import flatListData from '../data/flatListData';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');

const styles = StyleSheet.create({
    parent: {
        margin: 20,
        flexDirection:'column',
        flex:1,
        justifyContent:'center'
    },
    text:{
        fontSize:16,
        paddingTop:10, 
        color: 'black',
    },
    actionButtonStyle:{
        flex:2,
        marginTop: 25,
        marginLeft: 10,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',

    },
    cancelButtonStyle:{
        flex:1,
        marginTop: 25,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    line:{
        backgroundColor:'grey', 
        height:2
    },

});
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check:false,
            groupMessage:'',
            newFoodDes:''
        }
    }

    _onCheckBox(){
        this.setState({
            // if(check)
            check: !this.state.check
        });
    }

    showModal=()=>{
        this.refs.modal.open();
    }
    generateKey=(numberOfCharacter)=>{
        return require('random-string')({length:numberOfCharacter});
    }
    resetTextInPut=() => {
        this.setState({
            groupMessage:'',
            newFoodDes:''
        });
    }

    render() {
        return(
            //ref là tên tham chiếu như tên biến trỏ đến chính nó
            <Modal 
                ref='modal'
                style={{
                    width:screen.width*3/5, 
                    height: screen.height*2/5, 
                    justifyContent: 'center', 
                    shadowRadius: 10,
                    // alignItems:'center',
                    borderRadius: Platform.OS === 'android'? 10: 0}}
                position='center' 
                onClosed = {() =>{
                    // alert('Modal closed!')
                }
            }>
                <View style={styles.parent}>
                    <Text style={{flex:1, fontSize: 20, fontWeight:'bold', color:'black'}}>Xác nhận </Text>
                    <View style={{flex:1, }}>
                        <Text style={[styles.text]}>Bạn có muốn gửi truyền thông báo và tin nhắn nhóm </Text>
                        <Text style={{fontSize:10, color:'green' }}>Nhập tin nhắn mới </Text>
                    </View>
                    
                    <TextInput 
                        style={{
                            // flex:1,  
                            // width: 150
                        }}
                        //cập nhật text vừa gõ vào state
                        onChangeText = {(text) => this.setState({groupMessage:text})}
                        value={this.state.groupMessage}
                    />
                    <View style={{flex:1, flexDirection:'row'}}>
                        <Text style={[styles.text, {flex: 9}]}>Đội xử lý hóa học</Text>
                        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                            <CheckBox value={this.state.check} onChange={()=>this._onCheckBox()} />
                        </View>
                    </View>
                    <View style={[styles.line]}></View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={[styles.text, {flex: 9}]}>Đội cứu hộ</Text>
                        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                            <CheckBox value={this.state.check} onChange={()=>this._onCheckBox()} />
                        </View>
                    </View>
                    <View style={[styles.line]}></View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <Text style={[styles.text, {flex: 9}]}>Phòng truyền thông thông tin</Text>
                        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center'}}>
                            <CheckBox value={this.state.check} onChange={()=>this._onCheckBox()} />
                        </View>
                    </View>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View
                            style={{
                                flex:7
                            }}
                        >
                        </View>
                        <TouchableHighlight style={styles.cancelButtonStyle}
                            onPress={() => {
                                if(this.state.groupMessage.length == 0 || this.state.newFoodDes.length == 0 ){
                                    alert("You must enter food's name and des");
                                    return;
                                }
                            }}
                        >
                            <View
                                style={{
                                }}
                            >
                                <Text style={{color:'green', alignContent:'center'}}>HỦY</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.actionButtonStyle}
                            onPress={() => {
                                if(this.state.groupMessage.length == 0 || this.state.newFoodDes.length == 0 ){
                                    alert("You must enter food's name and des");
                                    return;
                                }
                                const newKey = this.generateKey(24);
                                const newFood = {
                                    key: newKey,
                                    name: this.state.groupMessage,
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
                                    groupMessage:'',
                                    newFoodDes:''
                                });
                                const x = `${JSON.stringify(newFood)}`;
                                alert(x);
                            }}

                        >
                            <View
                                style={{
                                }}
                            >
                                <Text style={{color:'green', alignContent:'center'}}>KÍCH HOẠT</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        );
    }
}