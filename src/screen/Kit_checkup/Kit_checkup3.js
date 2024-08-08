/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';

const Kit_checkupScreen3 = ({}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <View style={styles.topRow} />
            <View style={styles.topRow} />
            <View style={styles.imageContainer}>
              <ImageBackground
                style={styles.mainImage}
                source={require('./assets/images/35dfdd72ec7b06088f1aa32a7f0e4db35347eabf.png')}
                resizeMode="cover"
              />
              <View style={styles.infoBox}>
                <View style={styles.infoBoxContent}>
                  <View style={styles.infoTitleContainer}>
                    <Text style={styles.infoTitle}>키트 검사하러 가기</Text>
                  </View>
                  <View style={styles.infoDateContainer}>
                    <Text style={styles.infoLabel}>최근 검사한 날짜</Text>
                    <Text style={styles.infoDate}>2024년 7월 23일</Text>
                  </View>
                </View>
              </View>
              <View style={styles.circleContainer}>
                <View style={styles.circle}>
                  <Image
                    style={styles.arrowImage}
                    source={require('./assets/images/a6782522-20a2-48aa-bf26-0ab52ea4931a.png')}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View style={styles.storeLinkContainer}>
                <View style={styles.storeIconContainer}>
                  <ImageBackground
                    style={styles.storeIcon}
                    source={require('./assets/images/80f49ea7-041c-436e-80ea-483cf0a41674.png')}
                  />
                </View>
                <Text style={styles.storeLink}>스토어 바로가기</Text>
              </View>
              <ImageBackground
                style={styles.smallIcon}
                source={require('./assets/images/9eba129c-fb80-4756-8efe-49f5584ecd06.png')}
                resizeMode="cover"
              />
            </View>
            <View style={styles.resultAnalysisContainer}>
              <Text style={styles.sectionTitle}>결과 분석</Text>
              <View style={styles.resultBox}>
                <View style={styles.resultRow}>
                  <Text style={styles.resultTitle}>7월 23일 검사 결과</Text>
                </View>
                <View style={styles.resultTextContainer}>
                  <View style={styles.resultTextRow}>
                    <Text style={styles.resultText}>바보바보</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.testResultContainer}>
              <Text style={styles.sectionTitle}>검사 결과</Text>
              <View style={styles.testBox}>
                <View style={styles.testRow}>
                  <Text style={styles.testTitle}>혈청 크레아티닌</Text>
                  <View style={styles.testValueContainer}>
                    <ImageBackground
                      style={styles.testIcon}
                      source={require('./assets/images/daa90f45-fe8a-42e6-ba85-5c0bbfbec863.png')}
                      resizeMode="cover"
                    />
                    <Text style={styles.testValue}>0.6</Text>
                  </View>
                </View>
                <View style={styles.testTextContainer}>
                  <View style={styles.testTextRow}>
                    <View style={styles.testIconContainer}>
                      <ImageBackground
                        style={styles.testTextIcon}
                        source={require('./assets/images/8c705ea2-e552-4de2-855e-e233821a6e3f.png')}
                      />
                    </View>
                    <Text style={styles.testText}>
                      낮을수록 신장 기능이 좋아요.
                    </Text>
                  </View>
                </View>
                <View style={styles.graphContainer}>
                  <View style={styles.graphBox}>
                    <Text style={styles.graphValue}>
                      <Text style={styles.graphValueMain}>1.6&nbsp;</Text>
                      <Text style={styles.graphValueUnit}>mg/dL</Text>
                    </Text>
                  </View>
                  <View style={styles.graphImageContainer}>
                    <ImageBackground
                      style={styles.graphLine}
                      source={require('./assets/images/9f6ed053-b270-4b3f-90aa-53d553c79f05.png')}
                      resizeMode="cover"
                    />
                    <View style={styles.graphYAxis}>
                      <Text style={styles.graphYAxisLabel}>2.0</Text>
                      <Text style={styles.graphYAxisLabel}>1.6</Text>
                      <Text style={styles.graphYAxisLabel}>1.2</Text>
                      <Text style={styles.graphYAxisLabel}>0.8</Text>
                      <Text style={styles.graphYAxisLabel}>0.4</Text>
                    </View>
                    <ImageBackground
                      style={styles.graphImage}
                      source={require('./assets/images/94e641dc-3757-475b-8897-c305dc3da2d8.png')}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.graphDates}>
                    <Text style={styles.graphDate}>02.25</Text>
                    <Text style={styles.graphDate}>04.13</Text>
                    <Text style={styles.graphDate}>05.02</Text>
                    <Text style={styles.graphDate}>06.17</Text>
                    <Text style={styles.graphDate}>07.23</Text>
                  </View>
                </View>
              </View>
              <View style={styles.testBox}>
                <View style={styles.testRow}>
                  <Text style={styles.testTitle}>사구체여과율 (GFR)</Text>
                  <View style={styles.testValueContainer}>
                    <ImageBackground
                      style={styles.testIcon}
                      source={require('./assets/images/d470d7b1-c68c-4529-bf09-af554f52718f.png')}
                      resizeMode="cover"
                    />
                    <Text style={styles.testValue}>5.0</Text>
                  </View>
                </View>
                <View style={styles.testTextContainer}>
                  <View style={styles.testTextRow}>
                    <View style={styles.testIconContainer}>
                      <ImageBackground
                        style={styles.testTextIcon}
                        source={require('./assets/images/beccde73-3dec-4f67-872e-bab643d1399e.png')}
                      />
                    </View>
                    <Text style={styles.testText}>
                      높을수록 신장 기능이 좋아요.
                    </Text>
                  </View>
                </View>
                <View style={styles.graphContainer}>
                  <View style={styles.graphBox}>
                    <Text style={styles.graphValue}>
                      <Text style={styles.graphValueMain}>1.6&nbsp;</Text>
                      <Text style={styles.graphValueUnit}>mg/dL</Text>
                    </Text>
                  </View>
                  <View style={styles.graphImageContainer}>
                    <ImageBackground
                      style={styles.graphLine}
                      source={require('./assets/images/14d3241d-e01b-44a7-864f-c0d4d78a2dad.png')}
                      resizeMode="cover"
                    />
                    <View style={styles.graphYAxis}>
                      <Text style={styles.graphYAxisLabel}>2.0</Text>
                      <Text style={styles.graphYAxisLabel}>1.6</Text>
                      <Text style={styles.graphYAxisLabel}>1.2</Text>
                      <Text style={styles.graphYAxisLabel}>0.8</Text>
                      <Text style={styles.graphYAxisLabel}>0.4</Text>
                    </View>
                    <ImageBackground
                      style={styles.graphImage}
                      source={require('./assets/images/31371376-30c4-412e-ba6d-75776de2b0fa.png')}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.graphDates}>
                    <Text style={styles.graphDate}>02.25</Text>
                    <Text style={styles.graphDate}>04.13</Text>
                    <Text style={styles.graphDate}>05.02</Text>
                    <Text style={styles.graphDate}>06.17</Text>
                    <Text style={styles.graphDate}>07.23</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            style={styles.bottomImage}
            source={require('./assets/images/b873dd84-5507-4a80-afd5-4b1848a8f78d.png')}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    width: 390,
    height: 1355,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    margin: 'auto',
  },
  topContainer: {
    display: 'flex',
    width: 333,
    height: 203,
    alignItems: 'center',
    position: 'relative',
    marginTop: 96,
    marginLeft: 29,
  },
  topRow: {
    display: 'flex',
    width: 333,
    height: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  imageContainer: {
    width: 326,
    height: 229,
    position: 'relative',
  },
  mainImage: {
    width: 125,
    height: 125,
    position: 'absolute',
    top: 10,
    left: 155,
    zIndex: 10,
  },
  infoBox: {
    display: 'flex',
    width: 326,
    height: 128,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#efe8ff',
    borderRadius: 24,
    position: 'absolute',
    top: 19,
    left: 0,
  },
  infoBoxContent: {
    display: 'flex',
    gap: 4,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    position: 'relative',
  },
  infoTitleContainer: {
    display: 'flex',
    paddingBottom: 12,
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  infoTitle: {
    width: 172,
    height: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: '#353535',
    textAlign: 'left',
  },
  infoDateContainer: {
    width: 88,
    height: 28,
  },
  infoLabel: {
    height: 12,
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 12,
    color: '#545359',
    textAlign: 'left',
  },
  infoDate: {
    height: 12,
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 12,
    color: '#545359',
    textAlign: 'left',
    marginTop: 4,
  },
  circleContainer: {
    width: 71.646,
    height: 70,
    position: 'absolute',
    top: 117.315,
    left: 264.354,
    zIndex: 11,
  },
  circle: {
    display: 'flex',
    width: 83,
    height: 56,
    padding: 10.769,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccaeea',
    borderRadius: 39.846,
    position: 'relative',
    marginTop: -38.315,
    marginLeft: -32.354,
  },
  arrowImage: {
    width: 8.274,
    height: 17.231,
    position: 'relative',
    marginTop: 4.308,
    marginLeft: 10.034,
  },
  storeLinkContainer: {
    display: 'flex',
    width: 325,
    height: 24,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    position: 'absolute',
    top: 163,
    left: 0.5,
    overflow: 'hidden',
  },
  storeIconContainer: {
    width: 24,
    height: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  storeIcon: {
    width: 19.5,
    height: 18,
    position: 'relative',
    marginTop: 3,
    marginLeft: 2.25,
  },
  storeLink: {
    height: 16,
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    textAlign: 'left',
  },
  smallIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 167,
    left: 123.5,
    overflow: 'hidden',
  },
  resultAnalysisContainer: {
    width: 326,
    height: 140,
    position: 'relative',
  },
  sectionTitle: {
    height: 21,
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color: '#5d5d62',
    textAlign: 'left',
  },
  resultBox: {
    display: 'flex',
    width: 326,
    gap: 12,
    alignItems: 'flex-start',
    position: 'relative',
    marginTop: 18,
  },
  resultRow: {
    display: 'flex',
    padding: 24,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 24,
  },
  resultTitle: {
    height: 24,
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#5d5d62',
    textAlign: 'left',
  },
  resultTextContainer: {
    width: 171,
    height: 17,
    alignItems: 'flex-start',
  },
  resultTextRow: {
    display: 'flex',
    paddingBottom: 24,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  resultText: {
    height: 16,
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    textAlign: 'left',
  },
  testResultContainer: {
    display: 'flex',
    width: 326,
    paddingTop: 66,
    paddingBottom: 60,
    gap: 18,
    alignItems: 'flex-start',
    position: 'relative',
  },
  testBox: {
    display: 'flex',
    padding: 24,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    borderRadius: 24,
  },
  testRow: {
    display: 'flex',
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  testTitle: {
    height: 24,
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#5d5d62',
    textAlign: 'left',
  },
  testValueContainer: {
    display: 'flex',
    width: 53,
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  testIcon: {
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  testValue: {
    height: 16,
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    textAlign: 'left',
  },
  testTextContainer: {
    width: 171,
    height: 17,
    alignItems: 'flex-start',
  },
  testTextRow: {
    display: 'flex',
    paddingBottom: 24,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  testIconContainer: {
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  testTextIcon: {
    width: 15,
    height: 15,
    position: 'relative',
    marginTop: 1.5,
    marginLeft: 1.5,
  },
  testText: {
    height: 16,
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    textAlign: 'left',
  },
  graphContainer: {
    width: 282,
    height: 182,
    position: 'relative',
  },
  graphBox: {
    display: 'flex',
    width: 61,
    height: 34,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    position: 'relative',
    marginLeft: 68.5,
  },
  graphValue: {
    width: 48,
    height: 16,
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    textAlign: 'center',
    position: 'absolute',
    top: 9,
    left: 6.548,
  },
  graphValueMain: {
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#303437',
    textAlign: 'center',
  },
  graphValueUnit: {
    fontFamily: 'Pretendard Variable',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 16,
    color: '#303437',
    textAlign: 'center',
  },
  graphImageContainer: {
    width: 277.883,
    height: 134,
    position: 'relative',
    marginTop: -6,
  },
  graphLine: {
    width: 11.321,
    height: 132,
    position: 'absolute',
    top: 0,
    left: 92.628,
  },
  graphYAxis: {
    display: 'flex',
    width: 31.905,
    height: 120,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 10,
    left: 0,
  },
  graphYAxisLabel: {
    width: 18,
    height: 16,
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    textAlign: 'center',
  },
  graphImage: {
    width: 231.569,
    height: 124,
    position: 'absolute',
    top: 10,
    left: 46.314,
  },
  graphDates: {
    display: 'flex',
    width: 250.095,
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginTop: -4,
    marginLeft: 31.905,
  },
  graphDate: {
    width: 33,
    height: 16,
    fontFamily: 'DM Sans',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    textAlign: 'center',
  },
  bottomImage: {
    width: 148,
    height: 5,
    position: 'relative',
    marginTop: 1043,
    marginLeft: 121,
  },
});

export default Kit_checkupScreen3;
