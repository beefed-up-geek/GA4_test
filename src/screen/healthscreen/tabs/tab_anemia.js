import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet, // StyleSheet 임포트
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { metrics_info, analysis_text } from './data';
import { styles } from './styles_tab'; // 공통 스타일 임포트
import { Bar } from 'react-native-progress'; // Bar 컴포넌트 임포트

const AnemiaScreen = () => {
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

  // 성별에 따라 헤모글로빈 정상 범위 설정
  const getHemoglobinRange = (gender) => {
    if (gender === 'male') {
      return {
        lower: metrics_info.resHemoglobin.normal_range_lower_limit.male,
        upper: metrics_info.resHemoglobin.normal_range_upper_limit.male,
      };
    } else {
      return {
        lower: metrics_info.resHemoglobin.normal_range_lower_limit.female,
        upper: metrics_info.resHemoglobin.normal_range_upper_limit.female,
      };
    }
  };

  // 지표 분석 함수
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

  // 바 색상 설정 함수
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
  const hemoglobin = parseFloat(latestRecord.resHemoglobin);
  const { lower, upper } = getHemoglobinRange(userInfo.gender);

  // 진행 바 값 계산
  const hemoglobinMax = upper * 1.3; // 최댓값의 1.3배로 설정
  const hemoglobinProgress = Math.min(hemoglobin / hemoglobinMax, 1); // 0에서 1 사이로 제한

  const getMarkerPosition = (value, maxValue) => `${(value / maxValue) * 100}%`;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.recordContainer}>
        <Text style={styles.title}>혈색소 (Hemoglobin)</Text>
        <Text style={styles.value}>
          가장 최근 값: {hemoglobin} {metrics_info.resHemoglobin.unit}
        </Text>
        <View style={styles.barContainer}>
          <Bar
            progress={hemoglobinProgress}
            width={200}
            height={10}
            color={getBarColor('resHemoglobin', hemoglobin)} // 바 색상 동적 설정
            unfilledColor="rgba(217, 217, 217, 1)" // 연한 파란색 10% 불투명도
            borderColor='white'
          />
          {/* 하한치 표시 */}
          <View style={styles.markerLine(getMarkerPosition(lower, hemoglobinMax))} />
          <Text style={styles.markerText(getMarkerPosition(lower, hemoglobinMax))}>
            {lower}
          </Text>
          {/* 상한치 표시 */}
          <View style={styles.markerLine(getMarkerPosition(upper, hemoglobinMax))} />
          <Text style={styles.markerText(getMarkerPosition(upper, hemoglobinMax))}>
            {upper}
          </Text>
        </View>
        <Text style={styles.analysis}>
          {analyzeMetric('resHemoglobin', hemoglobin)}
        </Text>
      </View>
    </ScrollView>
  );
};

export default AnemiaScreen;

