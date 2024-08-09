import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import splashImage from '../../images/login/splash2.png';
import naverIcon from '../../images/login/naver.png';
import kakaoIcon from '../../images/login/kakao.png';
import googleIcon from '../../images/login/google.png';
import { login as kakaoLogin, me } from '@react-native-kakao/user';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import NaverLogin from '@react-native-seoul/naver-login';

const consumerKey = 'fujiEAut2m84ybqDQOoq';
const consumerSecret = 'yXEW6CuruC';
const appName = 'HS바이오랩';
const serviceUrlScheme = 'com.apple';

GoogleSignin.configure({
  webClientId: '553674684367-g30th1q22jbqjs30jgad63i95vdntcmu.apps.googleusercontent.com',
  androidClientId: '553674684367-emj97ff7kjitq1qbn03ok9hebps9ijsg.apps.googleusercontent.com',
  iosClientId: '553674684367-sr2m1jems5sai07qgq710dvhdoqm6npv.apps.googleusercontent.com',
  scopes: ['profile', 'email'],
});

const Gap = () => <View style={{ marginTop: 24 }} />;
const ResponseJsonText = ({ json = {}, name }) => (
  <View style={styles.responseContainer}>
    <Text style={styles.responseTitle}>{name}</Text>
    <Text style={styles.responseText}>{JSON.stringify(json, null, 4)}</Text>
  </View>
);

const Login2 = () => {
  const navigation = useNavigation();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [success, setSuccessResponse] = useState();
  const [failure, setFailureResponse] = useState();
  const [getProfileRes, setGetProfileRes] = useState();

  useEffect(() => {
    NaverLogin.initialize({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlSchemeIOS: serviceUrlScheme,
      disableNaverAppAuthIOS: true,
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

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await GoogleSignin.signIn();
      const { user } = response;
      if (user) {
        const { id, name } = user; // 구글 사용자 정보 추출
        await AsyncStorage.setItem('loginMethod', 'google');
        await AsyncStorage.setItem('userId', id.toString());
        await AsyncStorage.setItem('c', name);
        
        handlePostLoginNavigation(); // 로그인 후 화면 전환
      }
      setUser(user);
    } catch (apiError) {
      setError(apiError?.response?.data?.error?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleNaverLogin = async () => {
    try {
      const { failureResponse, successResponse } = await NaverLogin.login();
      if (successResponse) {
        // Get the access token
        const accessToken = successResponse.accessToken;

        // Fetch user profile
        const profileResult = await NaverLogin.getProfile(accessToken);
        if (profileResult) {
          const { id, name } = profileResult.response;
          await AsyncStorage.setItem('loginMethod', 'naver');
          await AsyncStorage.setItem('userId', id.toString());
          await AsyncStorage.setItem('username', name);

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
        await AsyncStorage.setItem('userId', userInfo.id.toString());
        await AsyncStorage.setItem('loginMethod', 'kakao');
        await AsyncStorage.setItem('username', userInfo.nickname);
        console.log('User data stored in AsyncStorage');

        handlePostLoginNavigation();
        console.log('Navigation to BottomNavigation');
      } else {
        throw new Error('User information is missing.');
      }
    } catch (error) {
      console.error('Kakao login error:', error.message || error);
      console.error('Error details:', error); // 추가적인 오류 정보 출력
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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Image source={splashImage} style={styles.splashImage} />
          <Text style={styles.welcomeText}>환영합니다!</Text>
        </View>
        <View style={styles.content}>
          <Text style={{ color: 'black' }}>
            나는 /src/screen/login/login.js 🎉
          </Text>
          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: '#03C75A' }]}
            onPress={handleNaverLogin}>
            <Image source={naverIcon} style={styles.icon} />
            <Text style={styles.buttonText}>네이버로 로그인</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: '#FEE500' }]}
            onPress={handleKakaoLogin}>
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
            onPress={handleGoogleLogin}>
            <Image source={googleIcon} style={styles.icon} />
            <Text style={[styles.buttonText, { color: '#DB4437' }]}>
              구글로 로그인
            </Text>
          </TouchableOpacity>

          <Gap />
          <Button title={'Logout'} onPress={logout} />
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
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 24,
  },
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
  responseContainer: {
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: '#242c3d',
  },
  responseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  responseText: {
    color: 'white',
    fontSize: 13,
    lineHeight: 20,
  },
});

export default Login2;
