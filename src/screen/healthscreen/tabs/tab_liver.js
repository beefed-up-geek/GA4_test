// /src/screen/healthscreen/tabs/tab_liver.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {metrics_info, analysis_text} from './data';
import {styles} from './styles_tab'; //모든 tab의 스타일정보가 styles_tab.js에 통합되어있음

const LiverDiseaseScreen = () => {
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

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.recordContainer}>
        <Text style={styles.title}>AST</Text>
        <Text style={styles.value}> {latestRecord.resGPT} {metrics_info.resAST.unit}</Text>
        <Text style={styles.analysis}>{analyzeMetric("resAST", parseFloat(latestRecord.resAST))}</Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.title}>ALT</Text>
        <Text style={styles.value}> {latestRecord.resALT} {metrics_info.resALT.unit}</Text>
        <Text style={styles.analysis}>{analyzeMetric("resALT", parseFloat(latestRecord.resALT))}</Text>
      </View>

      <View style={styles.recordContainer}>
        <Text style={styles.title}>감마지피티 (r-GTP)</Text>
        <Text style={styles.value}>
           {latestRecord.resyGPT} {metrics_info.resyGPT.unit}
        </Text>
        <Text style={styles.analysis}>
          {analyzeMetric('resyGPT', parseFloat(latestRecord.resyGPT))}
        </Text>
      </View>
    </ScrollView>
  );
};

export default LiverDiseaseScreen;

{/* 간장 질환 값이 없으면 오류가 나서 주석처리 해놨습니다. 있을 경우 오류 발생 x */}

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   ActivityIndicator,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Bar } from 'react-native-progress'; // Bar 컴포넌트 임포트
// import {metrics_info, analysis_text} from './data';
// import {styles} from './styles_tab'; // 모든 tab의 스타일정보가 styles_tab.js에 통합되어있음

// const LiverDiseaseScreen = () => {
//   const [storedData, setStoredData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchStoredData = async () => {
//       try {
//         const data = await AsyncStorage.getItem('healthscreen_data');
//         if (data !== null) {
//           setStoredData(JSON.parse(data));
//         }
//       } catch (error) {
//         console.error('Failed to load stored data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStoredData();
//   }, []);

//   // Helper function to analyze the metric
//   const analyzeMetric = (metric, value, gender = null) => {
//     const info = metrics_info[metric];
//     const analysis = analysis_text[metric];

//     if (info) {
//       const lowerLimit = gender ? info.normal_range_lower_limit[gender] : info.normal_range_lower_limit;
//       const upperLimit = gender ? info.normal_range_upper_limit[gender] : info.normal_range_upper_limit;

//       if (lowerLimit && value < lowerLimit) {
//         return analysis.too_low;
//       } else if (upperLimit && value > upperLimit) {
//         return analysis.too_high;
//       } else {
//         return analysis.normal;
//       }
//     }
//     return '분석할 수 없는 값입니다.';
//   };

//   // Bar color setting function
//   const getBarColor = (metric, value, gender = null) => {
//     const info = metrics_info[metric];
//     let barColor = 'rgba(242, 87, 87, 0.27)'; // 기본 색상은 빨간색

//     if (info) {
//       const lowerLimit = gender ? info.normal_range_lower_limit[gender] : info.normal_range_lower_limit;
//       const upperLimit = gender ? info.normal_range_upper_limit[gender] : info.normal_range_upper_limit;

//       if (lowerLimit && value < lowerLimit) {
//         return barColor; // 빨간색 유지
//       } else if (upperLimit && value > upperLimit) {
//         return barColor; // 빨간색 유지
//       } else {
//         return 'rgba(87, 136, 242, 0.27)'; // 정상 범위일 때 색상: 파란색
//       }
//     }
//     return barColor; // 기본 색상 반환 (빨간색)
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   if (!storedData || storedData.length === 0) {
//     return (
//       <View style={styles.noDataContainer}>
//         <Text style={styles.noDataText}>
//           저장된 건강검진 데이터가 없습니다.
//         </Text>
//       </View>
//     );
//   }

//   const latestRecord = storedData[storedData.length - 1];
//   const gender = latestRecord.gender; // 성별 정보 가져오기

//   const AST = parseFloat(latestRecord.resAST);
//   const ALT = parseFloat(latestRecord.resALT);
//   const rGTP = parseFloat(latestRecord.resyGPT);

//   // AST, ALT 범위 및 프로그레스 바 계산
//   const ASTMax = metrics_info.resAST.normal_range_upper_limit * 1.3; // 상한치의 1.3배로 설정
//   const ALTMax = metrics_info.resALT.normal_range_upper_limit * 1.3; // 상한치의 1.3배로 설정

//   const ASTProgress = Math.min(AST / ASTMax, 1); // 0에서 1 사이로 제한
//   const ALTProgress = Math.min(ALT / ALTMax, 1); // 0에서 1 사이로 제한

//   // r-GTP 범위 및 프로그레스 바 계산 (성별에 따라 상한/하한 다름)
//   const rGTPLower = metrics_info.resyGPT.normal_range_lower_limit[gender];
//   const rGTPUpper = metrics_info.resyGPT.normal_range_upper_limit[gender];
//   const rGTPMax = rGTPUpper * 1.3; // 상한치의 1.3배로 설정
//   const rGTPProgress = Math.min(rGTP / rGTPMax, 1); // 0에서 1 사이로 제한

//   const getMarkerPosition = (value, maxValue) => `${(value / maxValue) * 100}%`;

//   return (
//     <ScrollView
//       style={styles.container}
//       contentContainerStyle={styles.contentContainer}>
//       {/* AST */}
//       <View style={styles.recordContainer}>
//         <Text style={styles.title}>AST</Text>
//         <Text style={styles.value}> {AST} {metrics_info.resAST.unit}</Text>
//         <View style={styles.barContainer}>
//           <Bar
//             progress={ASTProgress}
//             width={200}
//             height={10}
//             color={getBarColor('resAST', AST)} // 동적으로 바 색상 설정
//             unfilledColor="rgba(217, 217, 217, 1)" // 연한 파란색 10% 불투명도
//             borderColor='white'
//           />
//           {/* 상한치 표시 */}
//           <View style={styles.markerLine(getMarkerPosition(metrics_info.resAST.normal_range_upper_limit, ASTMax))} />
//           <Text style={styles.markerText(getMarkerPosition(metrics_info.resAST.normal_range_upper_limit, ASTMax))}>
//             {metrics_info.resAST.normal_range_upper_limit}
//           </Text>
//         </View>
//         <Text style={styles.analysis}>{analyzeMetric("resAST", AST)}</Text>
//       </View>

//       {/* ALT */}
//       <View style={styles.recordContainer}>
//         <Text style={styles.title}>ALT</Text>
//         <Text style={styles.value}> {ALT} {metrics_info.resALT.unit}</Text>
//         <View style={styles.barContainer}>
//           <Bar
//             progress={ALTProgress}
//             width={200}
//             height={10}
//             color={getBarColor('resALT', ALT)} // 동적으로 바 색상 설정
//             unfilledColor="rgba(217, 217, 217, 1)" // 연한 파란색 10% 불투명도
//             borderColor='white'
//           />
//           {/* 상한치 표시 */}
//           <View style={styles.markerLine(getMarkerPosition(metrics_info.resALT.normal_range_upper_limit, ALTMax))} />
//           <Text style={styles.markerText(getMarkerPosition(metrics_info.resALT.normal_range_upper_limit, ALTMax))}>
//             {metrics_info.resALT.normal_range_upper_limit}
//           </Text>
//         </View>
//         <Text style={styles.analysis}>{analyzeMetric("resALT", ALT)}</Text>
//       </View>

//       {/* r-GTP */}
//       <View style={styles.recordContainer}>
//         <Text style={styles.title}>감마지피티 (r-GTP)</Text>
//         <Text style={styles.value}> {rGTP} {metrics_info.resyGPT.unit}</Text>
//         <View style={styles.barContainer}>
//           <Bar
//             progress={rGTPProgress}
//             width={200}
//             height={10}
//             color={getBarColor('resyGPT', rGTP, gender)} // 동적으로 바 색상 설정
//             unfilledColor="rgba(217, 217, 217, 1)" // 연한 파란색 10% 불투명도
//             borderColor='white'
//           />
//           {/* 하한치 표시 */}
//           <View style={styles.markerLine(getMarkerPosition(rGTPLower, rGTPMax))} />
//           <Text style={styles.markerText(getMarkerPosition(rGTPLower, rGTPMax))}>
//             {rGTPLower}
//           </Text>
//           {/* 상한치 표시 */}
//           <View style={styles.markerLine(getMarkerPosition(rGTPUpper, rGTPMax))} />
//           <Text style={styles.markerText(getMarkerPosition(rGTPUpper, rGTPMax))}>
//             {rGTPUpper}
//           </Text>
//         </View>
//         <Text style={styles.analysis}>{analyzeMetric('resyGPT', rGTP, gender)}</Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default LiverDiseaseScreen;


