// /src/screen/kit/screen.js

import React from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';

const HomeScreen = ({onPress, navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'black'}}>이 화면은 /src/screen/kit/index.js 🎉</Text>
      <Button
        title="키트 검사 시작하기"
        onPress={() => navigation.navigate('Kit_checkup1')}
      />
    </View>
  );
};

export default HomeScreen;
