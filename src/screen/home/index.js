import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Circle, Svg, Line} from 'react-native-svg';

const {width} = Dimensions.get('screen');

const AnimatedLine = Animated.createAnimatedComponent(Line);

const HomeScreen = () => {
  const [lastCheckupDate, setLastCheckupDate] = useState('');
  const [daysSinceLastCheckup, setDaysSinceLastCheckup] = useState(null);
  const rotation = useSharedValue(0);

  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);

  const targets = {
    carbs: 300,
    protein: 40,
    fat: 80,
    sodium: 2000,
    potassium: 2500,
    phosphorus: 900,
  };

  const baseDuration = 500; // 기본 3초

  const incrementValues = (setValue, target, duration, incrementStep = 1) => {
    const stepTime = duration / (target / incrementStep);

    const interval = setInterval(() => {
      setValue(prev => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + incrementStep;
      });
    }, stepTime);
  };

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

      // 180도 회전 후에 흔들리는 효과 추가
      rotation.value = withTiming(
        180,
        {
          duration: 200, // 0.5초에 180도 회전
          easing: Easing.linear,
        },
        () => {
          // 흔들리는 효과 추가
          rotation.value = withSpring(120, {
            damping: 4,
            stiffness: 400,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.007,
            restSpeedThreshold: 0.01,
          });
        },
      );
    };

    fetchLastCheckupDate();

    // 영양 성분마다 다른 incrementStep을 적용하여 증가 속도를 조절합니다.
    incrementValues(setCarbs, targets.carbs, baseDuration, 15);
    incrementValues(setProtein, targets.protein, baseDuration, 2); // 기본
    incrementValues(setFat, targets.fat, baseDuration, 4); // 빠르게 증가
    incrementValues(setSodium, targets.sodium, baseDuration, 100); // 매우 빠르게 증가
    incrementValues(setPotassium, targets.potassium, baseDuration, 125); // 매우 빠르게 증가
    incrementValues(setPhosphorus, targets.phosphorus, baseDuration, 45); // 빠르게 증가
  }, []);

  const calculateDaysDifference = dateString => {
    const checkupDate = new Date(dateString);
    const today = new Date();
    const differenceInTime = today - checkupDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  const animatedProps = useAnimatedProps(() => {
    const angleInRadians = (rotation.value * Math.PI) / 180;
    const radius = 110;
    const x2 = 150 - radius * Math.cos(angleInRadians);
    const y2 = 150 - radius * Math.sin(angleInRadians);

    return {
      x2: `${x2}`,
      y2: `${y2}`,
    };
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.profileText}>내 프로필</Text>
          <Image
            source={require('../../images/home/user.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.infoTitleContainer}>
          <Image
            source={require('../../images/home/exclamation.png')}
            style={styles.infoIcon}
          />
          <Text style={styles.infoTitle}>
            최근 검사 : {lastCheckupDate ? lastCheckupDate : '검사 이력 없음'}
          </Text>
        </View>
        {lastCheckupDate ? (
          <Text style={styles.infoSubtitle}>
            마지막 검사자 {daysSinceLastCheckup}일 전이에요. 지금 검사하고
            꾸준히 콩팥 건강을 관리해 보세요.
          </Text>
        ) : (
          <Text style={styles.infoSubtitle}>
            소변검사로 간편하게 신장기능을 확인해보세요
          </Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.kitButton}>
            <Text style={styles.buttonText}>키트 구매하기</Text>
            <Image
              source={require('../../images/home/go.png')}
              style={styles.goIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.testButton}>
            <Text style={styles.buttonText}>검사하러 가기</Text>
            <Image
              source={require('../../images/home/go.png')}
              style={styles.goIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.dialBox}>
        <Svg
          justifyContent="center"
          alignItems="center"
          width="300"
          height="180">
          <Image
            source={require('../../images/home/state.png')}
            style={styles.dialImage}
          />
          <Circle cx="150" cy="150" r="3" fill="blue" />
          <AnimatedLine
            x1="150"
            y1="150"
            x2="40"
            y2="150"
            stroke="blue"
            strokeWidth="4"
            animatedProps={animatedProps}
          />
        </Svg>
        <Text style={styles.dialText}>
          콩팥 기능의 콩팥 건강은? 단계에요. 자가진단키트로 검사하고 콩팥 기능
          단계를 알아보세요.
        </Text>
      </View>
      <View style={styles.nutritionContainer}>
        <View style={styles.nutritionHeader}>
          <Text style={styles.nutritionTitle}>맞춤 영양 정보</Text>
          <TouchableOpacity style={styles.nutritionInfoButton}>
            <Image
              source={require('../../images/home/nutrition.png')}
              style={styles.nutritionIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.nutritionBoxContainer}>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>탄수화물</Text>
            <Text style={styles.nutritionValue}>{carbs}g</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>단백질</Text>
            <Text style={styles.nutritionValue}>{protein}g</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>지방</Text>
            <Text style={styles.nutritionValue}>{fat}g</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>나트륨</Text>
            <Text style={styles.nutritionValue}>{sodium}mg</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>칼륨</Text>
            <Text style={styles.nutritionValue}>{potassium}mg</Text>
          </View>
          <View style={styles.nutritionBox}>
            <Text style={styles.nutritionLabel}>인</Text>
            <Text style={styles.nutritionValue}>{phosphorus}mg</Text>
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
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  dialImage: {
    width: (width * 3) / 4,
    height: (width * 3) / 4 / 2,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  needleImage: {
    position: 'absolute',
    width: 10,
    height: (width * 3) / 8, // 바늘의 길이를 조정하세요
    resizeMode: 'contain',
    bottom: '50%',
    left: '50%',
    transform: [{translateX: -5}, {translateY: 0}], // 바늘의 중심을 기준으로 위치 조정
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
    shadowOffset: {width: 0, height: 2},
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
});

export default HomeScreen;
