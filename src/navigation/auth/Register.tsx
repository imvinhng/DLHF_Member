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
import { OTP_Register } from '../../screens/auth/OTP';

const Stack = createStackNavigator();

function Register(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="RegisterAddressScreen"
                component={RegisterAddressScreen}
            />
            <Stack.Screen
                name="RegisterCompleteScreen"
                component={RegisterCompleteScreen}
            />
            <Stack.Screen
                name="RegisterPasswordSetScreen"
                component={RegisterPasswordSetScreen}
            />
            <Stack.Screen
                name="RegisterPersonalInfoScreen"
                component={RegisterPersonalInfoScreen}
            />
            <Stack.Screen
                name="OTPRegisterScreen"
                component={OTP_Register}
            />
        </Stack.Navigator>
    )
}


export default Register; 