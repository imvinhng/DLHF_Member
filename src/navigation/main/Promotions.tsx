import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Promotions_Main, Promotions_Popup } from '../../screens/bottom-tab/Promotions';

const Stack = createStackNavigator();

function Promotions(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName='PromotionsScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='PromotionsScreen'
                component={Promotions_Main}
            />
            <Stack.Screen
                name='PromotionsPopup'
                component={Promotions_Popup}
            />
        </Stack.Navigator>
    )
}

export default Promotions;

