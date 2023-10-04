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
import Home from './src/screens/main/Home';
import Orders from './src/screens/main/Orders';
import Store from './src/screens/main/Store';
import Promotions from './src/screens/main/Promotions';
import More from './src/screens/main/More';
import Login from './src/screens/components/Login';
import Register from './src/screens/components/Register';
import Map from './src/screens/components/Map';
import Shop_Detail from './src/screens/components/Shop_Detail';
import Notification from './src/screens/components/Notification';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Main = () => {
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


function App(): JSX.Element {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Login'
          component={Login} />
        <Stack.Screen
          name='Register'
          component={Register} />
        <Stack.Screen
          name='Map'
          component={Map} />
        <Stack.Screen
          name='Notification'
          component={Notification} />
        <Stack.Screen
          name='Shop_Detail'
          component={Shop_Detail} />
        <Stack.Screen
          name='Main'
          component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
