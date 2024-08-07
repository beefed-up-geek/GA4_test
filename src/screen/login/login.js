// /src/screen/login/login.js
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import splashImage from '../../images/login/splash2.png';
import naverIcon from '../../images/login/naver.png';
import kakaoIcon from '../../images/login/kakao.png';
import googleIcon from '../../images/login/google.png';
import {login, logout, unlink, me} from '@react-native-kakao/user';

const Login2 = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.replace('BottomNavigation');
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(googleCredentials);
    } catch (error) {
      console.log('got error: ', error.message);
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={splashImage} style={styles.splashImage} />
        <Text style={styles.welcomeText}>환영합니다!</Text>
      </View>
      <View style={styles.content}>
        <Text style={{color: 'black'}}>나는 /src/screen/login/login.js 🎉</Text>
        <TouchableOpacity
          style={[styles.loginButton, {backgroundColor: '#03C75A'}]}
          onPress={async () => {
            await AsyncStorage.setItem('loginMethod', 'naver');
            handleLogin();
          }}>
          <Image source={naverIcon} style={styles.icon} />
          <Text style={styles.buttonText}>네이버로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginButton, {backgroundColor: '#FEE500'}]}
          onPress={() => {
            login().then(async () => {
              me().then(async userInfo => {
                await AsyncStorage.setItem('userId', userInfo.id.toString());
                await AsyncStorage.setItem('loginMethod', 'kakao');
                navigation.replace('BottomNavigation');
              });
            });
          }}>
          <Image source={kakaoIcon} style={styles.icon} />
          <Text style={styles.buttonText}>카카오로 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.loginButton,
            {
              backgroundColor: '#FFFFFF',
              borderColor: '#DB4437',
              borderWidth: 1,
            },
          ]}
          onPress={async () => {
            await AsyncStorage.setItem('loginMethod', 'google');
            signIn();
          }}>
          <Image source={googleIcon} style={styles.icon} />
          <Text style={[styles.buttonText, {color: '#DB4437'}]}>
            구글로 로그인
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'flex-start',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    marginLeft: 40,
  },
  splashImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    borderRadius: 25,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Login2;
