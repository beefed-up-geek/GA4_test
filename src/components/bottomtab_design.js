import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from 'react-native';

const TabDesign = ({
  label,
  iconSource,
  selectedIconSource,
  isSelected,
  onPress,
}) => {
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
        <Image
          source={isSelected ? selectedIconSource : iconSource}
          style={{
            width: 24,
            height: 24,
          }}
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
    height: 40,
    paddingHorizontal: 10,
    overflow: 'hidden', // 애니메이션이 부모 컨테이너를 넘어가지 않도록 설정
  },
  label: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default TabDesign;
