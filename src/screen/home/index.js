// /src/screen/home/index.js

import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [loginMethod, setLoginMethod] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const method = await AsyncStorage.getItem('loginMethod');
      const id = await AsyncStorage.getItem('userId');
      const username = await AsyncStorage.getItem('username');
      setLoginMethod(method);
      setUserId(id);
      setUsername(username);
    };

    checkLoginStatus();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>{username}님 반가워요!!!</Text>
      {loginMethod === 'kakao' ? (
        <>
          <Text style={{color: 'black'}}>카카오로 로그인했어요🎉</Text>
          <Text style={{color: 'black'}}>ID: {userId}</Text>
        </>
      ) : loginMethod === 'naver' ? (
        <>
          <Text style={{color: 'black'}}>네이버로 로그인했어요</Text>
          <Text style={{color: 'black'}}>ID: {userId}</Text>
        </>
      ) : loginMethod === 'google' ? (
        <>
          <Text style={{color: 'black'}}>구글로 로그인했어요</Text>
          <Text style={{color: 'black'}}>ID: {userId}</Text>
        </>
      ) : (
        <Text style={{color: 'black'}}>
          이 화면은 /src/screen/home/index.js🎉
        </Text>
      )}
    </View>
  );
};

export default HomeScreen;
