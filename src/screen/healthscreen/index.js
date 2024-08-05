import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { LineChart } from 'react-native-chart-kit';
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
    }, [])
  );

  const createDataSet = (dataKey) => {
    return healthData
      .map(item => parseFloat(item[dataKey]))
      .filter(value => !isNaN(value)); // NaN 값을 필터링
  };

  const createLabels = () => {
    return healthData.map(item => item.resCheckupYear);
  };

  const data1 = {
    labels: createLabels(),
    datasets: [
      {
        data: createDataSet('resSerumCreatinine'),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red color
        strokeWidth: 2
      }
    ],
    legend: []
  };

  const data2 = {
    labels: createLabels(),
    datasets: [
      {
        data: createDataSet('resGFR'),
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Blue color
        strokeWidth: 2
      }
    ],
    legend: []
  };

  const data3 = {
    labels: createLabels(),
    datasets: [
      {
        data: createDataSet('resFastingBloodSuger'),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red color
        strokeWidth: 2
      }
    ],
    legend: []
  };

  const data4 = {
    labels: createLabels(),
    datasets: [
      {
        data: createDataSet('resTotalCholesterol'),
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red color
        strokeWidth: 2
      }
    ],
    legend: []
  };

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
              <Text style={styles.boxSubtitle}>데이터를 불러오면{"\n"}분석을 제공해드려요</Text>
            )}
          </View>
          <Image
            source={require('../../images/health_screen/running.png')}
            style={styles.image}
          />
          <TouchableOpacity 
            style={styles.arrowButton}
            onPress={() => navigation.navigate('Authentication1')}
          >
            <FontAwesome5 name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {lastUpdate && healthData.length > 0 && (
        <>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>신장 기능</Text>
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>혈청 크레아티닌</Text>
              <LineChart
                data={data1}
                width={screenWidth * 0.8}
                height={220}
                chartConfig={{
                  ...chartConfig,
                  fillShadowGradient: 'rgba(255, 0, 0, 1)',
                  fillShadowGradientOpacity: 0.3
                }}
                bezier
                style={styles.chart}
              />
            </View>
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>사구체여과율 (GFR)</Text>
              <LineChart
                data={data2}
                width={screenWidth * 0.8}
                height={220}
                chartConfig={{
                  ...chartConfig,
                  fillShadowGradient: 'rgba(0, 0, 255, 1)',
                  fillShadowGradientOpacity: 0.3
                }}
                bezier
                style={styles.chart}
              />
            </View>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>원인 질환</Text>
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>혈당</Text>
              <LineChart
                data={data3}
                width={screenWidth * 0.8}
                height={220}
                chartConfig={{
                  ...chartConfig,
                  fillShadowGradient: 'rgba(255, 0, 0, 1)',
                  fillShadowGradientOpacity: 0.3
                }}
                bezier
                style={styles.chart}
              />
            </View>
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>총콜레스테롤</Text>
              <LineChart
                data={data4}
                width={screenWidth * 0.8}
                height={220}
                chartConfig={{
                  ...chartConfig,
                  fillShadowGradient: 'rgba(255, 0, 0, 1)',
                  fillShadowGradientOpacity: 0.3
                }}
                bezier
                style={styles.chart}
              />
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16
  },
  propsForDots: {
    r: "0", // Hides the dots
    strokeWidth: "0",
  },
  propsForBackgroundLines: {
    stroke: "#ffffff",
    strokeDasharray: "", // Hide background lines
  }
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
    marginBottom: 40
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
    transform: [{ translateY: 15 }]
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  graphBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
  },
});

export default HealthScreen;
