import React, {useState, useEffect, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HealthScreen = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const [lastUpdate, setLastUpdate] = useState(null);
  const [healthData, setHealthData] = useState([]);

  const fetchData = async () => {
    const storedDate = await AsyncStorage.getItem('healthscreen_last_update');
    setLastUpdate(storedDate);

    if (storedDate) {
      const storedData = await AsyncStorage.getItem('healthscreen_data');
      if (storedData) {
        setHealthData(JSON.parse(storedData));
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>건강검진</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <View style={styles.textContainer}>
            <Text style={styles.boxTitle}>건강검진 불러오기</Text>
            {lastUpdate ? (
              <>
                <Text style={styles.boxSubtitle}>최근 불러온 날짜</Text>
                <Text style={styles.boxDate}>{lastUpdate}</Text>
              </>
            ) : (
              <Text style={styles.boxSubtitle}>
                데이터를 불러오면{'\n'}분석을 제공해드려요
              </Text>
            )}
          </View>
          <Image
            source={require('../../images/health_screen/running.png')}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => navigation.navigate('Authentication1')}>
            <FontAwesome5 name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.bigTitle}>신장 기능 검사</Text>
      {/* 신장 기능 검사 아래의 모든 요소들이 제거되었습니다 */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  box: {
    width: '100%',
    padding: 20,
    backgroundColor: '#EBEFFE',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  textContainer: {
    flex: 1,
  },
  bigTitle: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#5D5D62',
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginBottom: 5,
  },
  boxSubtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginBottom: 5,
  },
  boxDate: {
    fontSize: 14,
    color: 'black',
    textAlign: 'left',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 10,
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  arrowButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#7596FF',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{translateY: 15}],
  },
});

export default HealthScreen;
