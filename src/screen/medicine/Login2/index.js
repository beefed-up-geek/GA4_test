import React from 'react';
import {Alert, SafeAreaView, StyleSheet, Button, Platform} from 'react-native';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';

const iosKeys = {
  kConsumerKey: 'fujiEAut2m84ybqDQOoq',
  kConsumerSecret: 'yXEW6CuruC',
  kServiceAppName: 'HS바이오랩(iOS)',
  kServiceAppUrlScheme: 'com.apple', // 실제 URL 스킴으로 변경
};

const androidKeys = {
  kConsumerKey: 'fujiEAut2m84ybqDQOoq',
  kConsumerSecret: 'yXEW6CuruC',
  kServiceAppName: 'HS바이오랩(안드로이드)',
};

const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

const LoginScreen2 = () => {
  console.log(NaverLogin); // NaverLogin 객체 출력
  const [naverToken, setNaverToken] = React.useState(null);

  const naverLogin = async () => {
    try {
      const token = await NaverLogin.login(initials);
      console.log(`Token fetched: ${token.accessToken}`);
      setNaverToken(token);
    } catch (err) {
      console.error('Error during login', err);
    }
  };

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken(null);
  };

  const getUserProfile = async () => {
    try {
      const profileResult = await getProfile(naverToken.accessToken);
      if (profileResult.resultcode === '024') {
        Alert.alert('로그인 실패', profileResult.message);
        return;
      }
      console.log('Profile result:', profileResult);
    } catch (err) {
      console.error('Error fetching profile', err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="네이버 아이디로 로그인하기" onPress={naverLogin} />
      {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}
      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default LoginScreen2;
