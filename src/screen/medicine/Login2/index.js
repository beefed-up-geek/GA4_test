import {Button, SafeAreaView, ScrollView, Text, View} from 'react-native';
import NaverLogin from '@react-native-seoul/naver-login';
import React, {useEffect, useState} from 'react';

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

/** Fill your keys */
const consumerKey = 'fujiEAut2m84ybqDQOoq';
const consumerSecret = 'yXEW6CuruC';
const appName = 'HS바이오랩';

/** This key is setup in iOS. So don't touch it */
const serviceUrlScheme = 'navertest';

const LoginScreen2 = () => {
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

export default function LoginScreen2() {
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

  return (
    <View style={{margin: 100}}>
      <Pressable onPress={handleGoogleLogin}>
        <Text>Continue with Google</Text>
      </Pressable>
      <Image
        style={{height: 50, width: 50}}
        resizeMode="cover"
        source={{uri: user?.photo}}
      />
      <Text>{user?.name}</Text>
    </View>
  );
}
