//src/screen/login/login.js

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';

import analytics from '@react-native-firebase/analytics'; // Firebase Analytics import 추가

import axios from 'axios'; // axios to handle HTTP requests
import AsyncStorage from '@react-native-async-storage/async-storage';

import NaverLogin from '@react-native-seoul/naver-login';
import {login as kakaoLogin, me} from '@react-native-kakao/user';

import theme from '../../theme';
import splashImage from '../../images/login/splash2.png';
import naverIcon from '../../images/login/naver.png';
import kakaoIcon from '../../images/login/kakao.png';
import googleIcon from '../../images/login/google.png';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const consumerKey = 'fujiEAut2m84ybqDQOoq';
const consumerSecret = 'yXEW6CuruC';
const appName = 'HS바이오랩';
const serviceUrlScheme = 'com.apple';

const Gap = () => <View style={{marginTop: 24 * height_ratio}} />;
const ResponseJsonText = ({json = {}, name}) => (
  <View style={styles.responseContainer}>
    <Text style={styles.responseTitle}>{name}</Text>
    <Text style={styles.responseText}>{JSON.stringify(json, null, 4)}</Text>
  </View>
);

const ifExistUser = async (providerId, provider) => {
  const apiPayload = {
    providerId,
    provider,
  };

  const response = await axios.post(
    'http://54.79.134.160/login/checkExistingUser/',
    apiPayload,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data.exists;
};

const loginExist = async (providerId, provider) => {
  const apiPayload = {
    providerId,
    provider,
  };

  const response = await axios.post(
    'http://54.79.134.160/login/',
    apiPayload,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
  return response.data;
};

const Login2 = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [success, setSuccessResponse] = useState();
  const [failure, setFailureResponse] = useState();
  const [getProfileRes, setGetProfileRes] = useState();
  const GA_CKD = 'safe';//============================================================================
  
  useEffect(async () => {
    NaverLogin.initialize({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlSchemeIOS: serviceUrlScheme,
      disableNaverAppAuthIOS: true,
    });
    await analytics().logEvent('screen_view', {
      screen_name: 'loginScreen',
      CKD: 'not set',
    });
  }, []);

  const handlePostLoginNavigation = async () => {
    const userInfo = await AsyncStorage.getItem('userInfo');
    if (userInfo) {
      navigation.replace('BottomNavigation');
    } else {
      navigation.replace('GetUserInfo');
    }
  };

  const handleNaverLogin = async () => {
    try {
      const {failureResponse, successResponse} = await NaverLogin.login();
      if (successResponse) {
        // Get the access token
        const accessToken = successResponse.accessToken;
        // Fetch user profile
        const profileResult = await NaverLogin.getProfile(accessToken);
        if (profileResult) {
          const {id, name} = profileResult.response;
          await AsyncStorage.setItem('loginMethod', 'naver');
          await AsyncStorage.setItem('userId', id.toString());
          await AsyncStorage.setItem('username', name);

          // Define providerId and provider
          const providerId = id.toString(); // Naver의 providerId는 id
          const provider = 1; // Naver의 provider identifier (임의로 1로 설정)

          const userExists = await ifExistUser(providerId, provider); // Check if user exists

          if (userExists === 1) {
            console.log('Existing user found, logging in...');
            const loginResponse = await loginExist(providerId, provider);
            console.log('Login successful:', loginResponse); // Print login result to console

            // Extracting the user information from the response
            const {user} = loginResponse;

            // Firebase Analytics에 로그인 이벤트 로깅
            console.log('Logging login event to Firebase Analytics');
            await analytics().logEvent('login', {
              method: 'naver',
            });
            console.log('Login event logged');

            // Storing the healthCheckup data in AsyncStorage
            if (user.healthCheckup) {
              await AsyncStorage.setItem(
                'healthscreen_data',
                JSON.stringify(user.healthCheckup),
              );
              // Storing the last update date in YYYY-MM-DD format using Date
              const today = new Date();
              const formattedDate = `${today.getFullYear()}-${String(
                today.getMonth() + 1,
              ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
              await AsyncStorage.setItem(
                'healthscreen_last_update',
                formattedDate,
              );
            }

            // Formatting the user info for AsyncStorage
            const formattedUserInfo = {
              name: user.name,
              nickname: user.nickname,
              birthdate: user.birthdate,
              height: user.height,
              weight: user.weight,
              gender: user.gender,
              kidneyDisease: user.kidneyInfo, // Assuming this is a placeholder value
            };
            await AsyncStorage.setItem(
              'userInfo',
              JSON.stringify(formattedUserInfo),
            );

            console.log(
              'User data and health information stored successfully in AsyncStorage.',
            );
            navigation.replace('BottomNavigation');
          } else {
            console.log(
              'No existing user found. Additional registration required.',
            );
          }
          handlePostLoginNavigation();
        } else {
          console.error('Failed to fetch user profile.');
        }
      } else if (failureResponse) {
        console.error('Naver login failed:', failureResponse);
      }
    } catch (error) {
      console.error('Naver login error:', error);
    }
  };

  const handleKakaoLogin = async () => {
    try {
      console.log('Starting Kakao login...');
      await kakaoLogin();
      console.log('Kakao login successful. Fetching user information...');

      const userInfo = await me();
      console.log('User information fetched:', userInfo);

      if (userInfo && userInfo.id) {
        const providerId = userInfo.id.toString(); // Convert to string
        const provider = 2; // Kakao provider identifier

        await AsyncStorage.setItem('userId', providerId);
        await AsyncStorage.setItem('loginMethod', 'kakao');

        const userExists = await ifExistUser(providerId, provider.toString()); // Check if user exists

        if (userExists === 1) {
          await analytics().logEvent('login', {
            method: 'kakao',
            CKD: GA_CKD
          });
          console.log('Existing user found, logging in...');
          const loginResponse = await loginExist(providerId, provider);
          console.log('Login successful:', loginResponse); // Print login result to console

          // Extracting the user information from the response
          const {user} = loginResponse;

          // Storing the healthCheckup data in AsyncStorage
          if (user.healthCheckup) {
            await AsyncStorage.setItem(
              'healthscreen_data',
              JSON.stringify(user.healthCheckup),
            );
            // Storing the last update date in YYYY-MM-DD format using Date
            const today = new Date();
            const formattedDate = `${today.getFullYear()}-${String(
              today.getMonth() + 1,
            ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            await AsyncStorage.setItem(
              'healthscreen_last_update',
              formattedDate,
            );
          }

          // Formatting the user info for AsyncStorage
          const formattedUserInfo = {
            name: user.name,
            nickname: user.nickname,
            birthdate: user.birthdate,
            height: user.height,
            weight: user.weight,
            gender: user.gender,
            kidneyDisease: user.kidneyInfo, // Assuming this is a placeholder value
          };
          await AsyncStorage.setItem(
            'userInfo',
            JSON.stringify(formattedUserInfo),
          );

          console.log(
            'User data and health information stored successfully in AsyncStorage.',
          );
          navigation.replace('BottomNavigation');
        } else {
          
          console.log(
            'No existing user found. Additional registration required.',
          );
        }
        await analytics().logEvent('make_account', {
          method: 'kakao',
          CKD: 'not_set'
        });
        handlePostLoginNavigation(); // Proceed with navigation after login or check
      } else {
        throw new Error('User information is missing.');
      }
    } catch (error) {
      console.error('Kakao login error:', error.message || error);
    }
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

  return (
    <LinearGradient
      colors={['#7596FF', '#ffffff']}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.header}>
            <Image source={splashImage} style={styles.splashImage} />
            <Text style={styles.welcomeText1}>환영합니다!</Text>
            <Text style={styles.welcomeText2}>혹시 처음이신가요?</Text>
          </View>
          <View style={styles.content}>
            <TouchableOpacity
              style={[styles.loginButton, {backgroundColor: '#03C75A'}]}
              onPress={handleNaverLogin}>
              <Image source={naverIcon} style={styles.icon} />
              <Text style={[styles.buttonText, {color: '#FFFFFF'}]}>
                네이버로 로그인
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.loginButton, {backgroundColor: '#FEE500'}]}
              onPress={handleKakaoLogin}>
              <Image source={kakaoIcon} style={styles.icon} />
              <Text style={[styles.buttonText, {color: '#2A1C11'}]}>
                카카오로 로그인
              </Text>
            </TouchableOpacity>
            <Gap />
            <Gap />
            {success && (
              <>
                <Button title="Get Profile" onPress={getProfile} />
                <Gap />
                <View>
                  <Button title="Delete Token" onPress={() => deleteToken()} />
                  <Gap />
                  <ResponseJsonText name={'Success'} json={success} />
                </View>
              </>
            )}
            <Gap />
            {failure && <ResponseJsonText name={'Failure'} json={failure} />}
            <Gap />
            {getProfileRes && (
              <ResponseJsonText name={'GetProfile'} json={getProfileRes} />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'flex-start',
    marginTop: 100 * height_ratio,
    marginLeft: 40 * width_ratio,
  },
  splashImage: {
    width: 100 * width_ratio,
    height: 50 * height_ratio,
    resizeMode: 'contain',
    marginBottom: 50 * height_ratio,
  },
  welcomeText1: {
    ...theme.fonts.Bold,
    fontSize: 30 * width_ratio,
    color: 'white',
  },
  welcomeText2: {
    ...theme.fonts.SemiBold,
    fontSize: 18 * width_ratio,
    color: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30 * width_ratio,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 234 * height_ratio,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60 * height_ratio,
    borderRadius: 30 * width_ratio,
    marginBottom: 12 * height_ratio,
    paddingLeft: 28 * width_ratio,
    paddingRight: 52 * width_ratio,
  },
  icon: {
    width: 24 * width_ratio,
    height: 24 * height_ratio,
    resizeMode: 'contain',
  },
  buttonText: {
    flex: 1,
    ...theme.fonts.Medium,
    fontSize: 18 * width_ratio,
    color: 'white',
    textAlign: 'center',
    paddingBottom: 2 * height_ratio,
  },
  responseContainer: {
    padding: 12 * width_ratio,
    borderRadius: 16 * width_ratio,
    borderWidth: 1,
    backgroundColor: '#242c3d',
  },
  responseTitle: {
    ...theme.fonts.Medium,
    fontSize: 20 * width_ratio,
    fontWeight: 'bold',
    color: 'white',
  },
  responseText: {
    color: 'white',
    fontSize: 13 * width_ratio,
    lineHeight: 20 * height_ratio,
  },
});

export default Login2;
