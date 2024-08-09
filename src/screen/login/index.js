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
      const userInfo = await AsyncStorage.getItem('userInfo');
      console.log("<<< loginMethod >>>");
      console.log(loginMethod);
      console.log("<<< userId >>>");
      console.log(await AsyncStorage.getItem('userId'));
      console.log("<<< username >>>");
      console.log(await AsyncStorage.getItem('username')); 
      console.log("<<< userInfo >>>");
      console.log(userInfo);
      if (loginMethod) {
        const timer = setTimeout(() => {
          if (userInfo) {
            navigation.replace('BottomNavigation');
          } else {
            navigation.replace('GetUserInfo');
          }
        }, 3000);
      } else {
        const timer = setTimeout(() => {
          navigation.replace('Login2');
        }, 3000);

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
