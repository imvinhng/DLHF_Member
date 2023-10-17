import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MoreScreen from '../../screens/bottom-tab/More';
import PersonalInfoScreen from '../../screens/main/more/PersonalInfo';
import OrderHistoryScreen from '../../screens/main/more/OrderHistory';
import OrderDetailScreen from '../../screens/main/more/OrderDetail';
import AnalyticsScreen from '../../screens/main/more/Analytics';
import MemberPolicyScreen from '../../screens/main/more/MemberPolicy';

import NotificationScreen from '../../screens/main/utils/Notification';

const Stack = createStackNavigator();

function More(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='MoreScreen'
                component={MoreScreen}
            />
            <Stack.Screen
                name='PersonalInfoScreen'
                component={PersonalInfoScreen}
            />
            <Stack.Screen
                name='OrderHistoryScreen'
                component={OrderHistoryScreen}
            />
            <Stack.Screen
                name='OrderDetailScreen'
                component={OrderDetailScreen}
            />
            <Stack.Screen
                name='AnalyticsScreen'
                component={AnalyticsScreen}
            />
            <Stack.Screen
                name='NotificationScreen'
                component={NotificationScreen}
            />
            <Stack.Screen
                name='MemberPolicyScreen'
                component={MemberPolicyScreen}
            />
        </Stack.Navigator>
    )
}

export default More;

