// /src/components/bottom_navigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealthScreen from '../healthscreen/screen';
import HomeScreen from '../home/screen';
import MedicineScreen from '../medicine/screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Health') {
            iconName = focused ? 'heartbeat' : 'heartbeat';
          } else if (route.name === 'Medicine') {
            iconName = focused ? 'capsules' : 'capsules';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Health" component={HealthScreen} />
      <Tab.Screen name="Medicine" component={MedicineScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
