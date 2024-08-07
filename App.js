// /App.js
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './src/components/bottom_navigation';
import Login1 from './src/screen/login/index'; // 로그인 화면 임포트
import Login2 from './src/screen/login/login'; // 두 번째 로그인 화면 임포트
import {initializeKakaoSDK} from '@react-native-kakao/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    initializeKakaoSDK('1f96718a8d259618eec427c10f31719c');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // 기본 헤더를 숨김
        }}>
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="Login2" component={Login2} />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
