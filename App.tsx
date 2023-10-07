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
import Home from './src/screens/main/bottom-tab/Home';
import Orders from './src/screens/main/bottom-tab/Orders';
import Store from './src/screens/main/bottom-tab/Store';
import Promotions from './src/screens/main/bottom-tab/Promotions';
import More from './src/screens/main/bottom-tab/More';
import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/register/Register';
import PersonalInfo from './src/screens/main/PersonalInfo';
import Register_PasswordSet from './src/screens/auth/register/Register_PasswordSet';
import Register_PersonalInfo from './src/screens/auth/register/Register_PersonalInfo';
import Register_Address from './src/screens/auth/register/Register_Address';
import Register_Complete from './src/screens/auth/register/Register_Complete';
import { OTP_Login, OTP_Register } from './src/screens/auth/OTP';
import Map from './src/screens/main/Map';
import Shop_Detail from './src/screens/main/Shop_Detail';
import Notification from './src/screens/main/Notification';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Main(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Notification'
        component={Notification}
      />
      <Stack.Screen
        name='PersonalInfo'
        component={PersonalInfo}
      />
      <Stack.Screen
        name='Shop_Detail'
        component={Shop_Detail}
      />
      <Stack.Screen
        name='Map'
        component={Map}
      />

    </Stack.Navigator>
  )
}

function BottomTab(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName = '';
          size = focused ? 25 : 20;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Orders') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Store') {
            iconName = 'map-marker-alt';
          } else if (route.name === 'Promotions') {
            iconName = 'gift';
          } else if (route.name === 'More') {
            iconName = 'bars';
          }
          return (
            <FontAwesome5 name={iconName} size={size} color={color} />
          )
        },
        tabBarActiveTintColor: '#eb9f1c',
        tabBarInactiveTintColor: '#555',
        tabBarActiveBackgroundColor: '#fff',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarShowLabel: true,
        fontSize: 14,
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
      />
      <Tab.Screen
        name="Store"
        component={Store}
      />

      <Tab.Screen
        name="Promotions"
        component={Promotions}
      />
      <Tab.Screen
        name="More"
        component={More}
      />
    </Tab.Navigator>)
}

function Auth(): JSX.Element {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
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
        {/* Main: Map, Shop, Notification, ShopDetails */}
        <Stack.Screen
          name='Main'
          component={Main}
        />

        {/* Auth: Register, LogIn, ChangePassword, OTP*/}
        <Stack.Screen
          name='Auth'
          component={Auth}
        />

        {/* BottomTab: Home, Orders, Store, Promotions, More */}
        <Stack.Screen
          name='BottomTab'
          component={BottomTab}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
