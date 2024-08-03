// /src/screen/Kit_checkup/index.js
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Kit_checkupScreen1 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView scrollEnabled={true} contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
        <Text style={{ color: 'black' }}>이 화면은 /src/screen/Kit_checkup/index.js 🎉</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>
              이 검사는 소변검사를 통해 신장기능에 이상이 있는지 확인하는 테스트입니다. 설명을 잘 읽고 설명에 따라 진행하시길 바랍니다.
            </Text>
            <Icon name="info-circle" size={22} color="#000" style={styles.infoIcon} />
          </View>
          <View style={styles.tipsContainer}>
            <View style={styles.tip}>
              <Icon name="exclamation-circle" size={25} color="#000" />
              <Text style={styles.tipText}>비타민C 섭취 주의</Text>
            </View>
            <View style={styles.tip}>
              <Icon name="coffee" size={25} color="#000" />
              <Text style={styles.tipText}>과도한 물 섭취 주의</Text>
            </View>
            <View style={styles.tip}>
              <Icon name="calendar-alt" size={25} color="#000" />
              <Text style={styles.tipText}>생리기간 피하기</Text>
            </View>
            <View style={styles.tip}>
              <Icon name="tint" size={25} color="#000" />
              <Text style={styles.tipText}>아침 첫 소변 권장</Text>
            </View>
            <View style={styles.tip}>
              <Icon name="camera" size={25} color="#000" />
              <Text style={styles.tipText}>60분 이내에 촬영하기</Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Kit_checkup2')}>
              <Text style={styles.buttonText}>다음으로</Text>
            </TouchableOpacity>
          </View>
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
    width: '100%',
    height: '100%',
    backgroundColor: '#e3ebff',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoBox: {
    width: '90%',
    backgroundColor: '#fcfeff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    position: 'relative',
  },
  infoText: {
    fontFamily: 'Gowun Batang',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 10,
  },
  infoIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  tipsContainer: {
    width: '90%',
    paddingHorizontal: 10,
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tipText: {
    fontFamily: 'Gowun Batang',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginLeft: 20,
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: 'rgba(120, 158, 255, 0.5)',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 8,
    fontWeight: '400',
    color: '#000000',
  },
});

export default Kit_checkupScreen1;
