import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Bar } from 'react-native-progress';
import { metrics_info, analysis_text } from './data';
import { styles } from './styles_tab';

const KidneyScreen = () => {
  const [storedData, setStoredData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoredData = async () => {
      try {
        const data = await AsyncStorage.getItem('healthscreen_data');
        console.log(data);
        if (data !== null) {
          const parsedData = JSON.parse(data);
          // 각 레코드의 유효성 검사
          const validData = parsedData.filter(record => 
            !isNaN(parseFloat(record.resGFR)) &&
            !isNaN(parseFloat(record.resSerumCreatinine))
          );
          setStoredData(validData);
        }
      } catch (error) {
        console.error('저장된 데이터를 불러오는데 실패했습니다:', error);
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
      if (info.normal_range_lower_limit && value < info.normal_range_lower_limit) {
        return analysis.too_low;
      } else if (info.normal_range_upper_limit && value > info.normal_range_upper_limit) {
        return analysis.too_high;
      } else {
        return analysis.normal;
      }
    }
    return "분석할 수 없는 값입니다.";
  };

  // Bar color setting function
  const getBarColor = (metric, value) => {
    const info = metrics_info[metric];
    let barColor = 'rgba(242, 87, 87, 0.27)'; // 기본 색상은 빨간색

    if (info) {
      if (info.normal_range_lower_limit && value < info.normal_range_lower_limit) {
        return barColor; // 빨간색 유지
      } else if (info.normal_range_upper_limit && value > info.normal_range_upper_limit) {
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
        <Text style={styles.noDataText}>저장된 건강검진 데이터가 없습니다.</Text>
      </View>
    );
  }

  const latestRecord = storedData[storedData.length - 1];
  const eGFR = parseFloat(latestRecord.resGFR) || 0;
  const serumCreatinine = parseFloat(latestRecord.resSerumCreatinine) || 0;

  // eGFR과 Serum Creatinine의 범위 및 프로그레스 바 계산
  const eGFRMin = metrics_info.resGFR.normal_range_lower_limit || 0;
  const eGFRMax = eGFRMin * 2 || 100; // eGFR의 하한치의 2배로 설정, 기본값 100
  const eGFRProgress = eGFRMax !== 0 ? Math.min(eGFR / eGFRMax, 1) : 0;

  const serumCreatinineMax = metrics_info.resSerumCreatinine.normal_range_upper_limit ? metrics_info.resSerumCreatinine.normal_range_upper_limit * 1.3 : 100; // 상한치의 1.3배로 설정, 기본값 100
  const serumCreatinineProgress = serumCreatinineMax !== 0 ? Math.min(serumCreatinine / serumCreatinineMax, 1) : 0;

  const getMarkerPosition = (value, maxValue) => {
    if (isNaN(value) || isNaN(maxValue) || maxValue === 0) {
      return '0%'; // 기본 위치
    }
    return `${(value / maxValue) * 100}%`;
  };

  // 디버깅 로그 추가
  console.log('eGFR:', eGFR, 'eGFRMax:', eGFRMax, 'eGFRProgress:', eGFRProgress);
  console.log('serumCreatinine:', serumCreatinine, 'serumCreatinineMax:', serumCreatinineMax, 'serumCreatinineProgress:', serumCreatinineProgress);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* eGFR */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>사구체여과율 (eGFR)</Text>
        <Text style={styles.value}>{eGFR} {metrics_info.resGFR.unit}</Text>
        <View style={styles.barContainer}>
          <Bar
            progress={eGFRProgress}
            width={200}
            height={10}
            color={getBarColor('resGFR', eGFR)} // 동적으로 바 색상 설정
            unfilledColor="rgba(217, 217, 217, 1)" // 연한 파란색 10% 불투명도
            borderColor='white'
          />
          {/* 하한치 표시 */}
          <View style={styles.markerLine(getMarkerPosition(eGFRMin, eGFRMax))} />
          <Text style={styles.markerText(getMarkerPosition(eGFRMin, eGFRMax))}>
            {eGFRMin}
          </Text>
        </View>
        <Text style={styles.analysis}>{analyzeMetric("resGFR", eGFR)}</Text>
      </View>
      
      {/* Serum Creatinine */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>혈청 크레아티닌</Text>
        <Text style={styles.value}>{serumCreatinine} {metrics_info.resSerumCreatinine.unit}</Text>
        <View style={styles.barContainer}>
          <Bar
            progress={serumCreatinineProgress}
            width={200}
            height={10}
            color={getBarColor('resSerumCreatinine', serumCreatinine)} // 동적으로 바 색상 설정
            unfilledColor="rgba(217, 217, 217, 1)" // 연한 파란색 10% 불투명도
            borderColor='white'
          />
          {/* 상한치 표시 */}
          <View style={styles.markerLine(getMarkerPosition(metrics_info.resSerumCreatinine.normal_range_upper_limit, serumCreatinineMax))} />
          <Text style={styles.markerText(getMarkerPosition(metrics_info.resSerumCreatinine.normal_range_upper_limit, serumCreatinineMax))}>
            {metrics_info.resSerumCreatinine.normal_range_upper_limit}
          </Text>
        </View>
        <Text style={styles.analysis}>{analyzeMetric("resSerumCreatinine", serumCreatinine)}</Text>
      </View>
      
      {/* Urinary Protein */}
      <View style={styles.recordContainer}>
        <Text style={styles.title}>요단백</Text>
        <Text style={styles.value}>{latestRecord.resUrinaryProtein}</Text>
        <Text style={styles.analysis}>{analysis_text.resUrinaryProtein[latestRecord.resUrinaryProtein === "음성" ? "negative" : "positive"]}</Text>
      </View>
    </ScrollView>
  );
};

export default KidneyScreen;
