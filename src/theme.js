import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const theme = {
  colors: {
    White: '#FFFFFF',
    Black: '#000000',
    mainBlue: '#597EF7',  
    lightBlue: '#F0F5FF',
    lightGray: '#FAFAFA',
    DarkGray: '#D9D9D9',
    textGray: '#8B8B91',
  },
  fonts: {
    Black: {
      fontFamily: 'Pretendard-Black',
    },
    Bold: {
      fontFamily: 'Pretendard-Bold',
    },
    ExtraBold: {
      fontFamily: 'Pretendard-ExtraBold',
    },
    ExtraLight: {
      fontFamily: 'Pretendard-ExtraLight',
    },
    Light: {
      fontFamily: 'Pretendard-Light',
    },
    Medium: {
      fontFamily: 'Pretendard-Medium',
    },
    Regular: {
      fontFamily: 'Pretendard-Regular',
    },
    SemiBold: {
      fontFamily: 'Pretendard-SemiBold',
    },
    Thin: {
      fontFamily: 'Pretendard-Thin',
    },
  },
};

export default theme;
