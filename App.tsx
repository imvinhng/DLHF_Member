/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './src/navigation/Main';
import Auth from './src/navigation/Auth';

const Stack = createStackNavigator();

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
