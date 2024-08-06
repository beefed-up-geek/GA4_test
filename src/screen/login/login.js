// /src/screen/login/login.js
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import splashImage from '../../images/login/splash2.png';
import naverIcon from '../../images/login/naver.png';
import kakaoIcon from '../../images/login/kakao.png';
import googleIcon from '../../images/login/google.png';
import {login, me} from '@react-native-kakao/user';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import {isErrorWithCode} from '@react-native-google-signin/google-signin';
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {Pressable} from 'react-native';
import NaverLogin from '@react-native-seoul/naver-login';
import {useEffect, useState} from 'react';

const Gap = () => <View style={{marginTop: 24}} />;
const ResponseJsonText = ({json = {}, name}) => (
  <View
    style={{
      padding: 12,
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: '#242c3d',
    }}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
      {name}
    </Text>
    <Text style={{color: 'white', fontSize: 13, lineHeight: 20}}>
      {JSON.stringify(json, null, 4)}
    </Text>
  </View>
);

const consumerKey = 'fujiEAut2m84ybqDQOoq';
const consumerSecret = 'yXEW6CuruC';
const appName = 'HS바이오랩';

/** This key is setup in iOS. So don't touch it */
const serviceUrlScheme = 'navertest';

GoogleSignin.configure({
  webClientId:
    '553674684367-g30th1q22jbqjs30jgad63i95vdntcmu.apps.googleusercontent.com',
  androidClientId:
    '553674684367-emj97ff7kjitq1qbn03ok9hebps9ijsg.apps.googleusercontent.com',
  iosClientId:
    '553674684367-sr2m1jems5sai07qgq710dvhdoqm6npv.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

const GoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  return userInfo;
};

const Login2 = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.replace('BottomNavigation');
  };

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleLogin();
      const {idToken, user} = response;
      console.log(user);
      setUser(user);

      //if (idToken) {
      //  const resp = await authAPI.validateToken({
      //    token: idToken,
      //    email: user.email,
      //  });
      //  await handlePostLoginData(resp.data);
      //}
    } catch (apiError) {
      setError(
        apiError?.response?.data?.error?.message || 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    NaverLogin.initialize({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlSchemeIOS: serviceUrlScheme,
      disableNaverAppAuthIOS: true,
    });
  }, []);

  const [success, setSuccessResponse] = useState();
  const [failure, setFailureResponse] = useState();
  const [getProfileRes, setGetProfileRes] = useState();

  const login = async () => {
    const {failureResponse, successResponse} = await NaverLogin.login();
    setSuccessResponse(successResponse);
    setFailureResponse(failureResponse);
  };

  const logout = async () => {
    try {
      await NaverLogin.logout();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const getProfile = async () => {
    try {
      const profileResult = await NaverLogin.getProfile(success.accessToken);
      setGetProfileRes(profileResult);
    } catch (e) {
      setGetProfileRes(undefined);
    }
  };

  const deleteToken = async () => {
    try {
      await NaverLogin.deleteToken();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const handleNaverLogin = () => {
    navigation.navigate('BottomNavigation');
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
            handleGoogleLogin();
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
