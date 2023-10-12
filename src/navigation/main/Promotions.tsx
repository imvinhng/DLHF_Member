import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PromotionScreen from '../../screens/bottom-tab/Promotions';
import NotificationScreen from '../../screens/main/Notification';

const Stack = createStackNavigator();

function Promotions(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='PromotionsScreen'
                component={PromotionScreen}
            />
        </Stack.Navigator>
    )
}

export default Promotions;

