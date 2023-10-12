import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { lightorange, white } from '../assets/style/Colors';

import LoginTab from './auth/Login';

import RegisterTab from './auth/Register';

const Stack = createStackNavigator();

function Auth(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="LoginTab"
                component={LoginTab}
            />
            <Stack.Screen
                name="RegisterTab"
                component={RegisterTab}
            />

        </Stack.Navigator>
    )
}


export default Auth; 