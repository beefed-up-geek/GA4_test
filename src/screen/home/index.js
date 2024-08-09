import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('screen');

const HomeScreen = ({ setSelected }) => {
  const [lastCheckupDate, setLastCheckupDate] = useState('');
  const [daysSinceLastCheckup, setDaysSinceLastCheckup] = useState(null);
  const [nutritionInfo, setNutritionInfo] = useState({
    carbs: 0,
    protein: 0,
    fat: 0,
    sodium: 0,
    potassium: 0,
    phosphorus: 0,
  });
  const [userInfo, setUserInfo] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const fetchUserInfoAndCheckupDate = async () => {
      try {
        const storedDate = await AsyncStorage.getItem('last_kit_checkup');
        if (storedDate) {
          setLastCheckupDate(storedDate);
          const daysDifference = calculateDaysDifference(storedDate);
          setDaysSinceLastCheckup(daysDifference);
        }

        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (userInfoString) {
          const userInfoData = JSON.parse(userInfoString);
          setUserInfo(userInfoData);
          calculateNutrition(userInfoData.weight);
        }
      } catch (error) {
        console.error('Failed to load last checkup date or user info', error);
      }
    };

    fetchUserInfoAndCheckupDate();
  }, []);

  const calculateDaysDifference = (dateString) => {
    const checkupDate = new Date(dateString);
    const today = new Date();
    const differenceInTime = today - checkupDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  const calculateNutrition = (weight) => {
    const carbs = weight * 4.5;
    const protein = weight * 0.7;
    const fat = weight * 1.2;
    const sodium = weight * 25;
    const potassium = weight * 45;
    const phosphorus = weight * 10;

    setNutritionInfo({
      carbs,
      protein,
      fat,
      sodium,
      potassium,
      phosphorus,
    });
  };

  const handleKitPurchase = () => {
    const url = 'https://smartstore.naver.com/cym702/products/9217104746';
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  const handleTestNavigation = () => {
    setSelected('KitResult');
  };

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const closeTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
          <TouchableOpacity style={styles.kitButton} onPress={handleKitPurchase}>
            <Text style={styles.buttonText}>키트 구매하기</Text>
            <Image source={require('../../images/home/go.png')} style={styles.goIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.testButton} onPress={handleTestNavigation}>
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

      <View style={styles.nutritionContainer}>
        <View style={styles.nutritionHeader}>
          <Text style={styles.nutritionTitle}>맞춤 영양 정보</Text>
          <TouchableOpacity style={styles.nutritionInfoButton} onPress={toggleTooltip}>
            <Image source={require('../../images/home/nutrition.png')} style={styles.nutritionIcon} />
          </TouchableOpacity>
        </View>
        {showTooltip && userInfo && (
          <TouchableOpacity style={styles.overlay} onPress={closeTooltip} activeOpacity={1}>
            <View style={styles.tooltipContainer}>
              <View style={styles.tooltip}>
                <Text style={styles.tooltipText}>
                  {`${userInfo.name}님을 위한 영양소 지침입니다.\n`}
                  {`신장병 상태: ${userInfo.kidneyDisease}\n`}
                  {`체중: ${userInfo.weight} kg\n`}
                  {`키트검사 결과: 없음`}
                </Text>
              </View>
              <View style={styles.tooltipArrow} />
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.nutritionBoxContainer}>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>탄수화물</Text>
            <Text style={styles.nutritionValue}>{nutritionInfo.carbs.toFixed(1)}g</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>단백질</Text>
            <Text style={styles.nutritionValue}>{nutritionInfo.protein.toFixed(1)}g</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>지방</Text>
            <Text style={styles.nutritionValue}>{nutritionInfo.fat.toFixed(1)}g</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>나트륨</Text>
            <Text style={styles.nutritionValue}>{nutritionInfo.sodium.toFixed(1)}mg</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>칼륨</Text>
            <Text style={styles.nutritionValue}>{nutritionInfo.potassium.toFixed(1)}mg</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>인</Text>
            <Text style={styles.nutritionValue}>{nutritionInfo.phosphorus.toFixed(1)}mg</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  nutritionContainer: {
    marginBottom: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
  },
  nutritionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  nutritionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 4,
  },
  nutritionInfoButton: {
    padding: 4,
  },
  nutritionIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  tooltipContainer: {
    position: 'absolute',
    top: -100, // Adjusted to place the tooltip above the button
    right: (width/ 3), // Centered horizontally
    alignItems: 'center',
  },
  tooltip: {
    backgroundColor: '#7596FF',
    padding: 10,
    borderRadius: 8,
    width: width * 2 / 3,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  tooltipText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 20,
  },
  tooltipArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#7596FF',
    marginTop: -1,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  nutritionBoxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },
  nutritionBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: (width - 72) / 3,
    height: (width - 72) / 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  nutritionLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  bottomSpacer: {
    height: 100,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: '100%',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
});

export default HomeScreen;
