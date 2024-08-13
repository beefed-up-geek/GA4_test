import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Importing the components from the tabs directory
import KidneyScreen from './tabs/tab_kidney';
import HypertensionDiabetesScreen from './tabs/tab_hypertension_diabetes';
import DyslipidemiaScreen from './tabs/tab_dyslipidemia';
import AnemiaScreen from './tabs/tab_anemia';
import LiverDiseaseScreen from './tabs/tab_liver';

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
    { key: 'hypertensionDiabetes', title: '고혈압/당뇨' },
    { key: 'dyslipidemia', title: '이상지질혈증' },
    { key: 'anemia', title: '빈혈' },
    { key: 'liverDisease', title: '간장질환' },
  ]);

  const fetchData = async () => {
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
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchData();
    }, []),
  );

  useEffect(() => {
    fetchData();
  }, []);

  const renderScene = SceneMap({
    kidney: KidneyScreen,
    hypertensionDiabetes: HypertensionDiabetesScreen,
    dyslipidemia: DyslipidemiaScreen,
    anemia: AnemiaScreen,
    liverDisease: LiverDiseaseScreen,
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
    <ScrollView style={styles.container}>
      {/* Existing Health Information Components */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>건강검진</Text>
      </View>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
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
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={() => navigation.navigate('Authentication1')}>
            <FontAwesome5 name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* New Tab View Component */}
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
    fontWeight: 'bold',
  },
  tabStyle: {
    width: 100,  // Reduce width of each tab
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HealthScreen;
