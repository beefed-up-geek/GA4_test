// /App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './src/components/bottom_navigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
