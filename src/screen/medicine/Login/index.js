import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {View, Text} from 'react-native';

import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';

// Somewhere in your code

GoogleSignin.configure({
  webClientId:
    '1040523980047-5st7a3ianeqp28ilbg24e8veguku1hie.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
});

const LoginScreen = ({}) => {
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
  return <GoogleSigninButton onPress={() => signIn()} />;
};

export default LoginScreen;
