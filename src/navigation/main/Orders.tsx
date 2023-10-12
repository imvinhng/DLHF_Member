import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrdersScreen from '../../screens/bottom-tab/Orders';

const Stack = createStackNavigator();

function Orders(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='OrdersScreen'
                component={OrdersScreen}
            />
        </Stack.Navigator>
    )
}

export default Orders;

