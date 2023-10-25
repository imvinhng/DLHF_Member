import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginTab from './auth/Login';
import RegisterTab from './auth/Register';

const Stack = createStackNavigator();

function Auth(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Login"
                component={LoginTab}
            />
            <Stack.Screen
                name="Register"
                component={RegisterTab}
            />

        </Stack.Navigator>
    )
}


export default Auth; 