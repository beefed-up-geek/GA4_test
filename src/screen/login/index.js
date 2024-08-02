// /src/screen/login/index.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import splashImage from '../../images/login/splash1.png';

const Login1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // 3초 후에 두 번째 로그인 화면으로 전환
    const timer = setTimeout(() => {
      navigation.replace('Login2');
    }, 3000);

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={splashImage} style={styles.image} />
      <Text style={styles.descriptionText}>신장 투석 전문 건강 관리 앱</Text>
      <ActivityIndicator size="large" color="#1677FF" style={styles.loadingIndicator} />
      <Text style={styles.footerText}>HNSBio.lab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
  },
  loadingIndicator: {
    marginTop: 50,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: 'gray',
  },
});

export default Login1;