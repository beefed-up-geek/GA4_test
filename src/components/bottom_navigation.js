// src/components/bottom_navigation.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealthScreen from '../screen/healthscreen';
import HomeScreen from '../screen/home';
import MedicineScreen from '../screen/medicine';
import KitScreen from '../screen/kit';
import Authentication1Screen from '../screen/healthscreen/authentication1';
import Authentication2Screen from '../screen/healthscreen/authentication2';
import Authentication3Screen from '../screen/healthscreen/authentication3';
import Header from './header';
import Kit_checkupScreen1 from '../screen/Kit_checkup';
import Kit_checkupScreen2 from '../screen/Kit_checkup/Kit_checkup2';
import Kit_checkupScreen3 from '../screen/Kit_checkup/Kit_checkup3';
import QRCodeScreen from '../screen/Kit_checkup/QRcode';
import TabDesign from './bottomtab_design';
import CameraScreen from '../screen/Kit_checkup/Camera';
import HospitalScreen from '../screen/hospital';
import searchResult from '../screen/medicine/searchResult';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const stackScreenOptions = {
  headerTitle: () => <Header />,
  headerLeft: () => null,
  headerStyle: {
    height: 64,
  },
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
    <Stack.Screen name="searchResult" component={searchResult} />
  </Stack.Navigator>
);

const KitStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="KitResult" component={KitScreen} />
    <Stack.Screen name="Kit_checkup1" component={Kit_checkupScreen1} />
    <Stack.Screen name="Kit_checkup2" component={Kit_checkupScreen2} />
    <Stack.Screen name="Kit_checkup3" component={Kit_checkupScreen3} />
    <Stack.Screen name="QRcode" component={QRCodeScreen} />
    <Stack.Screen name="Camera" component={CameraScreen} />
  </Stack.Navigator>
);

const HospitalStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Hospital" component={HospitalScreen} />
  </Stack.Navigator>
);

const iconSources = {
  HomeStack: require('../images/bottm_navigation/home.png'),
  KitStack: require('../images/bottm_navigation/kit.png'),
  HealthStack: require('../images/bottm_navigation/health.png'),
  HospitalStack: require('../images/bottm_navigation/hospital.png'),
  MedicineStack: require('../images/bottm_navigation/drug.png'),
};

const selectedIconSources = {
  HomeStack: require('../images/bottm_navigation/homewhite.png'),
  KitStack: require('../images/bottm_navigation/kitwhite.png'),
  HealthStack: require('../images/bottm_navigation/healthwhite.png'),
  HospitalStack: require('../images/bottm_navigation/hospitalwhite.png'),
  MedicineStack: require('../images/bottm_navigation/drugwhite.png'),
};

// 한국어 라벨 설정
const tabLabels = {
  HomeStack: '홈 화면',
  KitStack: '키트 결과',
  HealthStack: '건강검진',
  HospitalStack: '병원 찾기',
  MedicineStack: '약 검색',
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 24,
          elevation: 5,
          backgroundColor: '#fff',
          height: 64,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="KitStack" component={KitStack} />
      <Tab.Screen name="HealthStack" component={HealthStack} />
      <Tab.Screen name="HospitalStack" component={HospitalStack} />
      <Tab.Screen name="MedicineStack" component={MedicineStack} />
    </Tab.Navigator>
  );
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.floatingContainer}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const { options } = descriptors[route.key];

          // 탭 라벨을 한국어로 설정
          const label = tabLabels[route.name];

          const iconSource = isFocused
            ? selectedIconSources[route.name]
            : iconSources[route.name];

          const onPress = () => {
            navigation.navigate(route.name);
          };

          return (
            <TabDesign
              key={route.key}
              label={label}
              iconSource={iconSource}
              isSelected={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -175 }],
    backgroundColor: 'transparent',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 350,
    borderRadius: 24,
    elevation: 5,
  },
});

export default BottomNavigation;
