import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import theme from '../../theme';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const telecomOptions = ["SKT", "KT", "LGU+", "알뜰폰 (SKT)", "알뜰폰 (KT)", "알뜰폰 (LGU+)"];

const Authentication2Screen = () => {
  const [name, setName] = useState(''); // 이름
  const [birthdate, setBirthdate] = useState(''); // 생년월일
  const [phoneNumber, setPhoneNumber] = useState(''); // 전화번호
  const [selectedTelecom, setSelectedTelecom] = useState(''); // Selected Telecom
  const [nameFocused, setNameFocused] = useState(false);
  const [birthdateFocused, setBirthdateFocused] = useState(false);
  const [phoneNumberFocused, setPhoneNumberFocused] = useState(false);
  const [birthdateError, setBirthdateError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [telecomModalVisible, setTelecomModalVisible] = useState(false);

  const route = useRoute();
  const { selectedValue } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    // Check if all inputs are valid
    if (
      name.length > 0 && // Name can be less than 8 characters
      birthdate.length === 8 &&
      phoneNumber.length === 10 &&
      !birthdateError &&
      !phoneNumberError &&
      selectedTelecom.length > 0
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [name, birthdate, phoneNumber, birthdateError, phoneNumberError, selectedTelecom]);

  const handleAuthentication = async () => {
    if (!formValid) return;

    try {
      const request_data = {
        userName: name,
        identity: birthdate,
        phoneNo: phoneNumber,
        telecom: selectedValue,
      };
      console.log(request_data);
      const response = await axios.post('https://27f0-203-252-33-4.ngrok-free.app/health_checkup/step1', request_data);
      console.log(response.data);
      const { result, data } = response.data;
      if (result.code === "CF-03002") {
        navigation.navigate('Authentication3', {
          jti: data.jti,
          twoWayTimestamp: data.twoWayTimestamp,
          name: name,
          birthdate: birthdate,
          phoneNo: phoneNumber,
          telecom: selectedValue
        });
      } else {
        setBirthdateError(true);
        setPhoneNumberError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleTelecomSelect = (provider) => {
    setSelectedTelecom(provider);
    setTelecomModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          source={require('../../images/chevronArrowLeft.png')}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>개인정보 입력</Text>
      <Text style={styles.subtitle}>본인인증을 진행하기 위해 개인정보를 입력해주세요.</Text>
      
      <View style={styles.inputContainer}>
        <View style={[
          styles.inputWrapper, 
          nameFocused && styles.inputWrapperFocused
        ]}>
          <Text style={styles.floatingLabel}>
            이름
          </Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text.slice(0, 8))}
            placeholder={!nameFocused ? '이름 입력' : ''}
            placeholderTextColor="#777"
            maxLength={8} // Set max length to 8
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
          />
        </View>

        <View style={[
          styles.inputWrapper, 
          birthdateFocused && styles.inputWrapperFocused, 
          birthdateError && styles.inputWrapperError
        ]}>
          <Text style={styles.floatingLabel}>
            생년월일 8자리
          </Text>
          <TextInput
            style={styles.input}
            value={birthdate}
            onChangeText={(text) => setBirthdate(text.slice(0, 8))}
            placeholder={!birthdateFocused ? '생년월일' : ''}
            keyboardType="numeric"
            placeholderTextColor="#777"
            maxLength={8} // Set max length to 8
            onFocus={() => {
              setBirthdateFocused(true);
              setBirthdateError(false);
            }}
            onBlur={() => {
              setBirthdateFocused(false);
              if (birthdate.length !== 8) {
                setBirthdateError(true);
              }
            }}
          />
        </View>
        {!birthdateFocused && birthdateError && <Text style={styles.errorText}>입력한 정보를 확인해주세요</Text>}

        <View style={[
          styles.inputWrapper, 
          phoneNumberFocused && styles.inputWrapperFocused, 
          phoneNumberError && styles.inputWrapperError,
        ]}>
          <Text style={styles.floatingLabel}>휴대폰번호</Text>
          <View style={styles.phoneInputRow}>
            <TouchableOpacity
              style={styles.telecomButton}
              onPress={() => setTelecomModalVisible(true)}
            >
              <Text style={styles.telecomButtonText}>
                {selectedTelecom || "KT"}
              </Text>
              <Image
                source={require('../../images/login/underTriangle.png')}
                style={styles.underTriangleButtonImage}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text.slice(0, 10))}
              placeholder={!phoneNumberFocused ? '휴대폰번호 입력' : ''}
              keyboardType="phone-pad"
              placeholderTextColor="#777"
              maxLength={10} // Set max length to 10
              onFocus={() => {
                setPhoneNumberFocused(true);
                setPhoneNumberError(false);
              }}
              onBlur={() => {
                setPhoneNumberFocused(false);
                if (phoneNumber.length !== 10) {
                  setPhoneNumberError(true);
                }
              }}
            />
            {phoneNumber.length > 0 && (
              <TouchableOpacity onPress={() => setPhoneNumber('')}>
                <Image
                  source={require('../../images/xButton.png')}
                  style={styles.xButtonImage}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        {!phoneNumberFocused && phoneNumberError && <Text style={styles.errorText}>입력한 정보를 확인해주세요</Text>}
      </View>

      <TouchableOpacity
        style={[styles.authButton, formValid ? styles.authButtonEnabled : styles.authButtonDisabled]}
        onPress={handleAuthentication}
        disabled={!formValid}
      >
        <Text style={[styles.authButtonText, formValid ? styles.authButtonTextEnabled : styles.authButtonTextDisabled]}>
          인증 요청
        </Text>
      </TouchableOpacity>

      {/* Telecom Selection Modal */}
      <Modal
        visible={telecomModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setTelecomModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalTop}>
              <Text style={styles.modalTitle}>통신사 선택</Text>
              <TouchableOpacity
                style={styles.xButton}
                onPress={() => setTelecomModalVisible(false)}
              >
                <Image
                  source={require('../../images/xButton.png')}
                  style={styles.xButtonImage}
                />
              </TouchableOpacity>
            </View>
            {telecomOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.telecomOption}
                onPress={() => handleTelecomSelect(option)}
              >
                <Text style={styles.telecomOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20 * height_ratio,
    paddingBottom: 100 * height_ratio,
    paddingHorizontal: 24 * width_ratio, 
    backgroundColor: 'white',
  },
  backButton: {
    marginBottom: 40 * height_ratio,
  },
  backButtonImage: {
    width: 24 * width_ratio,
    height: 24 * width_ratio,
  },
  title: {
    textAlign: 'left',
    fontSize: 24 * height_ratio,
    ...theme.fonts.SemiBold,
    marginBottom: 10 * height_ratio,
    color: '#000'
  },
  subtitle: {
    textAlign: 'left',
    fontSize: 14 * height_ratio,
    marginBottom: 20 * height_ratio,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 20 * height_ratio,
  },
  inputWrapper: {
    marginBottom: 12 * height_ratio,
    borderColor: '#F1F1F1',
    borderWidth: 1,
    borderRadius: 13 * width_ratio,
    paddingVertical: 8 * height_ratio,
    paddingHorizontal: 18 * width_ratio,
  },
  inputWrapperFocused: {
    borderColor: 'black',
  },
  inputWrapperError: {
    borderColor: '#F53E50',
  },
  floatingLabel: {
    fontSize: 12 * height_ratio,
    color: '#828287',
    marginBottom: 2,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16 * height_ratio,
    paddingTop: 0,
    paddingBottom: 2 * height_ratio,
  },
  phoneInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  telecomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8 * width_ratio,
    paddingVertical: 4 * height_ratio,
    paddingHorizontal: 8 * width_ratio,
    backgroundColor: '#F1F1F1',
    borderRadius: 8 * width_ratio,
  },
  telecomButtonText: {
    fontSize: 14 * width_ratio,
    color: '#000',
  },
  underTriangleButtonImage: {
    width: 7 * width_ratio,
    height: 7 * width_ratio,
    marginLeft: 8 * width_ratio,
  },
  xButtonImage: {
    width: 20 * width_ratio,
    height: 20 * width_ratio,
    marginLeft: 8 * width_ratio,
  },
  authButton: {
    paddingVertical: 18 * height_ratio,
    borderRadius: 13 * width_ratio,
    alignItems: 'center',
  },
  authButtonDisabled: {
    backgroundColor: '#F1F1F1',
  },
  authButtonEnabled: {
    backgroundColor: '#EBEFFE',
  },
  authButtonText: {
    fontWeight: 'bold',
    fontSize: 16 * height_ratio,
  },
  authButtonTextDisabled: {
    color: '#828287',
  },
  authButtonTextEnabled: {
    color: '#7596FF',
  },
  errorText: {
    color: '#F53E50',
    fontSize: 12 * height_ratio,
    marginTop: -8 * height_ratio,
    marginBottom: 12 * height_ratio,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: 'white',
    paddingTop: 20 * height_ratio,
    paddingBottom: 30 * height_ratio,
    paddingHorizontal: 24 * width_ratio,
    borderTopLeftRadius: 20 * width_ratio,
    borderTopRightRadius: 20 * width_ratio,
  },
  modalTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24 * height_ratio,
  },
  modalTitle: {
    fontSize: 18 * height_ratio,
    fontWeight: 'bold',
  },
  xButtonImage: {
    width: 24 * width_ratio,
    height: 24 * width_ratio,
  },
  telecomOption: {
    paddingVertical: 12 * height_ratio,
  },
  telecomOptionText: {
    fontSize: 14 * height_ratio,
    color: '#000',
  },
});

export default Authentication2Screen;
