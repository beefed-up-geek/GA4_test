import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Authentication3Screen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    providerId,
    jti,
    twoWayTimestamp,
    name,
    birthdate,
    phoneNo,
    telecom,
    loginTypeLevel,
  } = route.params;

  const handleCompleteAuth = async () => {
    try {
      const request_data = {
        providerId: providerId,
        userName: name,
        identity: birthdate,
        phoneNo: phoneNo,
        telecom: telecom,
        loginTypeLevel: loginTypeLevel,
        jti: jti,
        twoWayTimestamp: twoWayTimestamp,
      };
      const response = await axios.post(
        'http://13.238.161.156/health_checkup/step2',
        request_data,
      );

      // 응답 데이터 검증
      if (!response || !response.data) {
        throw new Error('서버 응답이 없습니다. 다시 시도해주세요.');
      }

      // maxBodyLength 값 추출
      console.log(response.headers); // -1

      if (response.data.message && response.data.message.includes('length')) {
        Alert.alert(
          '알림',
          '서버에서 오류가 발생했습니다. 데이터를 찾을 수 없습니다.',
        );
        return;
      }

      const filteredData = response.data.filteredData || []; // 빈 데이터일 경우 빈 배열로 처리
      if (filteredData.length === 0) {
        Alert.alert('알림', '인증이 완료되었으나 데이터를 찾을 수 없습니다.');
      } else {
        Alert.alert('성공', '인증이 완료되었습니다.');
      }

      // 오늘 날짜를 AsyncStorage에 저장
      const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 저장
      await AsyncStorage.setItem('healthscreen_last_update', today);

      // filteredData를 AsyncStorage에 저장
      await AsyncStorage.setItem(
        'healthscreen_data',
        JSON.stringify(filteredData),
      );

      // 저장된 값을 가져와서 출력
      const storedDate = await AsyncStorage.getItem('healthscreen_last_update');
      const storedData = await AsyncStorage.getItem('healthscreen_data');
      console.log('<< storedDate >>');
      console.log(storedDate);
      console.log('<< storedData >>');
      console.log(JSON.parse(storedData));

      navigation.navigate('Health'); // 건강검진 홈화면으로 가기
    } catch (error) {
      console.error('Error response:', error.response);
      if (error.response) {
        // 서버로부터의 응답이 있는 경우
        console.log('Error data:', error.response.data);
        console.log('Error status:', error.response.status);
        console.log('Error headers:', error.response.headers);
        Alert.alert('오류', '인증에 완료가 됐으나 정보를 찾을 수 없습니다.');
      } else {
        // 요청이 전송되지 못한 경우
        console.log('Error message:', error.message);
        Alert.alert('오류', error.message || '인증이 완료되지 않았습니다');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        이 화면은 /src/screen/health_screen/authentication3.js 🎉
      </Text>
      <Text style={styles.waitingText}>
        본인인증을 완료하고 인증완료를 눌러주세요!
      </Text>
      <Text style={styles.waitingText}>기다리는 중입니다!</Text>
      <FastImage
        source={require('../../images/health_screen/waiting.gif')}
        style={styles.image}
        resizeMode={FastImage.resizeMode.contain}
      />
      <TouchableOpacity style={styles.button} onPress={handleCompleteAuth}>
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
