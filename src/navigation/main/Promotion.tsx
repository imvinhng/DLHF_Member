import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Promotion_Main, Promotion_Popup } from '../../screens/bottom-tab/Promotion';

const Stack = createStackNavigator();

function Promotion(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName='PromotionsScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='PromotionsScreen'
                component={Promotion_Main}
            />
            <Stack.Screen
                name='PromotionsPopup'
                component={Promotion_Popup}
            />
        </Stack.Navigator>
    )
}

export default Promotion;

