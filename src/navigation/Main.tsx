import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { lightorange, white } from '../assets/style/Colors';

import Home from './main/Home';
import Order from './main/Order';
import Store from './main/Store';
import Promotion from './main/Promotion';
import More from './main/More';

const Tab = createBottomTabNavigator();

function Main(): JSX.Element {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName = '';
                    size = focused ? 25 : 20;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Order') {
                        iconName = 'shopping-cart';
                    } else if (route.name === 'Store') {
                        iconName = 'map-marker-alt';
                    } else if (route.name === 'Promotion') {
                        iconName = 'gift';
                    } else if (route.name === 'More') {
                        iconName = 'bars';
                    }
                    return (
                        <FontAwesome5 name={iconName} size={size} color={color} />
                    )
                },
                tabBarActiveTintColor: lightorange,
                tabBarInactiveTintColor: '#555',
                tabBarActiveBackgroundColor: white,
                tabBarInactiveBackgroundColor: white,
                tabBarShowLabel: true,
                fontSize: 18,
                headerShown: false,
            })}>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Order"
                component={Order}
            />
            <Tab.Screen
                name="Store"
                component={Store}
            />

            <Tab.Screen
                name="Promotion"
                component={Promotion}
            />
            <Tab.Screen
                name="More"
                component={More}
            />
        </Tab.Navigator>)
}

export default Main; 