// /src/diet/screen.js

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
      <Text style={{ color: 'black' }}>이 화면은 /src/screen/diet/screen.js 🎉</Text>
    </View>
  );
};

export default HomeScreen;
