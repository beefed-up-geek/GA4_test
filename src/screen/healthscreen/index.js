// /src/screen/healthscreen/index.js
import React, {useState, useEffect} from 'react';
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

  const createDataSet = dataKey => {
    return healthData
      .map(item => parseFloat(item[dataKey]))
      .filter(value => !isNaN(value)); // NaN 값을 필터링
  };

  const getColor = data => {
    if (data.length < 2) return `rgba(0, 0, 0, 1)`; // default color if not enough data points
    return data[data.length - 1] > data[data.length - 2]
      ? `rgba(240, 0, 4, 1)`
      : `rgba(0, 76, 240, 1)`;
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
        color: (opacity = 1) => getColor(createDataSet('resSerumCreatinine')), // Red color
        strokeWidth: 2,
      },
    ],
    legend: [],
  };

  const data2 = {
    labels: createLabels(),
    datasets: [
      {
        data: createDataSet('resGFR'),
        color: (opacity = 1) => getColor(createDataSet('resGFR')), // Blue color
        strokeWidth: 2,
      },
    ],
    legend: [],
  };

  const data3 = {
    labels: createLabels(),
    datasets: [
      {
        data: createDataSet('resFastingBloodSuger'),
        color: (opacity = 1) => getColor(createDataSet('resFastingBloodSuger')), // Red color
        strokeWidth: 2,
      },
    ],
    legend: [],
  };

  const data4 = {
    labels: createLabels(),
    datasets: [
      {
        data: createDataSet('resTotalCholesterol'),
        color: (opacity = 1) => getColor(createDataSet('resTotalCholesterol')), // Red color
        strokeWidth: 2,
      },
    ],
    legend: [],
  };

  const bloodPressureData = {
    labels: createLabels(),
    datasets: [
      {
        data: createBloodPressureDataSet('systolic'),
        color: (opacity = 1) =>
          getColor(createBloodPressureDataSet('systolic')), // Red color
        strokeWidth: 2,
      },
      {
        data: createBloodPressureDataSet('diastolic'),
        color: (opacity = 1) =>
          getColor(createBloodPressureDataSet('systolic')), // Blue color
        strokeWidth: 2,
      },
    ],
    legend: [],
  };

  const chartConfigWithGradient = data => ({
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
      r: '2', // Hides the dots
      strokeWidth: '',
    },
    propsForBackgroundLines: {
      stroke: '#ffffff',
      strokeDasharray: '', // Hide background lines
    },
  });

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
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>혈청 크레아티닌</Text>
              <Text style={styles.analysisText}>
                <FontAwesome5
                  name="info-circle"
                  size={16}
                  style={styles.iconStyle}
                />{' '}
                낮으면 신장 기능이 좋아요.
              </Text>
              <LineChart
                data={data1}
                width={screenWidth * 0.8}
                height={160} // 줄여진 높이
                chartConfig={chartConfigWithGradient(
                  createDataSet('resSerumCreatinine'),
                )}
                bezier
                onDataPointClick={data =>
                  handleDataPointClick(
                    data,
                    createDataSet('resSerumCreatinine'),
                    setSelectedData1,
                  )
                }
                style={styles.chart}
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
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>사구체여과율 (GFR)</Text>
              <Text style={styles.analysisText}>
                <FontAwesome5
                  name="info-circle"
                  size={16}
                  style={styles.iconStyle}
                />{' '}
                높으면 신장 기능이 좋아요.
              </Text>
              <LineChart
                data={data2}
                width={screenWidth * 0.8}
                height={160} // 줄여진 높이
                chartConfig={chartConfigWithGradient(createDataSet('resGFR'))}
                bezier
                onDataPointClick={data =>
                  handleDataPointClick(
                    data,
                    createDataSet('resGFR'),
                    setSelectedData2,
                  )
                }
                style={styles.chart}
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
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>당뇨 검사</Text>
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>공복 혈당</Text>
              <Text style={styles.analysisText}>
                <FontAwesome5
                  name="info-circle"
                  size={16}
                  style={styles.iconStyle}
                />{' '}
                너무 낮으면 당뇨 위험이 높아요
              </Text>
              <LineChart
                data={data3}
                width={screenWidth * 0.8}
                height={160} // 줄여진 높이
                chartConfig={chartConfigWithGradient(
                  createDataSet('resFastingBloodSuger'),
                )}
                bezier
                onDataPointClick={data =>
                  handleDataPointClick(
                    data,
                    createDataSet('resFastingBloodSuger'),
                    setSelectedData3,
                  )
                }
                style={styles.chart}
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
            <Text style={styles.sectionTitle}>이상 지질혈증 검사</Text>
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>총콜레스테롤</Text>
              <Text style={styles.analysisText}>
                <FontAwesome5
                  name="info-circle"
                  size={16}
                  style={styles.iconStyle}
                />{' '}
                높으면 고지혈증 위험이 높아요
              </Text>
              <LineChart
                data={data4}
                width={screenWidth * 0.8}
                height={160} // 줄여진 높이
                chartConfig={chartConfigWithGradient(
                  createDataSet('resTotalCholesterol'),
                )}
                bezier
                onDataPointClick={data =>
                  handleDataPointClick(
                    data,
                    createDataSet('resTotalCholesterol'),
                    setSelectedData4,
                  )
                }
                style={styles.chart}
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
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>고혈압 검사</Text>
            <View style={styles.graphBox}>
              <Text style={styles.graphTitle}>혈압</Text>
              <Text style={styles.analysisText}>
                <FontAwesome5
                  name="info-circle"
                  size={16}
                  style={styles.iconStyle}
                />{' '}
                높을수록 고혈압 위험이 높아요
              </Text>
              <LineChart
                data={bloodPressureData}
                width={screenWidth * 0.8}
                height={160} // 줄여진 높이
                chartConfig={chartConfigWithGradient(
                  createBloodPressureDataSet('systolic'),
                )}
                bezier
                onDataPointClick={data =>
                  handleDataPointClick(
                    data,
                    createBloodPressureDataSet('systolic'),
                    setSelectedBloodPressureData,
                  )
                }
                style={styles.chart}
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
          </View>
        </>
      )}
    </ScrollView>
  );
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '0', // Hides the dots
    strokeWidth: '0',
  },
  propsForBackgroundLines: {
    stroke: '#ffffff',
    strokeDasharray: '', // Hide background lines
  },
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
});

export default HealthScreen;
