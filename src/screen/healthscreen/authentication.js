// /src/healthscreen/authentication.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>나는 /src/healthscreen/authentication.js 🎉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthenticationScreen;
