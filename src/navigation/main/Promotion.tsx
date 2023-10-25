import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Promotion_Main, Promotion_Popup } from '../../screens/bottom-tab/Promotion';

const Stack = createStackNavigator();

function Promotion(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName='PromotionScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='PromotionScreen'
                component={Promotion_Main}
            />
            <Stack.Screen
                name='PromotionPopup'
                component={Promotion_Popup}
            />
        </Stack.Navigator>
    )
}

export default Promotion;

