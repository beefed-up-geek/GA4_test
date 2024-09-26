// src/screen/healthscreen/index.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Importing the component from the tabs directory
import KidneyScreen from './tabs/tab_kidney';

const HealthScreen = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const [lastUpdate, setLastUpdate] = useState(null);
  const [lastCheckupDate, setLastCheckupDate] = useState(null);
  const [healthData, setHealthData] = useState([]);

  const fetchData = async () => {
    try {
      const storedDate = await AsyncStorage.getItem('healthscreen_last_update');
      setLastUpdate(storedDate);

      const storedData = await AsyncStorage.getItem('healthscreen_data');
      if (storedData) {
        const parsedData = JSON.parse(storedData);

        // 데이터 평탄화
        const flatData = Array.isArray(parsedData[0]) ? parsedData.flat() : parsedData;
        setHealthData(flatData);

        // Get the latest checkup date
        const latestRecord = flatData[flatData.length - 1];
        if (latestRecord) {
          const { resCheckupYear, resCheckupDate } = latestRecord;

          if (resCheckupDate) {
            const formattedDate = `${resCheckupYear}-${resCheckupDate.slice(0, 2)}-${resCheckupDate.slice(2, 4)}`;
            setLastCheckupDate(formattedDate);
          } else {
            console.error('resCheckupDate가 정의되어 있지 않습니다.');
          }
        }
      }
    } catch (error) {
      console.error('데이터를 불러오는 데 실패했습니다:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  return (
    <View style={styles.container}>
      {/* 기존 건강 정보 컴포넌트 */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>건강검진</Text>
      </View>
      <View style={styles.boxContainer}>
        {/* TouchableOpacity wrapping the entire box */}
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('NoTabs', { screen: 'Authentication1' })}
        >
          <View style={styles.textContainer}>
            <Text style={styles.boxTitle}>건강검진 불러오기</Text>
            {lastUpdate ? (
              <>
                <View style={styles.row}>
                  <Text style={styles.boxSubtitle}>최근 불러온 날짜: </Text>
                  <Text style={styles.boxDate}>{lastUpdate}</Text>
                </View>
                {lastCheckupDate && (
                  <View style={styles.row}>
                    <Text style={styles.boxSubtitle}>마지막 건강검진 기록: </Text>
                    <Text style={styles.boxDate}>{lastCheckupDate}</Text>
                  </View>
                )}
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
          <View style={styles.arrowButtonContainer}>
            <FontAwesome5 name="chevron-right" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* 신장 데이터 제목 */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>나의 콩팥 건강</Text>
      </View>

      {/* KidneyScreen 컴포넌트 표시 */}
      <View style={styles.contentContainer}>
        <KidneyScreen />
      </View>
    </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
  },
  boxDate: {
    fontSize: 14,
    color: 'black',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 10,
    position: 'absolute',
    right: 10,
    bottom: 40,
  },
  arrowButtonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#7596FF',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: 15 }],
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginTop: -20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
});

export default HealthScreen;
