// /src/components/header.js

import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const width_ratio = Dimensions.get('screen').width / 390;
const height_ratio = Dimensions.get('screen').height / 844;

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
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 8,
  },
  headerIcon: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Header;
