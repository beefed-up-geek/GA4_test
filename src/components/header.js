// /src/components/header.js

import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={require('../images/hns.png')} style={styles.headerIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  headerIcon: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Header;
