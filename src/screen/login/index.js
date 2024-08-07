// /src/screen/login/index.js
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import splashImage from '../../images/login/splash1.png';

const Login1 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginMethod = async () => {
      const loginMethod = await AsyncStorage.getItem('loginMethod');
      if (loginMethod) {
        // loginMethod가 존재하면 바로 BottomNavigation으로 이동
        const timer = setTimeout(() => {
          navigation.replace('BottomNavigation');
        }, 3000);
      } else {
        // loginMethod가 존재하지 않으면 3초 후에 Login2로 이동
        const timer = setTimeout(() => {
          navigation.replace('Login2');
        }, 3000);

        // 컴포넌트 언마운트 시 타이머 클리어
        return () => clearTimeout(timer);
      }
    };

    checkLoginMethod();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={splashImage} style={styles.image} />
      <Text style={styles.descriptionText}>빠르고 간편한</Text>
      <Text style={styles.descriptionText}>신장기능 조기 진단 검사지</Text>
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
