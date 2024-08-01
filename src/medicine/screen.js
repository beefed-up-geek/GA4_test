// /src/medicine/screen.js

import React from 'react';
import { View, Text } from 'react-native';

const MedicineScreen = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ color: 'black' }}>나는 /src/medicine/screen.js 🎉</Text>
    </View>
  );
};

export default MedicineScreen;


/*
import React from 'react';
import {Text, View} from 'react-native';

const screen = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>나는 /src/medicine/screen.js 🎉</Text>
    </View>
  );
};

export default screen;
*/