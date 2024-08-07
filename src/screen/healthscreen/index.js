import React, {useState, useEffect, useMemo, useCallback} from 'react';
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
import {LineChart} from 'react-native-chart-kit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HealthScreen = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  const [lastUpdate, setLastUpdate] = useState(null);
  const [healthData, setHealthData] = useState([]);
  const [selectedData1, setSelectedData1] = useState(null);
  const [selectedData2, setSelectedData2] = useState(null);
  const [selectedData3, setSelectedData3] = useState(null);
  const [selectedData4, setSelectedData4] = useState(null);
  const [selectedBloodPressureData, setSelectedBloodPressureData] =
    useState(null);

  const [isCollapsed1, setIsCollapsed1] = useState(true);
  const [isCollapsed2, setIsCollapsed2] = useState(true);
  const [isCollapsed3, setIsCollapsed3] = useState(true);
  const [isCollapsed4, setIsCollapsed4] = useState(true);
  const [isCollapsed5, setIsCollapsed5] = useState(true);

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

  const createDataSet = dataKey => {
    return healthData
      .map(item => parseFloat(item[dataKey]))
      .filter(value => !isNaN(value));
  };

  const getColor = data => {
    if (data.length < 2) return 'rgba(0, 0, 0, 1)';
    return data[data.length - 1] > data[data.length - 2]
      ? 'rgba(240, 0, 4, 1)'
      : 'rgba(0, 76, 240, 1)';
  };

  const handleDataPointClick = (data, dataset, setSelectedData) => {
    setSelectedData({
      value: data.value,
      year: createLabels()[data.index],
      color: getColor(dataset),
      x: data.x,
      y: data.y,
    });
  };

  const createBloodPressureDataSet = type => {
    return healthData
      .map(item => {
        const bp = item.resBloodPressure.split('/');
        return type === 'systolic' ? parseFloat(bp[0]) : parseFloat(bp[1]);
      })
      .filter(value => !isNaN(value));
  };

  const createLabels = () => {
    return healthData.map(item => item.resCheckupYear);
  };

  const data1 = useMemo(
    () => ({
      labels: createLabels(),
      datasets: [
        {
          data: createDataSet('resSerumCreatinine'),
          color: (opacity = 1) => getColor(createDataSet('resSerumCreatinine')),
          strokeWidth: 2,
        },
      ],
      legend: [],
    }),
    [healthData],
  );

  const data2 = useMemo(
    () => ({
      labels: createLabels(),
      datasets: [
        {
          data: createDataSet('resGFR'),
          color: (opacity = 1) => getColor(createDataSet('resGFR')),
          strokeWidth: 2,
        },
      ],
      legend: [],
    }),
    [healthData],
  );

  const data3 = useMemo(
    () => ({
      labels: createLabels(),
      datasets: [
        {
          data: createDataSet('resFastingBloodSuger'),
          color: (opacity = 1) =>
            getColor(createDataSet('resFastingBloodSuger')),
          strokeWidth: 2,
        },
      ],
      legend: [],
    }),
    [healthData],
  );

  const data4 = useMemo(
    () => ({
      labels: createLabels(),
      datasets: [
        {
          data: createDataSet('resTotalCholesterol'),
          color: (opacity = 1) =>
            getColor(createDataSet('resTotalCholesterol')),
          strokeWidth: 2,
        },
      ],
      legend: [],
    }),
    [healthData],
  );

  const bloodPressureData = useMemo(
    () => ({
      labels: createLabels(),
      datasets: [
        {
          data: createBloodPressureDataSet('systolic'),
          color: (opacity = 1) =>
            getColor(createBloodPressureDataSet('systolic')),
          strokeWidth: 2,
        },
        {
          data: createBloodPressureDataSet('diastolic'),
          color: (opacity = 1) =>
            getColor(createBloodPressureDataSet('systolic')),
          strokeWidth: 2,
        },
      ],
      legend: [],
    }),
    [healthData],
  );

  const chartConfigWithGradient = useMemo(
    () => data => ({
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#ffffff',
      decimalPlaces: 1,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
      fillShadowGradient: getColor(data),
      fillShadowGradientOpacity: 0.3,
      propsForDots: {
        r: '2',
        strokeWidth: '',
      },
      propsForBackgroundLines: {
        stroke: '#ffffff',
        strokeDasharray: '',
      },
    }),
    [healthData],
  );

  const ChartComponent = ({
    data,
    chartConfig,
    handleDataPointClick,
    isCollapsed,
  }) => (
    <View style={{display: isCollapsed ? 'none' : 'flex'}}>
      <LineChart
        data={data}
        width={screenWidth * 0.8}
        height={160}
        chartConfig={chartConfig}
        bezier
        onDataPointClick={handleDataPointClick}
        style={styles.chart}
      />
    </View>
  );

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

      {lastUpdate && healthData.length > 0 && (
        <>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>신장 기능</Text>
            <View style={styles.cardHeader}>
              <Text style={styles.graphTitle}>혈청 크레아티닌</Text>
              <TouchableOpacity
                onPress={() => setIsCollapsed1(!isCollapsed1)}
                style={styles.collapseToggle}>
                <FontAwesome5
                  name={isCollapsed1 ? 'chevron-down' : 'chevron-up'}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <ChartComponent
              data={data1}
              chartConfig={chartConfigWithGradient(
                createDataSet('resSerumCreatinine'),
              )}
              handleDataPointClick={data =>
                handleDataPointClick(
                  data,
                  createDataSet('resSerumCreatinine'),
                  setSelectedData1,
                )
              }
              isCollapsed={isCollapsed1}
            />
            {selectedData1 && selectedData1.year && (
              <View
                style={[
                  styles.dataPointInfo,
                  {top: selectedData1.y + 40, left: selectedData1.x},
                ]}>
                <Text style={styles.dataPointInfoText}>
                  {`${selectedData1.year} 년 \n ${selectedData1.value} mg/dL`}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.sectionContainer}>
            <View style={styles.cardHeader}>
              <Text style={styles.graphTitle}>사구체여과율 (GFR)</Text>
              <TouchableOpacity
                onPress={() => setIsCollapsed2(!isCollapsed2)}
                style={styles.collapseToggle}>
                <FontAwesome5
                  name={isCollapsed2 ? 'chevron-down' : 'chevron-up'}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <ChartComponent
              data={data2}
              chartConfig={chartConfigWithGradient(createDataSet('resGFR'))}
              handleDataPointClick={data =>
                handleDataPointClick(
                  data,
                  createDataSet('resGFR'),
                  setSelectedData2,
                )
              }
              isCollapsed={isCollapsed2}
            />
            {selectedData2 && selectedData2.year && (
              <View
                style={[
                  styles.dataPointInfo,
                  {top: selectedData2.y + 40, left: selectedData2.x - 60},
                ]}>
                <Text style={styles.dataPointInfoText}>
                  {`${selectedData2.year} 년 \n${selectedData2.value} mL/min/1.73m^2`}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>당뇨 검사</Text>
            <View style={styles.cardHeader}>
              <Text style={styles.graphTitle}>공복 혈당</Text>
              <TouchableOpacity
                onPress={() => setIsCollapsed3(!isCollapsed3)}
                style={styles.collapseToggle}>
                <FontAwesome5
                  name={isCollapsed3 ? 'chevron-down' : 'chevron-up'}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <ChartComponent
              data={data3}
              chartConfig={chartConfigWithGradient(
                createDataSet('resFastingBloodSuger'),
              )}
              handleDataPointClick={data =>
                handleDataPointClick(
                  data,
                  createDataSet('resFastingBloodSuger'),
                  setSelectedData3,
                )
              }
              isCollapsed={isCollapsed3}
            />
            {selectedData3 && selectedData3.year && (
              <View
                style={[
                  styles.dataPointInfo,
                  {top: selectedData3.y + 40, left: selectedData3.x},
                ]}>
                <Text style={styles.dataPointInfoText}>
                  {`${selectedData3.year}년 \n ${selectedData3.value} mg/dL`}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>이상 지질혈증 검사</Text>
            <View style={styles.cardHeader}>
              <Text style={styles.graphTitle}>총콜레스테롤</Text>
              <TouchableOpacity
                onPress={() => setIsCollapsed4(!isCollapsed4)}
                style={styles.collapseToggle}>
                <FontAwesome5
                  name={isCollapsed4 ? 'chevron-down' : 'chevron-up'}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <ChartComponent
              data={data4}
              chartConfig={chartConfigWithGradient(
                createDataSet('resTotalCholesterol'),
              )}
              handleDataPointClick={data =>
                handleDataPointClick(
                  data,
                  createDataSet('resTotalCholesterol'),
                  setSelectedData4,
                )
              }
              isCollapsed={isCollapsed4}
            />
            {selectedData4 && selectedData4.year && (
              <View
                style={[
                  styles.dataPointInfo,
                  {top: selectedData4.y + 40, left: selectedData4.x},
                ]}>
                <Text style={styles.dataPointInfoText}>
                  {`${selectedData4.year} 년 \n ${selectedData4.value} mg/dl`}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>고혈압 검사</Text>
            <View style={styles.cardHeader}>
              <Text style={styles.graphTitle}>혈압</Text>
              <TouchableOpacity
                onPress={() => setIsCollapsed5(!isCollapsed5)}
                style={styles.collapseToggle}>
                <FontAwesome5
                  name={isCollapsed5 ? 'chevron-down' : 'chevron-up'}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <ChartComponent
              data={bloodPressureData}
              chartConfig={chartConfigWithGradient(
                createBloodPressureDataSet('systolic'),
              )}
              handleDataPointClick={data =>
                handleDataPointClick(
                  data,
                  createBloodPressureDataSet('systolic'),
                  setSelectedBloodPressureData,
                )
              }
              isCollapsed={isCollapsed5}
            />
            {selectedBloodPressureData && selectedBloodPressureData.year && (
              <View
                style={[
                  styles.dataPointInfo,
                  {
                    top: selectedBloodPressureData.y + 40,
                    left: selectedBloodPressureData.x,
                  },
                ]}>
                <Text style={styles.dataPointInfoText}>
                  {`${selectedBloodPressureData.year} 년 \n ${selectedBloodPressureData.value} mmHg`}
                </Text>
              </View>
            )}
          </View>
        </>
      )}
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
    marginBottom: 40,
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
    transform: [{translateY: 15}],
  },
  sectionContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  analysisText: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 10,
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
    shadowOffset: {width: 0, height: 2},
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
  iconStyle: {
    color: '#B5B5B5',
    marginRight: 5,
  },

  dataPointInfo: {
    position: 'absolute',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  dataPointInfoText: {
    color: 'black',
  },
  collapseToggle: {
    paddingVertical: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HealthScreen;
