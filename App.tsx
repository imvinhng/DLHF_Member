/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/navigation/Main';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/register/Register';
import Register_PasswordSet from './src/screens/auth/register/Register_PasswordSet';
import Register_PersonalInfo from './src/screens/auth/register/Register_PersonalInfo';
import Register_Address from './src/screens/auth/register/Register_Address';
import Register_Complete from './src/screens/auth/register/Register_Complete';
import { OTP_Login, OTP_Register } from './src/screens/auth/OTP';
import Map from './src/screens/main/Map';
import ForgetPassword from './src/screens/auth/ForgetPassword';
import Notification from './src/screens/main/Notification';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function Auth(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Register_PasswordSet"
        component={Register_PasswordSet}
      />
      <Stack.Screen
        name="Register_PersonalInfo"
        component={Register_PersonalInfo}
      />
      <Stack.Screen
        name="Register_Address"
        component={Register_Address}
      />
      <Stack.Screen
        name="Register_Complete"
        component={Register_Complete}
      />
      <Stack.Screen
        name="OTP_Login"
        component={OTP_Login}
      />
      <Stack.Screen
        name="OTP_Register"
        component={OTP_Register}
      />
    </Stack.Navigator>
  )
}


function App(): JSX.Element {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
        {/* Main: BottomTab, Map, PersonalInfo, Notification, ...*/}
        <Stack.Screen
          name='Main'
          component={Main}
        />

        {/* Auth: Register, Login, ChangePassword, OTP*/}
        <Stack.Screen
          name='Auth'
          component={Auth}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
