import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Promotions_Main } from '../../screens/bottom-tab/Promotions';

const Stack = createStackNavigator();

function Promotions(): JSX.Element {
    return (
        <Stack.Navigator initialRouteName='PromotionsScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='PromotionsScreen'
                component={Promotions_Main}
            />
        </Stack.Navigator>
    )
}

export default Promotions;

