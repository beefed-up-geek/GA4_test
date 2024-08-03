// /src/screen/Kit_checkup/Kit_checkup2.js
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
import YoutubePlayer from 'react-native-youtube-iframe';

export const Kit_checkupScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text style={{ color: 'black' }}>이 화면은 /src/screen/Kit_checkup/Kit_checkup2.js 🎉</Text>
          <Text style={{ color: 'black' }}>다음 화면은  /src/screen/Kit_checkup/QRcode.js !</Text>
          <View style={styles.infoBox}>
            <View style={styles.infoIconContainer}>
              <Icon name="info-circle" size={22} color="#000" style={styles.infoIcon} />
            </View>
            <Text style={styles.infoText}>
              이 검사는 소변검사를 통해 신장기능에 이상이 있는지 확인하는 테스트입니다. 설명을 잘 읽고 설명에 따라 진행하시길 바랍니다.
            </Text>
          </View>
          <View style={styles.videoContainer}>
            <YoutubePlayer play={false} height={200} videoId={'fRbvMOwTp9Q'} />
            <Text style={styles.videoText}>가이드 영상(안드로이드에서 에러있음)</Text>
          </View>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionText}>
              검사 키트지에 소변을 묻혀주세요
            </Text>
            <Text style={styles.instructionText}>
              소변을 가볍게 털고 60초동안 기다려주세요
            </Text>
            <Text style={styles.instructionText}>
              너무 어두운 곳이나 빛이 반사되는 곳을 피해서 사진을 촬영해주세요
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('QRcode')}>
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
  infoIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  infoText: {
    fontFamily: 'Gowun Batang',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 10,
  },
  videoContainer: {
    width: '80%',
    height: 300, // 적절한 높이 설정
    backgroundColor: '#fcffff',
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  videoText: {
    fontFamily: 'Inter',
    fontSize: 8,
    fontWeight: '400',
    color: '#000000',
  },
  instructionsContainer: {
    width: '90%',
  },
  instructionText: {
    fontFamily: 'Gowun Batang',
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: 'rgba(120, 158, 255, 0.5)',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter',
    fontSize: 8,
    fontWeight: '400',
    color: '#000000',
  },
});

export default Kit_checkupScreen2;
