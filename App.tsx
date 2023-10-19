/**
 * Dalat Hasfarm Member App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

// TODO: Add multi-language processor
// function App(): JSX.Element {

//   const { t, i18n } = useTranslation();

//   const [currentLanguage, setLanguage] = useState('en');

//   const changeLanguage = (value: string) => {
//     i18n
//       .changeLanguage(value)
//       .then(() => setLanguage(value))
//       .catch(err => console.log(err));
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//         justifyContent: 'space-evenly',
//       }}>
//       <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
//         {t('hello')}{' '}
//       </Text>
//       <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#33A850' }}>
//         {t('this line is translated')}
//       </Text>
//       <Pressable
//         onPress={() => changeLanguage('en')}
//         style={{
//           backgroundColor:
//             currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
//           padding: 20,
//         }}>
//         <Text>Select English</Text>
//       </Pressable>
//       <Pressable
//         onPress={() => changeLanguage('vi')}
//         style={{
//           backgroundColor:
//             currentLanguage === 'vi' ? '#33A850' : '#d3d3d3',
//           padding: 20,
//         }}>
//         <Text>Chọn Tiếng Việt</Text>
//       </Pressable>
//     </View>
//   );
// };

export default App;
