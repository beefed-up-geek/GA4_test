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
    Bold: {
      fontFamily: 'PretendardVariable',
      fontStyle: 'normal',
      fontWeight: '700', // Ensure this is a string
    },
    Semibold: {
      fontFamily: 'PretendardVariable',
      fontStyle: 'normal',
      fontWeight: '600', // Ensure this is a string
    },
    Medium: {
      fontFamily: 'PretendardVariable',
      fontStyle: 'normal',
      fontWeight: '500', // Ensure this is a string
    },
    Regular: {
      fontFamily: 'PretendardVariable',
      fontStyle: 'normal',
      fontWeight: '400', // Ensure this is a string
    },
  }
};

export default theme;
