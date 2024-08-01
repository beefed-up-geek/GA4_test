// /src/components/bottom_navigation.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HealthScreen from '../screen/healthscreen';
import HomeScreen from '../screen/home';
import MedicineScreen from '../screen/medicine';
import KitScreen from '../screen/kit';
import DietScreen from '../screen/diet';
import Authentication1Screen from '../screen/healthscreen/authentication1';
import Authentication2Screen from '../screen/healthscreen/authentication2';
import Authentication3Screen from '../screen/healthscreen/authentication3';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from './header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = ({route}) => ({
  tabBarActiveTintColor: '#1677FF', // 하단바에서 버튼이 선택되었을 때 색
  tabBarInactiveTintColor: 'gray', 
  headerShown: false,
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Home_') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'Health_') {
      iconName = focused ? 'heartbeat' : 'heartbeat';
    } else if (route.name === 'Medicine_') {
      iconName = focused ? 'capsules' : 'capsules';
    } else if (route.name === 'Kit_') {
      iconName = focused ? 'vial' : 'vial';
    } else if (route.name === 'Diet_') {
      iconName = focused ? 'utensils' : 'utensils';
    }

    return <FontAwesome5 name={iconName} size={size} color={color} />;
  },
});

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
  </Stack.Navigator>
);

const DietStack = () => (
  <Stack.Navigator screenOptions={stackScreenOptions}>
    <Stack.Screen name="Diet" component={DietScreen} />
  </Stack.Navigator>
);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      >
      <Tab.Screen
        name="Home_"
        component={HomeStack}
        options={{tabBarLabel: '홈'}}
      />
      <Tab.Screen
        name="Health_"
        component={HealthStack}
        options={{tabBarLabel: '건강검진 분석'}}
      />
      <Tab.Screen
        name="Medicine_"
        component={MedicineStack}
        options={{tabBarLabel: '약'}}
      />
      <Tab.Screen
        name="Kit_"
        component={KitStack}
        options={{tabBarLabel: '키트 검사'}}
      />
      <Tab.Screen
        name="Diet_"
        component={DietStack}
        options={{tabBarLabel: '식단관리'}}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
