// /App.js
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './src/components/bottom_navigation';
import NavigationWithoutTabs from './src/components/navigation_without_tabs';
import Login1 from './src/screen/login/index';
import Login2 from './src/screen/login/login';
import GetKidneyInfo from './src/screen/login/get_kidney_info';
import GetUserInfo from './src/screen/login/get_usr_info';
import { initializeKakaoSDK } from '@react-native-kakao/core';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    initializeKakaoSDK('your_kakao_sdk_key_here');
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="GetUserInfo" component={GetUserInfo} />
        <Stack.Screen name="GetKidneyInfo" component={GetKidneyInfo} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        <Stack.Screen name="NoTabs" component={NavigationWithoutTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
