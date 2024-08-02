// /src/screen/health_screen/authentication3.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const Authentication3Screen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>이 화면은 /src/screen/health_screen/authentication3.js 🎉</Text>
      <Text style={styles.waitingText}>본인인증을 완료하고 인증완료를 눌러주세요!</Text>
      <Text style={styles.waitingText}>기다리는 중입니다!</Text>
      <FastImage 
        source={require('../../images/health_screen/waiting.gif')} 
        style={styles.image} 
        resizeMode={FastImage.resizeMode.contain}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>인증완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: 'black',
    marginBottom: 50,
  },
  waitingText: {
    color: 'black',
  },
  button: {
    backgroundColor: '#1677FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Authentication3Screen;
