import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { metrics_info, analysis_text } from './data';
import { styles } from './styles_tab'; // 모든 tab의 스타일정보가 styles_tab.js에 통합되어있음
import { Bar } from 'react-native-progress';

const DyslipidemiaScreen = () => {
  const [storedData, setStoredData] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        const data = await AsyncStorage.getItem('healthscreen_data');
        const user = await AsyncStorage.getItem('userInfo');
        if (data !== null) {
          setStoredData(JSON.parse(data));
        }
        if (user !== null) {
          setUserInfo(JSON.parse(user));
        }
      } catch (error) {
        console.error('Failed to load stored data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStoredData();
  }, []);

  // 기존 analyzeMetric 함수: 텍스트 분석만 수행
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

  // 새로운 getBarColor 함수: 색상 설정만 수행
  const getBarColor = (metric, value) => {
    const info = metrics_info[metric];
    let barColor = info.barColor || 'rgba(242, 87, 87, 0.27)'; // 기본 색상은 빨간색

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

  if (!storedData || storedData.length === 0 || !userInfo) {
    return (
      <View style={styles.noDataContainer}>
        <Text style={styles.noDataText}>
          저장된 건강검진 데이터가 없습니다.
        </Text>
      </View>
    );
  }

  const latestRecord = storedData[storedData.length - 1];
  const totalCholesterol = parseFloat(latestRecord.resTotalCholesterol);
  const hdlCholesterol = parseFloat(latestRecord.resHDLCholesterol);
  const ldlCholesterol = parseFloat(latestRecord.resLDLCholesterol);

  // 진행 바 값 계산
  const totalCholesterolMax =
    metrics_info.resTotalCholesterol.normal_range_upper_limit * 1.3;
  const hdlCholesterolMin = metrics_info.resHDLCholesterol.normal_range_lower_limit;
  const hdlCholesterolMax = hdlCholesterolMin * 2;

  const totalCholesterolProgress = Math.min(totalCholesterol / totalCholesterolMax, 1); // 0에서 1 사이로 제한
  const hdlCholesterolProgress = Math.min(hdlCholesterol / hdlCholesterolMax, 1);

  // LDL 콜레스테롤의 상한치 설정
  const ldlUpper = metrics_info.resLDLCholesterol.normal_range_upper_limit;
  const ldlCholesterolMax = ldlUpper * 1.3; // 상한치의 1.3배로 설정
  const ldlCholesterolProgress = Math.min(ldlCholesterol / ldlCholesterolMax, 1);

  const getMarkerPosition = (value, maxValue) => `${(value / maxValue) * 100}%`;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      
      {/* 총 콜레스테롤 */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>총 콜레스테롤</Text>
        <Text style={styles.value}>
          {totalCholesterol}{' '}
          {metrics_info.resTotalCholesterol.unit}
        </Text>
        <View style={styles.barContainer}>
          <Bar
            progress={totalCholesterolProgress}
            width={200}
            height={10}
            color={getBarColor('resTotalCholesterol', totalCholesterol)}
            unfilledColor="rgba(217, 217, 217, 1)" // 연한 파란색 10% 불투명도
            borderColor='white'
          />
          {/* 상한치 표시 */}
          <View style={styles.markerLine(getMarkerPosition(metrics_info.resTotalCholesterol.normal_range_upper_limit, totalCholesterolMax))} />
          <Text style={styles.markerText(getMarkerPosition(metrics_info.resTotalCholesterol.normal_range_upper_limit, totalCholesterolMax))}>
            {metrics_info.resTotalCholesterol.normal_range_upper_limit}
          </Text>
        </View>
        <Text style={styles.analysis}>
          {analyzeMetric('resTotalCholesterol', totalCholesterol)}
        </Text>
      </View>

      {/* HDL 콜레스테롤 */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>HDL 콜레스테롤</Text>
        <Text style={styles.value}>
          {hdlCholesterol}{' '}
          {metrics_info.resHDLCholesterol.unit}
        </Text>
        <View style={styles.barContainer}>
          <Bar
            progress={hdlCholesterolProgress}
            width={200}
            height={10}
            color={getBarColor('resHDLCholesterol', hdlCholesterol)}
            unfilledColor="rgba(217, 217, 217, 1)"
            borderColor='white'
          />
          {/* 하한치 표시 */}
          <View style={styles.markerLine(getMarkerPosition(metrics_info.resHDLCholesterol.normal_range_lower_limit, hdlCholesterolMax))} />
          <Text style={styles.markerText(getMarkerPosition(metrics_info.resHDLCholesterol.normal_range_lower_limit, hdlCholesterolMax))}>
            {metrics_info.resHDLCholesterol.normal_range_lower_limit}
          </Text>
        </View>
        <Text style={styles.analysis}>
          {analyzeMetric('resHDLCholesterol', hdlCholesterol)}
        </Text>
      </View>

      {/* LDL 콜레스테롤 */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>LDL 콜레스테롤</Text>
        <Text style={styles.value}>
          {ldlCholesterol}{' '}
          {metrics_info.resLDLCholesterol.unit}
        </Text>
        <View style={styles.barContainer}>
          <Bar
            progress={ldlCholesterolProgress}
            width={200}
            height={10}
            color={getBarColor('resLDLCholesterol', ldlCholesterol)}
            unfilledColor="rgba(217, 217, 217, 1)"
            borderColor='white'
          />
          {/* 상한치 표시 */}
          <View style={styles.markerLine(getMarkerPosition(ldlUpper, ldlCholesterolMax))} />
          <Text style={styles.markerText(getMarkerPosition(ldlUpper, ldlCholesterolMax))}>
            {ldlUpper}
          </Text>
        </View>
        <Text style={styles.analysis}>
          {analyzeMetric('resLDLCholesterol', ldlCholesterol)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DyslipidemiaScreen;

