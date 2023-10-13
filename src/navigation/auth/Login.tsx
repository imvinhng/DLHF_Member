import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import RegisterScreen from '../../screens/auth/register/Register';
import RegisterAddressScreen from '../../screens/auth/register/Register_Address';
import RegisterCompleteScreen from '../../screens/auth/register/Register_Complete';
import RegisterPasswordSetScreen from '../../screens/auth/register/Register_PasswordSet';
import RegisterPersonalInfoScreen from '../../screens/auth/register/Register_PersonalInfo';

const Stack = createStackNavigator();

import LoginScreen from '../../screens/auth/login/Login';
import { OTP_Login } from '../../screens/auth/OTP';

function Login(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="OTPLoginScreen"
                component={OTP_Login}
            />
        </Stack.Navigator>
    )
}


export default Login; 