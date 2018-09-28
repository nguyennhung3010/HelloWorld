import React, {Component} from 'react';
import { FlatList, Text, View, StyleSheet, Image, Alert, Platform, SectionList  } from 'react-native';

import sectionListData from '../data/sectionListData';
class SectionListItem extends Component{
    render() {
        return(
            <View style={{flexDirection:'column', backgroundColor:'blue'}}>
                <Text style={styles.sectionListItem}>{this.props.item.name}</Text>
                <Text style={styles.sectionListItem}>{this.props.item.des}</Text>
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
export default class BasicSectionList extends Component{
    render() {
        return(
            <View style={{backgroundColor:'blue'}}>
                {/* <SectionList
                    renderItem={({item, index}) => {
                        return(
                            <SectionListItem item={item} index={index}>
                            </SectionListItem>
                        );
                    }}
                    sections={sectionListData}
                >
                </SectionList> */}
                <SectionList
                    renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                    )}
                    sections={[
                        {title: 'Title1', data: ['item1', 'item2']},
                        {title: 'Title2', data: ['item3', 'item4']},
                        {title: 'Title3', data: ['item5', 'item6']},
                    ]}
                    keyExtractor={(item, index) => item + index}
                />
            </View>
        );
    }
}