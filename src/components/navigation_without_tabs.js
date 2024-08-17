// /src/components/navigation_without_tabs.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication1Screen from '../screen/healthscreen/authentication1';
import Authentication2Screen from '../screen/healthscreen/authentication2';
import Authentication3Screen from '../screen/healthscreen/authentication3';
import UserInfoScreen from '../screen/home/user_info'; // /src/screen/home/user_info.js

const Stack = createStackNavigator();

const NavigationWithoutTabs = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide both the header and bottom tab
      }}
    >
      <Stack.Screen name="Authentication1" component={Authentication1Screen} />
      <Stack.Screen name="Authentication2" component={Authentication2Screen} />
      <Stack.Screen name="Authentication3" component={Authentication3Screen} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} /> 
    </Stack.Navigator>
  );
};

export default NavigationWithoutTabs;
