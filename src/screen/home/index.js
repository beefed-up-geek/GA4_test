import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('screen');

const HomeScreen = () => {
  const [lastCheckupDate, setLastCheckupDate] = useState('');
  const [daysSinceLastCheckup, setDaysSinceLastCheckup] = useState(null);

  useEffect(() => {
    const fetchLastCheckupDate = async () => {
      try {
        const storedDate = await AsyncStorage.getItem('last_kit_checkup');
        if (storedDate) {
          setLastCheckupDate(storedDate);
          const daysDifference = calculateDaysDifference(storedDate);
          setDaysSinceLastCheckup(daysDifference);
        }
      } catch (error) {
        console.error('Failed to load last checkup date', error);
      }
    };

    fetchLastCheckupDate();
  }, []);

  const calculateDaysDifference = (dateString) => {
    const checkupDate = new Date(dateString);
    const today = new Date();
    const differenceInTime = today - checkupDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileText}>내 프로필</Text>
          <Image source={require('../../images/home/user.png')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoBox}>
        <View style={styles.infoTitleContainer}>
          <Image source={require('../../images/home/exclamation.png')} style={styles.infoIcon} />
          <Text style={styles.infoTitle}>
            최근 검사 : {lastCheckupDate ? lastCheckupDate : '검사 이력 없음'}
          </Text>
        </View>
        {lastCheckupDate ? (
          <Text style={styles.infoSubtitle}>
            마지막 검사자 {daysSinceLastCheckup}일 전이에요. 지금 검사하고 꾸준히 콩팥 건강을 관리해 보세요.
          </Text>
        ) : (
          <Text style={styles.infoSubtitle}>
            소변검사로 간편하게 신장기능을 확인해보세요
          </Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.kitButton}>
            <Text style={styles.buttonText}>키트 구매하기</Text>
            <Image source={require('../../images/home/go.png')} style={styles.goIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.testButton}>
            <Text style={styles.buttonText}>검사하러 가기</Text>
            <Image source={require('../../images/home/go.png')} style={styles.goIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dialBox}>
        <Image source={require('../../images/home/state.png')} style={styles.dialImage} />
        <Text style={styles.dialText}>
          콩팥 기능의 콩팥 건강은? 단계에요. 자가진단키트로 검사하고 콩팥 기능 단계를 알아보세요.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 16,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
  },
  profileText: {
    marginRight: 8,
    fontSize: 16,
    color: '#4F4F4F',
  },
  profileIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  infoBox: {
    backgroundColor: '#EBEFFE',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: width - 32,
  },
  infoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kitButton: {
    backgroundColor: 'white',
    borderColor: '#7596FF',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: 8,
  },
  testButton: {
    backgroundColor: 'white',
    borderColor: '#7596FF',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonText: {
    color: '#7596FF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  goIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    resizeMode: 'contain',
  },
  dialBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  dialImage: {
    width: (width * 3) / 4,
    height: ((width * 3) / 4) / 2,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  dialText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;
