// /src/screen/healthscreen/tabs/HypertensionDiabetesScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions, // For responsive design
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bar } from 'react-native-progress'; // Import the Bar component
import { metrics_info, analysis_text } from './data';
import { styles } from './styles_tab'; // Import styles

const HypertensionDiabetesScreen = () => {
  const [storedData, setStoredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        const data = await AsyncStorage.getItem('healthscreen_data');
        if (data !== null) {
          setStoredData(JSON.parse(data));
        }
      } catch (error) {
        console.error('Failed to load stored data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStoredData();
  }, []);

  // Helper function to analyze the metric
  const analyzeMetric = (metric, value) => {
    const info = metrics_info[metric];
    const analysis = analysis_text[metric];

    if (info) {
      if (
        info.normal_range_lower_limit &&
        value < info.normal_range_lower_limit
      ) {
        return analysis.too_low;
      } else if (
        info.normal_range_upper_limit &&
        value > info.normal_range_upper_limit
      ) {
        return analysis.too_high;
      } else {
        return analysis.normal;
      }
    }
    return '분석할 수 없는 값입니다.';
  };

  // Bar color setting function
  const getBarColor = (metric, value) => {
    const info = metrics_info[metric];
    let barColor = 'rgba(242, 87, 87, 0.27)'; // 기본 색상은 빨간색

    if (info) {
      if (
        info.normal_range_lower_limit &&
        value < info.normal_range_lower_limit
      ) {
        return barColor; // 빨간색 유지
      } else if (
        info.normal_range_upper_limit &&
        value > info.normal_range_upper_limit
      ) {
        return barColor; // 빨간색 유지
      } else {
        return 'rgba(87, 136, 242, 0.27)'; // 정상 범위일 때 색상: 파란색
      }
    }
    return barColor; // 기본 색상 반환 (빨간색)
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!storedData || storedData.length === 0) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>
          저장된 건강검진 데이터가 없습니다.
        </Text>
      </View>
    );
  }

  const latestRecord = storedData[storedData.length - 1];
  const systolic = parseInt(latestRecord.resBloodPressure.split('/')[0], 10);
  const diastolic = parseInt(latestRecord.resBloodPressure.split('/')[1], 10);
  const fastingBloodSugar = parseFloat(latestRecord.resFastingBloodSuger);

  // Calculate progress bar values
  const systolicMax =
    metrics_info.resBloodPressureSystolic.normal_range_upper_limit * 1.3;
  const diastolicMax =
    metrics_info.resBloodPressureDiastolic.normal_range_upper_limit * 1.3;
  const fastingBloodSugarMax =
    metrics_info.resFastingBloodSugar.normal_range_upper_limit * 1.3;

  const systolicProgress = Math.min(systolic / systolicMax, 1); // Keep progress within [0, 1]
  const diastolicProgress = Math.min(diastolic / diastolicMax, 1);
  const fastingBloodSugarProgress = Math.min(
    fastingBloodSugar / fastingBloodSugarMax,
    1,
  );

  const getMarkerPosition = (value, maxValue) => `${(value / maxValue) * 100}%`;

  // Responsive width for bars
  const screenWidth = Dimensions.get('window').width;
  const barWidth = screenWidth - 60; // Adjust based on padding

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      
      {/* 수축기 혈압 */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>혈압(수축기)</Text>
        <Text style={styles.value}>
          {systolic} {metrics_info.resBloodPressureSystolic.unit}
        </Text>
        <View style={[styles.barContainer, { width: barWidth }]}>
          <Bar
            progress={systolicProgress}
            width={barWidth}
            height={10}
            color={getBarColor('resBloodPressureSystolic', systolic)} // 동적으로 바 색상 설정
            unfilledColor="rgba(217, 217, 217, 1)" // 연한 회색 불채색
            borderColor='white'
          />
          {/* 상한치 표시 */}
          <View
            style={{
              position: 'absolute',
              left: getMarkerPosition(
                metrics_info.resBloodPressureSystolic.normal_range_upper_limit,
                systolicMax,
              ),
              top: 0,
              height: 30,
              width: 2,
              backgroundColor: 'white',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: getMarkerPosition(
                metrics_info.resBloodPressureSystolic.normal_range_upper_limit,
                systolicMax,
              ),
              top: 15,
              fontSize: 10,
              color: 'gray',
            }}>
            {metrics_info.resBloodPressureSystolic.normal_range_upper_limit}
          </Text>
        </View>
        <Text style={styles.analysis}>
          {analyzeMetric('resBloodPressureSystolic', systolic)}
        </Text>
      </View>

      {/* 이완기 혈압 */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>혈압(이완기)</Text>
        <Text style={styles.value}>
          {diastolic}{' '}
          {metrics_info.resBloodPressureDiastolic.unit}
        </Text>
        <View style={[styles.barContainer, { width: barWidth }]}>
          <Bar
            progress={diastolicProgress}
            width={barWidth}
            height={10}
            color={getBarColor('resBloodPressureDiastolic', diastolic)} // 동적으로 바 색상 설정
            unfilledColor="rgba(217, 217, 217, 1)" // 연한 회색 불채색
            borderColor='white'
          />
          {/* 상한치 표시 */}
          <View
            style={{
              position: 'absolute',
              left: getMarkerPosition(
                metrics_info.resBloodPressureDiastolic.normal_range_upper_limit,
                diastolicMax,
              ),
              top: 0,
              height: 30,
              width: 2,
              backgroundColor: 'white',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: getMarkerPosition(
                metrics_info.resBloodPressureDiastolic.normal_range_upper_limit,
                diastolicMax,
              ),
              top: 15,
              fontSize: 10,
              color: 'gray',
            }}>
            {metrics_info.resBloodPressureDiastolic.normal_range_upper_limit}
          </Text>
        </View>
        <Text style={styles.analysis}>
          {analyzeMetric('resBloodPressureDiastolic', diastolic)}
        </Text>
      </View>

      {/* 공복 혈당 */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>공복 혈당</Text>
        <Text style={styles.value}>
          {fastingBloodSugar}{' '}
          {metrics_info.resFastingBloodSugar.unit}
        </Text>
        <View style={[styles.barContainer, { width: barWidth }]}>
          <Bar
            progress={fastingBloodSugarProgress}
            width={barWidth}
            height={10}
            color={getBarColor('resFastingBloodSugar', fastingBloodSugar)} // 동적으로 바 색상 설정
            unfilledColor="rgba(217, 217, 217, 1)" // 연한 회색 불채색
            borderColor='white'
          />
          {/* 상한치 표시 */}
          <View
            style={{
              position: 'absolute',
              left: getMarkerPosition(
                metrics_info.resFastingBloodSugar.normal_range_upper_limit,
                fastingBloodSugarMax,
              ),
              top: 0,
              height: 30,
              width: 2,
              backgroundColor: 'white',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              left: getMarkerPosition(
                metrics_info.resFastingBloodSugar.normal_range_upper_limit,
                fastingBloodSugarMax,
              ),
              top: 15,
              fontSize: 10,
              color: 'gray',
            }}>
            {metrics_info.resFastingBloodSugar.normal_range_upper_limit}
          </Text>
        </View>
        <Text style={styles.analysis}>
          {analyzeMetric('resFastingBloodSugar', fastingBloodSugar)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default HypertensionDiabetesScreen;
