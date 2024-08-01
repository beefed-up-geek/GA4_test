// /src/components/bottom_navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealthScreen from '../healthscreen/screen';
import HomeScreen from '../home/screen';
import MedicineScreen from '../medicine/screen';
import KitScreen from '../kit/screen';
import DietScreen from '../diet/screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
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

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: '홈' }}
      />
      <Tab.Screen
        name="Health"
        component={HealthScreen}
        options={{ tabBarLabel: '건강' }}
      />
      <Tab.Screen
        name="Medicine"
        component={MedicineScreen}
        options={{ tabBarLabel: '약' }}
      />
      <Tab.Screen
        name="Kit"
        component={KitScreen}
        options={{ tabBarLabel: '자가진단' }}
      />
      <Tab.Screen
        name="Diet"
        component={DietScreen}
        options={{ tabBarLabel: '식단관리' }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;