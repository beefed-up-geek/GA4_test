// /src/home/screen.js

import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ color: 'black' }}>나는 /src/home/screen.js 🎉</Text>
    </View>
  );
};

export default HomeScreen;
