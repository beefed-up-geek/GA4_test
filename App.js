// /App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/components/bottom_navigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;

/*
import React from 'react';
import {Text, View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text> 나는 /App.js 🎉</Text>
    </View>
  );
};

export default App;
*/