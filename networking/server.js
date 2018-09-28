/*
this contain the functions that send GET, POST, DELETE, PUT request to server
*/
import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, SectionList, Alert, Platform  } from 'react-native';
const apiGetAllFood = 'https://www.getpostman.com/collections/3e80f9df2c625cf261b4';
const apiGetAllMovie = 'https://facebook.github.io/react-native/movies.json';
//async: hàm thực hiện không đồng bộ, send and receive data from server
async function getFoodsFromServer() {
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
       console.log(responseJson.requests[0].queryParams);
        return responseJson.requests[0].queryParams;
    }catch(error) {

    }
}
export {getFoodsFromServer}