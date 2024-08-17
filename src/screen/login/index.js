import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withDelay,
} from 'react-native-reanimated';
import splashImage from '../../images/login/splash1.png';

const Login1 = () => {
  const navigation = useNavigation();
  const rotationY = useSharedValue(0);

  useEffect(() => {
    // 이미지 회전 애니메이션
    rotationY.value = withRepeat(
      withTiming(360, {duration: 1000}), // 1초 동안 360도 회전
      -1, // 무한 반복
      true, // 역방향 반복
    );

    const checkLoginMethod = async () => {
      const loginMethod = await AsyncStorage.getItem('loginMethod');
      const userInfo = await AsyncStorage.getItem('userInfo');
      const storedDate = await AsyncStorage.getItem('healthscreen_last_update');
      const storedData = await AsyncStorage.getItem('healthscreen_data');
      console.log('<<< loginMethod >>>');
      console.log(loginMethod);
      console.log('<<< userId >>>');
      console.log(await AsyncStorage.getItem('userId'));
      console.log('<<< username >>>');
      console.log(await AsyncStorage.getItem('username'));
      console.log('<<< userInfo >>>');
      console.log(userInfo);
      console.log("<< healthscreen_last_update >>");
      console.log(storedDate);
      console.log("<< healthscreen_data >>");
      console.log(JSON.parse(storedData));

      if (loginMethod) {
        const timer = setTimeout(() => {
          if (userInfo) {
            navigation.replace('BottomNavigation');
          } else {
            navigation.replace('GetUserInfo');
          }
        }, 3000);
      } else {
        const timer = setTimeout(() => {
          navigation.replace('Login2');
        }, 3000);

        return () => clearTimeout(timer);
      }
    };

    checkLoginMethod();

    setTimeout(() => {
      rotationY.value = withTiming(0, {duration: 500}); // 애니메이션 종료 후 회전 멈춤
    }, 2000); // 2.5초 후에 회전을 멈추도록 설정
  }, [navigation, rotationY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {perspective: 1000}, // 입체감을 위한 perspective 설정
        {rotateY: `${rotationY.value}deg`}, // Y축 기준 3D 회전
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={splashImage}
        style={[styles.image, animatedStyle]}
      />
      <Text style={styles.descriptionText}>빠르고 간편한</Text>
      <Text style={styles.descriptionText}>신장기능 조기 진단 검사지</Text>
      <ActivityIndicator
        size="large"
        color="#1677FF"
        style={styles.loadingIndicator}
      />
      <Text style={styles.footerText}>HNSBio.lab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  descriptionText: {
    fontSize: 16,
    color: 'gray',
  },
  loadingIndicator: {
    marginTop: 50,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 14,
    color: 'gray',
  },
});

export default Login1;
