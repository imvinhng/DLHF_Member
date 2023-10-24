import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OrderScreen from '../../screens/bottom-tab/Order';

const Stack = createStackNavigator();

function Order(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='OrdersScreen'
                component={OrderScreen}
            />
        </Stack.Navigator>
    )
}

export default Order;

