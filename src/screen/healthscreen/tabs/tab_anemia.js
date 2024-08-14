// /src/screen/healthscreen/tabs/tab_anemia.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { metrics_info, analysis_text } from './data';
import { styles } from './styles_tab'; //모든 tab의 스타일정보가 styles_tab.js에 통합되어있음

const AnemiaScreen = () => {
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
  const hemoglobin = parseFloat(latestRecord.resHemoglobin);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.recordContainer}>
        <Text style={styles.title}>혈색소 (Hemoglobin)</Text>
        <Text style={styles.value}>
          가장 최근 값: {hemoglobin} {metrics_info.resHemoglobin.unit}
        </Text>
        <Text style={styles.analysis}>{analyzeMetric("resHemoglobin", hemoglobin)}</Text>
      </View>
    </ScrollView>
  );
};


export default AnemiaScreen;
