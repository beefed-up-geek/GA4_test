//애니메이션 파일

import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const tabDesign = ({label, iconName, isSelected, onPress}) => {
  const [width] = useState(new Animated.Value(isSelected ? 120 : 50));

  useEffect(() => {
    Animated.timing(width, {
      toValue: isSelected ? 120 : 50,
      duration: 250,
      easing: Easing.out(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [isSelected]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Animated.View
        style={[
          styles.button,
          {
            width,
            backgroundColor: isSelected ? '#000' : '#fff',
            borderWidth: isSelected ? 0 : 1,
            borderColor: '#fff',
          },
        ]}>
        <Icon
          name={iconName}
          size={24}
          color={isSelected ? '#fff' : '#72777A'}
        />
        {isSelected && <Text style={styles.label}>{label}</Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 50,
    overflow: 'hidden', // 애니메이션이 부모 컨테이너를 넘어가지 않도록 설정
  },
  label: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default tabDesign;
