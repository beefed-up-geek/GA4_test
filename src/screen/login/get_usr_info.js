import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import theme from '../../theme';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const GetUser_info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserInfo = await AsyncStorage.getItem('userInfo');
        if (storedUserInfo !== null) {
          const userInfo = JSON.parse(storedUserInfo);
          setName(userInfo.name || '');
          setNickname(userInfo.nickname || '');
        } else {
          const userId = await AsyncStorage.getItem('userId');
          const username = await AsyncStorage.getItem('username');
          if (username !== null) {
            setName(username);
            setNickname(userId);
          }
        }
      } catch (error) {
        console.error('Failed to load user info', error);
      }
    };

    fetchUserData();
  }, []);

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

  const handleHeightChange = (value) => {
    const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(numValue)) {
      setHeight(numValue > 250 ? '250' : numValue.toString());
    } else {
      setHeight('');
    }
  };

  const handleWeightChange = (value) => {
    const numValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (!isNaN(numValue)) {
      setWeight(numValue > 300 ? '300.0' : numValue.toFixed(1));
    } else {
      setWeight('');
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
      scrollEnabled={true}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.title}>더 정확한 건강 관리를 위해 {"\n"}기본 정보를 알려주세요</Text>

        <View style={styles.genderWrapper}>
          <Text style={styles.label}>성별</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity onPress={() => setGender('female')} style={styles.genderButton}>
              <Image
                source={require('../../images/login/female.png')}
                style={[styles.genderImageFemale, gender === 'male' && styles.desaturated]}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setGender('male')} style={styles.genderButton}>
              <Image
                source={require('../../images/login/male.png')}
                style={[styles.genderImageMale, gender === 'female' && styles.desaturated]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>이름</Text>
            <TextInput
              style={styles.input}
              backgroundColor="#F1F1F1"
              placeholder="홍길동"
              placeholderTextColor="#828287"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>닉네임</Text>
            <TextInput
              style={styles.input}
              backgroundColor="#F1F1F1"
              placeholder="6자리 이내로 입력"
              placeholderTextColor="#828287"
              value={nickname}
              onChangeText={setNickname}
            />
          </View>
        </View>

        <View style={styles.inputGroupFullWidth}>
          <Text style={styles.label}>생년월일</Text>
          <TextInput
            style={styles.input}
            backgroundColor="#F1F1F1"
            placeholder="YYYY / MM / DD"
            placeholderTextColor="#828287"
            value={birthdate}
            onChangeText={setBirthdate}
          />
        </View>

        <View style={styles.row}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>키</Text>
            <View style={styles.inputWithUnit}>
              <TextInput
                style={styles.input}
                backgroundColor="#F1F1F1"
                placeholder="0"
                placeholderTextColor="#828287"
                value={height}
                onChangeText={handleHeightChange}
                keyboardType="numeric"
                maxLength={3}
              />
              <Text style={styles.unit}>cm</Text>
            </View>
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>체중</Text>
            <View style={styles.inputWithUnit}>
              <TextInput
                style={styles.input}
                backgroundColor="#F1F1F1"
                placeholder="00.0"
                placeholderTextColor="#828287"
                value={weight}
                onChangeText={handleWeightChange}
                keyboardType="numeric"
                maxLength={5}
              />
              <Text style={styles.unit}>kg</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={handleSave} style={styles.button}>
          <Text style={styles.buttonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    paddingTop: 80,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    marginLeft: 4,
    fontSize: 20,
    ...theme.fonts.Bold,
    marginBottom: 50,
    color: 'black',
    alignSelf: 'flex-start',
  },
  inputWithUnit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    borderRadius: 13,
    paddingRight: 24,
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 24,
  },
  inputGroupFullWidth: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    ...theme.fonts.Regular,
    marginBottom: 12,
    color: 'black',
  },
  input: {
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 13,
    paddingVertical: 17,
    paddingHorizontal: 24,
    fontSize: 16,
    ...theme.fonts.Regular,
    color: 'black',
  },
  unit: {
    fontSize: 16,
    color: '#828287',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -8,
  },
  button: {
    backgroundColor: '#EBEFFE',
    paddingVertical: 17,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#7596FF',
    fontSize: 16,
    ...theme.fonts.Bold,
  },
  genderWrapper: {
    width: '100%',
    marginBottom: 24,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genderButton: {
    alignItems: 'center',
    padding: 10,
  },
  genderImageFemale: {
    marginLeft: 26, 
    width: 109,
    height: 117.63,
    resizeMode: 'contain',
  },
  genderImageMale: {
    marginTop: 17,
    marginRight: 28,
    width: 102,
    height: 101,
    resizeMode: 'contain',
  },
  desaturated: {
    opacity: 0.5,
  },
});

export default GetUser_info;
