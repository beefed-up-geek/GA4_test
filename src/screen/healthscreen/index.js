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
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import theme from '../../theme';
import KidneyScreen from './tabs/tab_kidney';

const initialLayout = { width: Dimensions.get('window').width };

const HealthScreen = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const [lastUpdate, setLastUpdate] = useState(null);
  const [lastCheckupDate, setLastCheckupDate] = useState(null);
  const [healthData, setHealthData] = useState([]);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'kidney', title: '신장' },
    // 다른 탭이 있다면 여기에 추가
  ]);

  const fetchData = async () => {
    try {
      const storedDate = await AsyncStorage.getItem('healthscreen_last_update');
      setLastUpdate(storedDate);

      const storedData = await AsyncStorage.getItem('healthscreen_data');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setHealthData(parsedData);

        // Get the latest checkup date
        const latestRecord = parsedData[parsedData.length - 1];
        if (latestRecord) {
          const { resCheckupYear, resCheckupDate } = latestRecord;
          const formattedDate = `${resCheckupYear}-${resCheckupDate.slice(0, 2)}-${resCheckupDate.slice(2, 4)}`;
          setLastCheckupDate(formattedDate);
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // 화면이 포커스될 때마다 fetchData 호출
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  const renderScene = SceneMap({
    kidney: KidneyScreen,
    // 다른 탭이 있다면 여기에 추가
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      labelStyle={styles.labelStyle}
      scrollEnabled
      tabStyle={styles.tabStyle} // Reduce the width of each tab
      renderLabel={({ route, focused, color }) => (
        <Text style={[styles.tabLabel, { color: focused ? '#7596FF' : '#5D5D62' }]}>
          {route.title}
        </Text>
      )}
    />
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

      {/* 새로운 Tab View 컴포넌트 */}
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
          style={styles.tabView}
        />
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
    ...theme.fonts.SemiBold,
    color: theme.colors.textGray,
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
    ...theme.fonts.Bold,
    color: theme.colors.textGray,
    textAlign: 'left',
    marginBottom: 5,
  },
  boxSubtitle: {
    fontSize: 14,
    ...theme.fonts.Medium,
    color: theme.colors.textGray,
  },
  boxDate: {
    fontSize: 14,
    color: theme.colors.textGray,
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
  tabContainer: {
    flex: 1,
    marginTop: 20,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    borderBottomColor: '#EBEFFE',
    borderBottomWidth: 1,
  },
  indicator: {
    backgroundColor: '#7596FF',
    height: 3,
  },
  labelStyle: {
    ...theme.fonts.SemiBold,
  },
  tabStyle: {
    width: 100,  // 탭의 너비 줄이기
  },
  tabLabel: {
    fontSize: 14,
    ...theme.fonts.SemiBold,
  },
});

export default HealthScreen;
