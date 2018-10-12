import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Warning } from './Warning';
import { WarningDetail } from './WarningDetail';
export const Stack = StackNavigator({
    // WARNING: {
    //     screen: Warning
    // },
    WARNING: {
        screen: Warning
    },
    WARNING_DETAIL: {
        screen: WarningDetail
    }
}) 
// export const WARNING_DETAIL = 'WarningDetail';