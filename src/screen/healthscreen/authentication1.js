// /src/screen/health_screen/authentication1.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Authentication1Screen = () => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [selectedValue, setSelectedValue] = useState(-1);
  const navigation = useNavigation();

  const handleButtonPress = (index) => {
    setSelectedButtonIndex(index);
    setSelectedValue(index + 1); // 1~8 값 설정
    navigation.navigate('Authentication2', { selectedValue: index + 1 });
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
      <Text style={{ color: 'black', marginBottom: 20 }}>이 화면은 /src/screen/health_screen/authentication1.js 🎉</Text>
      <Text style={{ color: 'black', marginBottom: 20 }}> 건강 검진 내역을 불러오기 위해 본인인증이 필요합니다.</Text>
      <Text style={styles.methodText}>간편인증 방법</Text>
      <View style={styles.buttonContainer}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleButtonPress(index)}
          >
            <Image
              source={image}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        ))}
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
  buttonImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
});

export default Authentication1Screen;
