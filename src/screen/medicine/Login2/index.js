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

  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{flexGrow: 1, padding: 24}}>
        <Button title={'Login'} onPress={login} />
        <Gap />
        <Button title={'Logout'} onPress={logout} />
        <Gap />
        {success ? (
          <>
            <Button title="Get Profile" onPress={getProfile} />
            <Gap />
          </>
        ) : null}
        {success ? (
          <View>
            <Button title="Delete Token" onPress={deleteToken} />
            <Gap />
            <ResponseJsonText name={'Success'} json={success} />
          </View>
        ) : null}
        <Gap />
        {failure ? <ResponseJsonText name={'Failure'} json={failure} /> : null}
        <Gap />
        {getProfileRes ? (
          <ResponseJsonText name={'GetProfile'} json={getProfileRes} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen2;
