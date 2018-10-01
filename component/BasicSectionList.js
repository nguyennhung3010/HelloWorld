// import React, {Component} from 'react';
// import { FlatList, Text, View, StyleSheet, Image, Alert, Platform, SectionList  } from 'react-native';

// import sectionListData from '../data/sectionListData';
import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
import { sectionListData } from '../data/sectionListData';
class SectionListItem extends Component{
    render() {
        return(
            <View style={{flexDirection:'column', backgroundColor:'mediumseagreen'}}>
                <Text style={styles.sectionListItem}>{this.props.item.name}</Text>
                <Text style={styles.sectionListItem}>{this.props.item.des}</Text>
                <View style={{backgroundColor: 'rgb(77,120, 140)', height: 1, margin: 4, marginLeft: 20,marginRight: 10}}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sectionListItem: {
        fontSize: 16,
        margin: 20,
        color:'white'
    }
});

class SectionHeader extends Component{
    render() {
        return(
            <View style={{flex: 1, backgroundColor:'rgb(77,120, 140)'}}>
                <Text style={{fontSize:16, fontWeight:'bold', color:'white', margin:20}}>
                    {this.props.section.title}
                </Text>
            </View>
        );
    }
}


// const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override{item}</Text>

export default class BasicSectionList extends Component{
    render() {
        return(
            <View style={{  marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <SectionList
                    renderItem={({item, index}) => {
                        // console.log(`item=${JSON.stringify(item)}, index = ${index}`);
                        return(
                            <SectionListItem item={item} index={index}>
                            </SectionListItem>
                        );
                    }}
                    sections={sectionListData}
                    renderSectionHeader={({section})=>{
                        return(<SectionHeader section={section}/>);
                    }}
                    keyExtractor={(item, index) => item + index}
                >
                </SectionList>
                {/* <SectionList
                    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold', marginTop:15, borderRadius:3, color:'green', backgroundColor:'yellow'}}>{title}</Text>
                    )}
                    sections={[
                        {title: 'Title1', data: ['item1', 'item2']},
                        {title: 'Title2', data: ['item3', 'item4']},
                        {title: 'Title3', data: ['item5', 'item6']},
                    ]}
                    keyExtractor={(item, index) => item + index}
                /> */}
            </View>
        );
    }
}