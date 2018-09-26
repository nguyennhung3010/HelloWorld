/*
this contain the functions that send GET, POST, DELETE, PUT request to server
*/
import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, SectionList, Alert, Platform  } from 'react-native';
const apiGetAllFood = ''
//async: hàm thực hiện không đồng bộ, send and receive data from server
async function getFoodFromServer() {
    try{
        // get data from server
        let response = await fetch(apiGetAllFood);
        // transform to json
        let responseJson = await response.json();
        // type of Object: 
        /* data: 
            	0:
                _id:
                name:
                imageUrl:
                des:
            1:
                _id:
                name:
                imageUrl:
                des: */
        return responseJson.data;
    }catch(error) {

    }
}
export {getFoodFromServer}