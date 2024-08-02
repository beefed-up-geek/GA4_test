// /src/screen/healthscreen/screen.js

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HealthScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>이 화면은 /src/screen/healthscreen/screen.js 🎉</Text>
      <Button
        title="Go to Authentication"
        onPress={() => navigation.navigate('Authentication1')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HealthScreen;
