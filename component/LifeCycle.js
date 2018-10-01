import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Image  } from 'react-native';

class LifeCycle extends Component{
    constructor(props){
        super(props)
        console.log(`${Date.now()}. This is constructor`);
        this.state = {
            numberOfRefresh: 0
        };
        setInterval(() => {
            this.setState(prevState => {
                return{numberOfRefresh: prevState.numberOfRefresh + 1};
            });
        }, 2000); 
    }

    componentWillMount(){
        console.log(`${Date.now()}, Component Will Mount`);
    }

    componentDidMount(){
        console.log(`${Date.now()}, Component Did Mount`);
    }

    shouldComponentUpdate(){
        console.log(`${Date.now()}, Should Component Update`);
        return true;
    }
    componentWillUpdate() {
        console.log(`${Date.now()}, Component Will Update`);
    }

    componentDidUpdate() {
        console.log(`${Date.now()}, Component Did Update`);
        console.log('==================================');
    }

    render(){
        console.log(`${Date.now()}, render function`);
        return(
            <View style={{marginTop:50, marginLeft: 30}}>
                <Text>Nothing</Text>
                <Text>{this.state.numberOfRefresh}</Text>
                
            </View>
        );
    }

    // render() {    
    //     console.log(`${Math.floor(Date.now())}. This is render function`);         
    //     let textToDisplay = `Numbers of refresh: ${this.state.numberOfRefresh}`;   
    //     return (
    //         <View
    //             style={{
    //                 flex: 1,
    //                 marginTop: 100
    //             }}>     
    //             <Text>LifeCycle test</Text>
    //             <Text>{textToDisplay}</Text>           
    //         </View>
    //     );
    // }


}
export default class LifeCycleComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        var lifeCycle = <LifeCycle></LifeCycle>
        return(
            <View>{lifeCycle}</View>
        );
    }
}