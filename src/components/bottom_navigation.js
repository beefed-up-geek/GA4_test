import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HealthScreen from '../screen/healthscreen';
//import HomeScreen from '../screen/home';
import HomeScreen from '../screen/home/hardcoding';
import MedicineScreen from '../screen/medicine';
import KitScreen from '../screen/kit';
import DietScreen from '../screen/diet';
import Authentication1Screen from '../screen/healthscreen/authentication1';
import Authentication2Screen from '../screen/healthscreen/authentication2';
import Authentication3Screen from '../screen/healthscreen/authentication3';
import Header from './header';
import Kit_checkupScreen1 from '../screen/Kit_checkup';
import {Kit_checkupScreen2} from '../screen/Kit_checkup/Kit_checkup2';
import {Kit_checkupScreen3} from '../screen/Kit_checkup/Kit_checkup3';
import QRCodeScreen from '../screen/Kit_checkup/QRcode';
import LoginScreen from '../screen/medicine/Login';
import LoginScreen2 from '../screen/medicine/Login2';
import TabButton from './TapButton'; //하단 바 디자인

const Stack = createStackNavigator();

const stackScreenOptions = {
  headerTitle: () => <Header />,
  headerLeft: () => null, // 기본 타이틀 숨김
};

const HealthStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Health" component={HealthScreen} />
    <Stack.Screen name="Authentication1" component={Authentication1Screen} />
    <Stack.Screen name="Authentication2" component={Authentication2Screen} />
    <Stack.Screen name="Authentication3" component={Authentication3Screen} />
  </Stack.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const MedicineStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Medicine" component={MedicineScreen} />
  </Stack.Navigator>
);

const KitStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Kit" component={KitScreen} />
    <Stack.Screen name="Kit_checkup1" component={Kit_checkupScreen1} />
    <Stack.Screen name="Kit_checkup2" component={Kit_checkupScreen2} />
    <Stack.Screen name="Kit_checkup3" component={Kit_checkupScreen3} />
    <Stack.Screen name="QRcode" component={QRCodeScreen} />
    <Stack.Screen name="Login2" component={LoginScreen2} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
);

const DietStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Diet" component={DietScreen} />
  </Stack.Navigator>
);

const BottomNavigation = () => {
  const [selected, setSelected] = useState('Home');
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        {selected === 'Home' && <HomeStack />}
        {selected === 'HealthCheck' && <HealthStack />}
        {selected === 'KitResult' && <KitStack />}
        {selected === 'RecommendDiet' && <DietStack />}
        {selected === 'DrugSearch' && <MedicineStack />}
      </View>
      <View style={styles.floatingContainer}>
        <View style={styles.container}>
          <TabButton
            label="홈 화면"
            iconName="home-outline"
            isSelected={selected === 'Home'}
            onPress={() => {
              setSelected('Home');
            }}
          />
          <TabButton
            label="키트 결과"
            iconName="pencil-outline"
            isSelected={selected === 'KitResult'}
            onPress={() => {
              setSelected('KitResult');
            }}
          />
          <TabButton
            label="건강검진"
            iconName="heart-outline"
            isSelected={selected === 'HealthCheck'}
            onPress={() => {
              setSelected('HealthCheck');
            }}
          />
          <TabButton
            label="추천 식단"
            iconName="silverware-fork-knife"
            isSelected={selected === 'RecommendDiet'}
            onPress={() => {
              setSelected('RecommendDiet');
            }}
          />
          <TabButton
            label="약 검색"
            iconName="pill"
            isSelected={selected === 'DrugSearch'}
            onPress={() => {
              setSelected('DrugSearch');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{translateX: -175}], // width의 절반만큼 왼쪽으로 이동
    backgroundColor: 'transparent', // 배경색을 투명하게 설정
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    width: 350,
    borderRadius: 24,
    elevation: 5, // 그림자 효과 추가
  },
});

export default BottomNavigation;
