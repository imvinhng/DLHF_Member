import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/bottom-tab/Home';

const Stack = createStackNavigator();

function Home(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                initialParams={{ loggedIn: false }}
            />
        </Stack.Navigator>
    )
}

export default Home;

