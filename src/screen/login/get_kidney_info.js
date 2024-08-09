import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetKidneyInfo = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = async () => {
    if (!selectedOption) {
      Alert.alert('선택 오류', '하나의 옵션을 선택해주세요.');
      return;
    }

    try {
      const storedUserInfo = await AsyncStorage.getItem('userInfo');
      if (storedUserInfo !== null) {
        const userInfo = JSON.parse(storedUserInfo);
        userInfo.kidneyDisease = selectedOption;  // Add the selected kidney disease info
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        Alert.alert('정보 저장 완료', '사용자 정보가 성공적으로 저장되었습니다.');
        console.log("<<< GetKidneyInfo화면 사용자 정보 저장됨 >>>");
        const temp = await AsyncStorage.getItem('userInfo');
        console.log(temp);
        navigation.navigate('BottomNavigation');
      }
    } catch (error) {
      Alert.alert('저장 오류', '사용자 정보를 저장하는 데 실패했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>만성콩팥병 진단을 받으셨나요?</Text>

      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === '해당사항 없음' && styles.selectedButton,
        ]}
        onPress={() => handleOptionSelect('해당사항 없음')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === '해당사항 없음' && styles.selectedText,
          ]}
        >
          해당사항 없음
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === '만성콩팥병 (투석 전)' && styles.selectedButton,
        ]}
        onPress={() => handleOptionSelect('만성콩팥병 (투석 전)')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === '만성콩팥병 (투석 전)' && styles.selectedText,
          ]}
        >
          만성콩팥병 (투석 전)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === '혈액투석 중' && styles.selectedButton,
        ]}
        onPress={() => handleOptionSelect('혈액투석 중')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === '혈액투석 중' && styles.selectedText,
          ]}
        >
          혈액투석 중
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === '복막투석 중' && styles.selectedButton,
        ]}
        onPress={() => handleOptionSelect('복막투석 중')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === '복막투석 중' && styles.selectedText,
          ]}
        >
          복막투석 중
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === '신장 이식 받음' && styles.selectedButton,
        ]}
        onPress={() => handleOptionSelect('신장 이식 받음')}
      >
        <Text
          style={[
            styles.optionText,
            selectedOption === '신장 이식 받음' && styles.selectedText,
          ]}
        >
          신장 이식 받음
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNext} // Handle the next button press
      >
        <Text style={styles.nextButtonText}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  question: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
    color: '#333333',
  },
  optionButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
  },
  selectedButton: {
    backgroundColor: '#7596FF',
  },
  optionText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  nextButton: {
    marginTop: 24,
    backgroundColor: '#E3EAFD',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 24,
  },
  nextButtonText: {
    fontSize: 18,
    color: '#4A61ED',
    textAlign: 'center',
  },
});

export default GetKidneyInfo;
