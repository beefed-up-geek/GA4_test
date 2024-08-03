// /src/screen/Kit_checkup/Kit_checkup3.js
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const Kit_checkupScreen3 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={{ color: 'black' }}>이 화면은  /src/screen/Kit_checkup/Kit_checkup3.js🎉</Text>
          <Text style={styles.headerText}>검사 결과</Text>
          <View style={styles.resultContainer}>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>eGFR</Text>
              <Text style={styles.resultValue}>150</Text>
              <Text style={styles.resultStatus}>좋음</Text>
              <Icon name="smile" size={24} color="#FFD700" style={styles.iconStatus} />
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>신장단계</Text>
              <Text style={styles.resultValue}>1단계</Text>
              <Text style={styles.resultStatus}>좋음</Text>
              <Icon name="smile" size={24} color="#FFD700" style={styles.iconStatus} />
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>포도당</Text>
              <Text style={styles.resultValue}>음성(-)</Text>
              <Text style={styles.resultStatus}>좋음</Text>
              <Icon name="smile" size={24} color="#FFD700" style={styles.iconStatus} />
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>pH</Text>
              <Text style={styles.resultValue}>7.6</Text>
              <Text style={styles.resultStatus}>보통</Text>
              <Icon name="meh" size={24} color="#FFD700" style={styles.iconStatus} />
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>잠혈</Text>
              <Text style={styles.resultValue}>양성(++)</Text>
              <Text style={styles.resultStatus}>주의</Text>
              <Icon name="frown" size={24} color="#FFD700" style={styles.iconStatus} />
            </View>
            <View style={styles.resultRow}>
              <Text style={styles.resultLabel}>단백질</Text>
              <Text style={styles.resultValue}>양성(+++)</Text>
              <Text style={styles.resultStatus}>위험</Text>
              <Icon name="sad-tear" size={24} color="#FFD700" style={styles.iconStatus} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => navigation.popToTop()}>
            <Text style={styles.homeButtonText}>키트 홈으로 가기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e3ebff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontFamily: 'NanumGothic',
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    marginVertical: 20,
  },
  resultContainer: {
    width: '90%',
    backgroundColor: '#fcffff',
    borderRadius: 20,
    padding: 16,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  resultLabel: {
    fontFamily: 'NanumGothic',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    flex: 1,
  },
  resultValue: {
    fontFamily: 'NanumGothic',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginRight: 10,
  },
  resultStatus: {
    fontFamily: 'NanumGothic',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
  iconStatus: {
    marginLeft: 10,
  },
  homeButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#1677FF',
    borderRadius: 8,
    alignItems: 'center',
  },
  homeButtonText: {
    fontFamily: 'NanumGothic',
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
  },
});

export default Kit_checkupScreen3;
