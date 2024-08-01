// /src/health_screen/authentication2.js

import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { useRoute } from '@react-navigation/native';
import RadioGroup from 'react-native-radio-buttons-group';
import CheckBox from 'react-native-checkbox';
import { privacy_usage_agreement, terms_of_service, thrid_part_info_conset } from './legal_conset_text.js';

const Authentication2Screen = () => {
  const [name, setName] = useState(''); // 이름
  const [birthdate, setBirthdate] = useState(''); // 생년월일
  const [phoneNumber, setPhoneNumber] = useState(''); // 전화번호
  const [selectedId, setSelectedId] = useState(null); // 선택된 통신사 ID
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeThirdParty, setAgreeThirdParty] = useState(false);
  const [agreeAll, setAgreeAll] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const route = useRoute();
  const { selectedValue } = route.params;

  const radioButtons = useMemo(() => [
    { id: '1', label: 'SKT', value: 'SKT', labelStyle: { color: 'black' } },
    { id: '2', label: 'KT', value: 'KT', labelStyle: { color: 'black' } },
    { id: '3', label: 'LG U+', value: 'LG U+', labelStyle: { color: 'black' } }
  ], []);

  useEffect(() => {
    if (agreePrivacy && agreeTerms && agreeThirdParty) {
      setAgreeAll(true);
    } else {
      setAgreeAll(false);
    }
  }, [agreePrivacy, agreeTerms, agreeThirdParty]);

  const handleAgreeAll = () => {
    const newValue = !agreeAll;
    setAgreeAll(newValue);
    setAgreePrivacy(newValue);
    setAgreeTerms(newValue);
    setAgreeThirdParty(newValue);
  };

  const openModal = (text) => {
    setModalText(text);
    setModalVisible(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={{ color: 'black', marginBottom: 20 }}>나는 /src/health_screen/authentication2.js 🎉</Text>
        <Text style={{ color: 'black', marginBottom: 20 }}>개인정보 입력</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="홍길동"
            placeholderTextColor="#777"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>생년월일</Text>
          <TextInput
            style={styles.input}
            value={birthdate}
            onChangeText={setBirthdate}
            placeholder="20240101"
            keyboardType="numeric"
            placeholderTextColor="#777"
          />
        </View>
        <View style={styles.inputRow}>
          <Text style={styles.label}>휴대폰번호</Text>
          <TextInput
            style={styles.phoneInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="01012345678"
            keyboardType="phone-pad"
            placeholderTextColor="#777"
          />
        </View>
        {selectedValue === 5 && (
          <View style={styles.inputRow}>
            <Text style={styles.label}>통신사</Text>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
              layout="row"
            />
          </View>
        )}
        <View style={styles.checkboxContainer}>
          <CheckBox
            label="이용약관 전체동의"
            checked={agreeAll}
            onChange={handleAgreeAll}
          />
        </View>
        <View style={styles.separator} />
        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxRow}>
            <CheckBox
              label="개인정보이용동의(필수)"
              checked={agreePrivacy}
              onChange={() => setAgreePrivacy(!agreePrivacy)}
            />
            <TouchableOpacity onPress={() => openModal(privacy_usage_agreement)}>
              <Text style={styles.link}>보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              label="서비스이용약관동의(필수)"
              checked={agreeTerms}
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <TouchableOpacity onPress={() => openModal(terms_of_service)}>
              <Text style={styles.link}>보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              label="제3자정보제공동의(필수)"
              checked={agreeThirdParty}
              onChange={() => setAgreeThirdParty(!agreeThirdParty)}
            />
            <TouchableOpacity onPress={() => openModal(thrid_part_info_conset)}>
              <Text style={styles.link}>보기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.modalScrollViewContent}>
            <Text style={styles.modalText}>{modalText}</Text>
          </ScrollView>
          <TouchableOpacity style={styles.modalButtonContainer} onPress={() => setModalVisible(false)}>
            <Text style={styles.modalButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
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
  checkboxContainer: {
    marginTop: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  separator: {
    height: 1,
    backgroundColor: '#000',
    width: '100%',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    right: '5%',
    bottom: '20%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalScrollViewContent: {
    paddingVertical: 20,
  },
  modalText: {
    color: 'black',
  },
  modalButtonContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1677FF',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Authentication2Screen;
