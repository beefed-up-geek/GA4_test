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
      <Text style={{color: 'black'}}>나는 /src/kit/index.js 🎉</Text>
      <Button
        title="go to kit checkup"
        onPress={() => navigation.navigate('Kit_checkup1')}
      />
    </View>
  );
};

export default HomeScreen;

