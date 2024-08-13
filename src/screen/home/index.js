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
import {createStackNavigator} from '@react-navigation/stack';
import theme from '../../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Circle, Svg, Polygon, Image as SvgImage} from 'react-native-svg';
import LottieView from 'lottie-react-native'; // LottieView import
import animationData from '../../images/home/click.json'; // JSON 파일 경로

const {width} = Dimensions.get('screen');
const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

const HomeScreen = ({setSelected}) => {
  const [userName, setUserName] = useState('');
  const [lastCheckupDate, setLastCheckupDate] = useState('');
  const [daysSinceLastCheckup, setDaysSinceLastCheckup] = useState(null);
  const rotation = useSharedValue(0);

  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [potassium, setPotassium] = useState(0);
  const [phosphorus, setPhosphorus] = useState(0);

  const handleTestNavigation = () => {
    setSelected('KitResult');
  };

  const targets = {
    carbs: 300,
    protein: 40,
    fat: 80,
    sodium: 2000,
    potassium: 2500,
    phosphorus: 900,
  };

  const baseDuration = 500;

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
    const fetchUserInfoAndLastCheckupDate = async () => {
      try {
        // Fetch and parse user info
        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          setUserName(userInfo.name);
        }

        // Fetch last checkup date
        const storedDate = await AsyncStorage.getItem('last_kit_checkup');
        if (storedDate) {
          setLastCheckupDate(storedDate);
          const daysDifference = calculateDaysDifference(storedDate);
          setDaysSinceLastCheckup(daysDifference);
        }
      } catch (error) {
        console.error('Failed to load user info or last checkup date', error);
      }

      rotation.value = withTiming(
        180,
        {
          duration: 200,
          easing: Easing.linear,
        },
        () => {
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

    fetchUserInfoAndLastCheckupDate();

    incrementValues(setCarbs, targets.carbs, baseDuration, 15);
    incrementValues(setProtein, targets.protein, baseDuration, 2);
    incrementValues(setFat, targets.fat, baseDuration, 4);
    incrementValues(setSodium, targets.sodium, baseDuration, 100);
    incrementValues(setPotassium, targets.potassium, baseDuration, 125);
    incrementValues(setPhosphorus, targets.phosphorus, baseDuration, 45);
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
    const radius = 100;
    const xTip = 150 - radius * Math.cos(angleInRadians);
    const yTip = 150 - radius * Math.sin(angleInRadians);

    // Define the width of the base of the needle
    const baseWidth = 7;
    const xBase1 = 150 + (baseWidth / 2) * Math.sin(angleInRadians);
    const yBase1 = 150 - (baseWidth / 2) * Math.cos(angleInRadians);
    const xBase2 = 150 - (baseWidth / 2) * Math.sin(angleInRadians);
    const yBase2 = 150 + (baseWidth / 2) * Math.cos(angleInRadians);

    return {
      points: `${xTip},${yTip} ${xBase1},${yBase1} ${xBase2},${yBase2}`,
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
          <Text style={styles.infoTitle}>아직 검사를 하지 않았어요</Text>
        </View>
        {lastCheckupDate ? (
          <Text style={styles.infoText}>
            마지막 검사가 {daysSinceLastCheckup}일 전이에요. 지금 검사하고
            꾸준히 콩팥 건강을 관리해 보세요.
          </Text>
        ) : (
          <Text style={styles.infoText}>
            빠르고 간편한 신장기능 진단키트로{'\n'}지금 검사하고 꾸준히 신장
            건강을 관리해 보세요.
          </Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.kitButton}>
            <LottieView
              source={animationData}
              autoPlay
              loop
              style={styles.lottieAnimation} // 스타일 수정
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.testButton}>
            <Text style={styles.buttonText}>키트 구매하기</Text>
            <Image
              source={require('../../images/home/go.png')}
              style={styles.goIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.testButton}
            onPress={handleTestNavigation}>
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
          <SvgImage
            href={require('../../images/home/state.png')}
            x="0"
            y="0"
            width="300"
            height="180"
          />
          <AnimatedPolygon
            points="150,150 150,40 160,150" // Initial dummy points
            fill="#ACACAC"
            animatedProps={animatedProps}
          />
          <Circle cx="150" cy="150" r="7" fill="#ACACAC" />
          <Circle cx="150" cy="150" r="3" fill="white" />
        </Svg>
        <Text style={styles.dialText1}>
          {userName}님의 콩팥 건강은 ? 단계에요.
        </Text>
        <Text style={styles.dialText2}>
          자가진단키트로 검사하고 {userName}님의 콩팥 기능 단계를 알아보세요.
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
    paddingHorizontal: 16 * width_ratio,
    paddingTop: 16 * height_ratio,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16 * height_ratio,
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24 * height_ratio,
  },
  profileText: {
    ...theme.fonts.Regular,
    marginRight: 8 * width_ratio,
    fontSize: 14 * width_ratio,
    color: '#72777A',
  },
  profileIcon: {
    width: 24 * width_ratio,
    height: 24 * height_ratio,
    resizeMode: 'contain',
  },
  infoBox: {
    backgroundColor: '#EBEFFE',
    borderRadius: 8 * width_ratio,
    padding: 24 * width_ratio,
    marginBottom: 24 * height_ratio,
    width: width - 32 * width_ratio,
  },
  infoTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20 * height_ratio,
  },
  infoIcon: {
    width: 24 * width_ratio,
    height: 24 * height_ratio,
    marginRight: 8 * width_ratio,
    resizeMode: 'contain',
  },
  infoTitle: {
    fontSize: 16 * width_ratio,
    ...theme.fonts.SemiBold,
    color: '#4D495A',
  },
  infoText: {
    fontSize: 14 * width_ratio,
    ...theme.fonts.Medium,
    color: '#666',
    marginBottom: 18 * height_ratio,
    marginLeft: 6 * width_ratio,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  testButton: {
    backgroundColor: 'white',
    borderColor: '#7596FF',
    paddingVertical: 12 * height_ratio,
    paddingLeft: 22 * width_ratio,
    paddingRight: 20 * width_ratio,
    borderRadius: 30 * width_ratio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#7596FF',
    fontSize: 14 * width_ratio,
    ...theme.fonts.Bold,
  },
  goIcon: {
    width: 16 * width_ratio,
    height: 16 * height_ratio,
    marginLeft: 11 * width_ratio,
    resizeMode: 'contain',
  },
  dialBox: {
    backgroundColor: 'white',
    borderRadius: 8 * width_ratio,
    marginBottom: 42 * height_ratio,
    paddingVertical: 38 * height_ratio,
    paddingHorizontal: 32 * width_ratio,
    shadowColor: '#BFBFBF',
    // shadowOffset: { width: 4 * width_ratio, height: 6 * height_ratio },  // Similar to 4px 6px in CSS
    // shadowOpacity: 0.05,  // Corresponds to the rgba(0, 0, 0, 0.05)
    // shadowRadius: 40 * width_ratio,  // Similar to the blur effect in the shadow
    elevation: 60, // Low elevation for Android, as the shadow is subtle
    zIndex: 0, // Ensures it is above other components
  },
  dialImage: {
    width: (width * 3) / 4,
    height: (width * 3) / 4 / 2,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  dialText1: {
    fontSize: 14 * width_ratio,
    marginTop: 30 * height_ratio,
    marginBottom: 4 * height_ratio,
    textAlign: 'left',
    color: '#666',
  },
  dialText2: {
    ...theme.fonts.Regular,
    fontSize: 14 * width_ratio,
    color: '#666',
  },
  nutritionContainer: {
    marginBottom: 16 * height_ratio,
    padding: 16 * width_ratio,
    borderRadius: 16 * width_ratio,
    zIndex: 1, // Ensures it stays below dialBox in stacking order
  },
  nutritionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20 * height_ratio,
  },
  nutritionTitle: {
    fontSize: 18 * width_ratio,
    ...theme.fonts.Bold,
    color: '#5D5D62',
    marginRight: 4 * width_ratio,
  },
  nutritionInfoButton: {
    padding: 4 * width_ratio,
  },
  nutritionIcon: {
    width: 20 * width_ratio,
    height: 20 * height_ratio,
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
    borderRadius: 12 * width_ratio,
    paddingHorizontal: 18 * width_ratio,
    width: (width - 72 * width_ratio) / 3,
    height: (width - 72 * width_ratio) / 4,
    justifyContent: 'center',
    alignItems: 'left',
    marginBottom: 8 * height_ratio,
    zIndex: 0, // Ensures it doesn't overlap with dialBox shadow
    shadowColor: '#BFBFBF',
    // shadowOffset: { width: 100 * width_ratio, height: 100 * height_ratio },  // Similar to 4px 6px in CSS
    // shadowOpacity: 0.05,  // only for iOS
    // shadowRadius: 40 * width_ratio,  // Similar to the blur effect in the shadow
    elevation: 10, // for Android
  },
  nutritionLabel: {
    fontSize: 14 * width_ratio,
    color: '#666',
    marginBottom: 4 * height_ratio,
  },
  nutritionValue: {
    fontSize: 16 * width_ratio,
    ...theme.fonts.Bold,
    color: '#333',
  },
  bottomSpacer: {
    height: 100 * height_ratio,
  },
});

export default HomeScreen;
