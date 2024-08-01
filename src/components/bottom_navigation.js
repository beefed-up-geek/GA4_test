// /src/components/bottom_navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HealthScreen from '../healthscreen/screen';
import HomeScreen from '../home/screen';
import MedicineScreen from '../medicine/screen';
import KitScreen from '../kit/screen';
import DietScreen from '../diet/screen';
import AuthenticationScreen from '../healthscreen/authentication';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from './header';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'Health') {
      iconName = focused ? 'heartbeat' : 'heartbeat';
    } else if (route.name === 'Medicine') {
      iconName = focused ? 'capsules' : 'capsules';
    } else if (route.name === 'Kit') {
      iconName = focused ? 'vial' : 'vial';
    } else if (route.name === 'Diet') {
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
  <Stack.Navigator screenOptions={stackScreenOptions } >
    <Stack.Screen name="Health" component={HealthScreen} />
    <Stack.Screen name="Authentication" component={AuthenticationScreen} />
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
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarLabel: '홈' }} />
      <Tab.Screen name="Health" component={HealthStack} options={{ tabBarLabel: '건강' }} />
      <Tab.Screen name="Medicine" component={MedicineStack} options={{ tabBarLabel: '약' }} />
      <Tab.Screen name="Kit" component={KitStack} options={{ tabBarLabel: '자가진단' }} />
      <Tab.Screen name="Diet" component={DietStack} options={{ tabBarLabel: '식단관리' }} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
