import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StoreScreen from '../../screens/bottom-tab/Store';
import MapScreen from '../../screens/main/Map'

const Stack = createStackNavigator();

function Store(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='StoreScreen'
                component={StoreScreen}
            />
            <Stack.Screen
                name='MapScreen'
                component={MapScreen}
            />
        </Stack.Navigator>
    )
}

export default Store;

