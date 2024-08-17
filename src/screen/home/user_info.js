// /src/screen/home/user_info.js
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Platform, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import theme from '../../theme';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const Get_User_Info_Two = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [nameError, setNameError] = useState('');
  const [nicknameError, setNicknameError] = useState('');
  const [selectedKidneyDisease, setSelectedKidneyDisease] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserInfo = await AsyncStorage.getItem('userInfo');
        if (storedUserInfo !== null) {
          const userInfo = JSON.parse(storedUserInfo);
          setName(userInfo.name || '');
          setNickname(userInfo.nickname || '');
          setBirthdate(userInfo.birthdate || '');
          setHeight(userInfo.height || '');
          setWeight(userInfo.weight || '');
          setGender(userInfo.gender || '');
          setSelectedKidneyDisease(userInfo.kidneyDisease || null);
        }
      } catch (error) {
        console.error('Failed to load user info', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    validateForm();
  }, [name, nickname, birthdate, height, weight, gender]);

  const validateForm = () => {
    const currentYear = new Date().getFullYear();
    const [year, month, day] = birthdate.split('/').map(Number);

    if (
      name &&
      nickname &&
      height &&
      weight &&
      gender &&
      /^\d{4}\/\d{2}\/\d{2}$/.test(birthdate) &&
      year >= currentYear - 150 &&
      year <= currentYear &&
      month >= 1 &&
      month <= 12 &&
      day >= 1 &&
      day <= 31
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSave = async () => {
    const currentYear = new Date().getFullYear();
    const [year, month, day] = birthdate.split('/').map(Number);
    let errorMessage = '';

    if (!name) {
      errorMessage += '이름을 입력해주세요.\n';
    }
    if (!nickname) {
      errorMessage += '닉네임을 입력해주세요.\n';
    }
    if (!height) {
      errorMessage += '키를 입력해주세요.\n';
    }
    if (!weight) {
      errorMessage += '체중을 입력해주세요.\n';
    }
    if (!gender) {
      errorMessage += '성별을 선택해주세요.\n';
    }
    if (!selectedKidneyDisease) {
      errorMessage += '신장병 상태를 선택해주세요.\n';
    }
    if (!/^\d{4}\/\d{2}\/\d{2}$/.test(birthdate)) {
      errorMessage += '생년월일 형식이 잘못되었습니다.\n';
    } else {
      if (year < currentYear - 150 || year > currentYear) {
        errorMessage += `생년월일의 연도는 ${currentYear - 150}년에서 ${currentYear}년 사이여야 합니다.\n`;
      }
      if (month < 1 || month > 12) {
        errorMessage += '생년월일의 월은 01에서 12 사이여야 합니다.\n';
      }
      if (day < 1 || day > 31) {
        errorMessage += '생년월일의 일은 01에서 31 사이여야 합니다.\n';
      }
    }

    if (errorMessage) {
      Alert.alert('입력 오류', errorMessage);
      return;
    }

    const userInfo = { 
      name, 
      nickname, 
      birthdate, 
      height, 
      weight, 
      gender, 
      kidneyDisease: selectedKidneyDisease 
    };

    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log("<<< Get_User_Info_Two화면 사용자 정보 저장됨 >>>");
      console.log(await AsyncStorage.getItem('userInfo'));

      // Navigate back to the HomeScreen
      navigation.goBack();;
    } catch (error) {
      Alert.alert('사용자 정보 저장 실패');
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
    const regex = /^[0-9]{1,3}(\.[0-9]?)?$/;
    if (regex.test(value) || value === '') {
      const numValue = parseFloat(value);
      if (!isNaN(numValue) && numValue <= 300) {
        setWeight(value);
      } else if (value === '') {
        setWeight('');
      }
    }
  };

  const handleBirthdateChange = (value) => {
    const cleaned = value.replace(/[^0-9]/g, '');
    let formatted = cleaned;
    if (cleaned.length > 4) {
      formatted = cleaned.slice(0, 4) + '/' + cleaned.slice(4);
    }
    if (cleaned.length > 6) {
      formatted = formatted.slice(0, 7) + '/' + cleaned.slice(6);
    }
    setBirthdate(formatted);
  };

  const handleNameChange = (text) => {
    if (text.length > 6) {
      setNameError('6자리 이내로 입력하세요');
      setName(text.slice(0, 6)); // 6자까지만 입력
    } else {
      setNameError('');
      setName(text);
    }
  };

  const handleNicknameChange = (text) => {
    if (text.length > 6) {
      setNicknameError('6자리 이내로 입력하세요');
      setNickname(text.slice(0, 6)); // 6자까지만 입력
    } else {
      setNicknameError('');
      setNickname(text);
    }
  };

  const handleKidneyDiseaseSelect = (option) => {
    setSelectedKidneyDisease(option);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
        extraScrollHeight={20 * height_ratio}
        scrollEnabled={true}
      >
        <View style={styles.innerContainer}>
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
                onChangeText={handleNameChange}
              />
              {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>닉네임</Text>
              <TextInput
                style={styles.input}
                backgroundColor="#F1F1F1"
                placeholder="6자리 이내로 입력"
                placeholderTextColor="#828287"
                value={nickname}
                onChangeText={handleNicknameChange}
              />
              {nicknameError ? <Text style={styles.errorText}>{nicknameError}</Text> : null}
            </View>
          </View>

          <View style={styles.inputGroupFullWidth}>
            <Text style={styles.label}>생년월일</Text>
            <TextInput
              style={styles.input}
              backgroundColor="#F1F1F1"
              placeholder="YYYY/MM/DD"
              placeholderTextColor="#828287"
              value={birthdate}
              onChangeText={handleBirthdateChange}
              keyboardType="numeric"
              maxLength={10}
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

          <View style={styles.kidneyDiseaseWrapper}>
            <Text style={styles.label}>만성콩팥병 진단</Text>
            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedKidneyDisease === '해당사항 없음' && styles.selectedButton,
              ]}
              onPress={() => handleKidneyDiseaseSelect('해당사항 없음')}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedKidneyDisease === '해당사항 없음' && styles.selectedText,
                ]}
              >
                해당사항 없음
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedKidneyDisease === '만성콩팥병 (투석 전)' && styles.selectedButton,
              ]}
              onPress={() => handleKidneyDiseaseSelect('만성콩팥병 (투석 전)')}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedKidneyDisease === '만성콩팥병 (투석 전)' && styles.selectedText,
                ]}
              >
                만성콩팥병 (투석 전)
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedKidneyDisease === '혈액투석 중' && styles.selectedButton,
              ]}
              onPress={() => handleKidneyDiseaseSelect('혈액투석 중')}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedKidneyDisease === '혈액투석 중' && styles.selectedText,
                ]}
              >
                혈액투석 중
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedKidneyDisease === '복막투석 중' && styles.selectedButton,
              ]}
              onPress={() => handleKidneyDiseaseSelect('복막투석 중')}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedKidneyDisease === '복막투석 중' && styles.selectedText,
                ]}
              >
                복막투석 중
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.optionButton,
                selectedKidneyDisease === '신장 이식 받음' && styles.selectedButton,
              ]}
              onPress={() => handleKidneyDiseaseSelect('신장 이식 받음')}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedKidneyDisease === '신장 이식 받음' && styles.selectedText,
                ]}
              >
                신장 이식 받음
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fixedButtonContainer}>
            <TouchableOpacity
              onPress={isFormValid ? handleSave : () => Alert.alert('입력 오류', '모든 필드를 형식에 맞게 입력해주세요.')}
              style={[styles.button, isFormValid ? styles.buttonEnabled : styles.buttonDisabled]}
            >
              <Text style={[styles.buttonText, isFormValid ? styles.buttonTextEnabled : styles.buttonTextDisabled]}>저장</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSpacer} />
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100 * height_ratio,
  },
  innerContainer: {
    paddingTop: 80 * height_ratio,
    paddingHorizontal: 24 * width_ratio,
    alignItems: 'center',
  },
  title: {
    marginLeft: 4 * width_ratio,
    fontSize: 20 * width_ratio,
    ...theme.fonts.Bold,
    marginBottom: 50 * height_ratio,
    color: 'black',
    alignSelf: 'flex-start',
  },
  inputWithUnit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    borderRadius: 13 * width_ratio,
    paddingRight: 24 * width_ratio,
  },
  inputGroup: {
    flex: 1,
    marginHorizontal: 8 * width_ratio,
    marginBottom: 24 * height_ratio,
  },
  inputGroupFullWidth: {
    width: '100%',
    marginBottom: 24 * height_ratio,
  },
  label: {
    fontSize: 16 * width_ratio,
    ...theme.fonts.Regular,
    marginBottom: 12 * height_ratio,
    color: 'black',
  },
  input: {
    borderWidth: 0,
    borderColor: '#ccc',
    borderRadius: 13 * width_ratio,
    paddingVertical: 17 * height_ratio,
    paddingHorizontal: 24 * width_ratio,
    fontSize: 16 * width_ratio,
    ...theme.fonts.Regular,
    color: 'black',
  },
  unit: {
    fontSize: 16 * width_ratio,
    color: '#828287',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: -8 * width_ratio,
  },
  fixedButtonContainer: {
    paddingVertical: 20 * height_ratio,
    alignItems: 'center',
    width: '100%',
  },
  button: {
    paddingVertical: 17 * height_ratio,
    borderRadius: 24 * width_ratio,
    alignItems: 'center',
    width: '66.67%',
  },
  buttonEnabled: {
    backgroundColor: '#EBEFFE',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
  },
  buttonText: {
    fontSize: 16 * width_ratio,
    ...theme.fonts.Bold,
  },
  buttonTextEnabled: {
    color: '#7596FF',
  },
  buttonTextDisabled: {
    color: '#828287',
  },
  genderWrapper: {
    width: '100%',
    marginBottom: 24 * height_ratio,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genderButton: {
    alignItems: 'center',
    padding: 10 * width_ratio,
  },
  genderImageFemale: {
    marginLeft: 26 * width_ratio,
    width: 109 * width_ratio,
    height: 117.63 * height_ratio,
    resizeMode: 'contain',
  },
  genderImageMale: {
    marginTop: 17 * height_ratio,
    marginRight: 28 * width_ratio,
    width: 102 * width_ratio,
    height: 101 * height_ratio,
    resizeMode: 'contain',
  },
  desaturated: {
    opacity: 0.5,
  },
  errorText: {
    color: 'red',
    fontSize: 12 * width_ratio,
    marginTop: 4 * height_ratio,
  },
  kidneyDiseaseWrapper: {
    width: '100%',
    marginTop: 20 * height_ratio,
  },
  optionButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 12 * height_ratio,
    paddingHorizontal: 20 * width_ratio,
    borderRadius: 12 * width_ratio,
    marginVertical: 8 * height_ratio,
  },
  selectedButton: {
    backgroundColor: '#7596FF',
  },
  optionText: {
    fontSize: 16 * width_ratio,
    color: '#666666',
    textAlign: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  bottomSpacer: {
    height: 100 * height_ratio,
    backgroundColor: 'white',
    width: '100%',
  },
});

export default Get_User_Info_Two;