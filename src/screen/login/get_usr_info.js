// /src/screen/login/get_usr_info.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const GetUser_info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');

  const navigation = useNavigation();

  const handleSave = async () => {
    if (!name || !nickname || !height || !weight) {
      Alert.alert('모든 필드를 형식에 맞게 입력해주세요.');
      return;
    }
    const userInfo = { name, nickname, birthdate, height, weight, gender };
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      Alert.alert('User info saved successfully!');
      navigation.navigate('BottomNavigation');
    } catch (error) {
      Alert.alert('Failed to save user info');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>더 정확한 건강 관리를 위해 기본 정보를 알려주세요</Text>

      <Text style={styles.label}>성별</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity onPress={() => setGender('male')} style={styles.genderButton}>
          <Image
            source={require('../../images/login/male.png')}
            style={[styles.genderImage, gender === 'female' && styles.desaturated]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')} style={styles.genderButton}>
          <Image
            source={require('../../images/login/female.png')}
            style={[styles.genderImage, gender === 'male' && styles.desaturated]}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>이름</Text>
      <TextInput
        style={styles.input}
        placeholder="홍길동"
        placeholderTextColor="gray"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>닉네임</Text>
      <TextInput
        style={styles.input}
        placeholder="6자리 이내로 입력"
        placeholderTextColor="gray"
        value={nickname}
        onChangeText={setNickname}
      />

      <Text style={styles.label}>생년월일</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY / MM / DD"
        placeholderTextColor="gray"
        value={birthdate}
        onChangeText={setBirthdate}
      />

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>키</Text>
          <TextInput
            style={styles.input}
            placeholder="0 cm"
            placeholderTextColor="gray"
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>몸무게</Text>
          <TextInput
            style={styles.input}
            placeholder="0 kg"
            placeholderTextColor="gray"
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
        </View>
      </View>

      <TouchableOpacity onPress={handleSave} style={styles.button}>
        <Text style={styles.buttonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputGroup: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#1677FF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  genderImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  desaturated: {
    opacity: 0.5,
  },
});

export default GetUser_info;
