// /src/health_screen/authentication.js

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';

const AuthenticationScreen = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [selectedValue, setSelectedValue] = useState(-1);
  const [name, setName] = useState(''); // 이름
  const [birthdate, setBirthdate] = useState(''); // 생년월일
  const [phoneNumber, setPhoneNumber] = useState(''); // 전화번호


  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
    setSelectedValue(index + 1); // 1~8 값 설정
  };

  const images = [
    require('../../images/health_screen/kakao.png'),
    require('../../images/health_screen/payco.png'),
    require('../../images/health_screen/samsungpass.png'),
    require('../../images/health_screen/kb.png'),
    require('../../images/health_screen/pass.png'),
    require('../../images/health_screen/naver.png'),
    require('../../images/health_screen/sinhan.png'),
    require('../../images/health_screen/toss.png'),
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ color: 'black', marginBottom: 20 }}>나는 /src/health_screen/authentication.js 🎉</Text>
      <Text style={styles.methodText}>간편인증 방법</Text>
      <View style={styles.buttonContainer}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedButtonIndex === index && styles.selectedButton, // 버튼이 선택된 경우 스타일 추가
            ]}
            onPress={() => handleButtonPress(index)}
          >
            <Image
              source={image}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="홍길동"
            placeholderTextColor="#777" // placeholder 색상 설정
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>생년월일</Text>
          <TextInput
            style={styles.input}
            value={birthdate}
            onChangeText={setBirthdate}
            placeholder="19980820"
            keyboardType="numeric"
            placeholderTextColor="#777" // placeholder 색상 설정
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>휴대폰번호</Text>
          <TextInput
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="01092874435"
            keyboardType="phone-pad"
            placeholderTextColor="#777" // placeholder 색상 설정
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  methodText: {
    alignSelf: 'flex-start',
    color: 'black',
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: 80,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
  },
  selectedButton: {
    borderColor: 'black',
    borderWidth: 2,
  },
  buttonImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    color: 'black',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    borderRadius: 5,
    color: 'black',
  },
  phoneInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    borderRadius: 5,
    color: 'black',
  },
});

export default AuthenticationScreen;
