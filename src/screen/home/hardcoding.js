import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ setSelected }) {
  const navigation = useNavigation();

  const handlePress = () => {
    setSelected('KitResult');
    navigation.navigate('KitResult');
  };

  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.profileContainer}>
              <Text style={styles.profileText} numberOfLines={1}>
                내 프로필
              </Text>
              <View style={styles.profileImageWrapper}>
                <View style={styles.profileImageContainer}>
                  <ImageBackground
                    style={styles.profileImage}
                    source={require('../../../assets/images/9851842d-89f4-47e1-9d42-778a4c26323b.png')}
                  />
                </View>
              </View>
            </View>
            <View style={styles.greetingContainer}>
              <Text style={styles.greetingText}>
                안녕하세요, 홍길동님!
              </Text>
              <ImageBackground
                style={styles.greetingImage}
                source={require('../../../assets/images/c639f0b24ead9f980841b9fe3365897ca9db9dc5.png')}
                resizeMode="contain"
              />
            </View>
            <View style={styles.emptySpace} />
            <View style={styles.checkupContainer}>
              <View style={styles.checkupTextContainer}>
                <View style={styles.checkupIconWrapper}>
                  <ImageBackground
                    style={styles.checkupIcon}
                    source={require('../../../assets/images/e841ee36-b7fe-4eaf-8e69-f692b484f256.png')}
                  />
                </View>
                <Text style={styles.checkupDateText} numberOfLines={1}>
                  최근 검사 : 7월 16일
                </Text>
              </View>
              <View style={styles.checkupDetailContainer}>
                <Text style={styles.checkupDetailText}>
                  <Text style={styles.checkupLastText}>마지막 검사가&nbsp;</Text>
                  <Text style={styles.checkupDaysText}>14일 전</Text>
                  <Text style={styles.checkupLastText}>이에요.&nbsp;</Text>
                </Text>
                <Text style={styles.checkupReminderText} numberOfLines={1}>
                  지금 검사하고 꾸준히 콩팥 건강을 관리해 보세요.
                </Text>
              </View>
              <TouchableOpacity
                onPress={handlePress}
                style={styles.checkupButton}>
                <View style={styles.checkupButtonTextContainer}>
                  <ImageBackground
                    style={styles.checkupButtonIcon}
                    source={require('../../../assets/images/a847ff1a-4d27-481b-b2ca-d0bc909e1c8e.png')}
                    resizeMode="cover"
                  />
                  <Text style={styles.checkupButtonText} numberOfLines={1}>
                    검사하러 가기&nbsp;
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.resultsTitle} numberOfLines={1}>
            검사 결과
          </Text>
          <View style={styles.resultsContainer}>
            <View style={styles.resultBox}>
              <View style={styles.resultIconWrapper}>
                <ImageBackground
                  style={styles.resultIcon}
                  source={require('../../../assets/images/0bfa0e51-549b-42fb-8af4-0a8783450057.png')}
                />
              </View>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultText}>
                  <Text style={styles.resultLabelText}>만성콩팥병</Text>
                  <Text style={styles.resultSpace}>&nbsp;</Text>
                  <Text style={styles.resultValueText}>1단계</Text>
                </Text>
              </View>
            </View>
            <View style={styles.resultBox}>
              <View style={styles.resultIconWrapper}>
                <ImageBackground
                  style={styles.resultIcon}
                  source={require('../../../assets/images/b751692b-4c06-4077-a48f-200da4e57873.png')}
                />
              </View>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultLabel} numberOfLines={1}>
                  eGFR
                </Text>
                <Text style={styles.resultValue} numberOfLines={1}>
                  150
                </Text>
              </View>
            </View>
            <View style={styles.resultBox}>
              <View style={styles.resultIconWrapper}>
                <ImageBackground
                  style={styles.resultIcon}
                  source={require('../../../assets/images/4aaac31b-0b40-4d1a-8e91-20a2cf844de0.png')}
                />
              </View>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultLabel} numberOfLines={1}>
                  포도당
                </Text>
                <Text style={styles.resultValue} numberOfLines={1}>
                  15
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.resultsContainer}>
            <View style={styles.resultBox}>
              <View style={styles.resultIconWrapper}>
                <ImageBackground
                  style={styles.resultIcon}
                  source={require('../../../assets/images/b69070e5-4998-48d0-b1a1-e746a1a6bb0f.png')}
                />
              </View>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultLabel} numberOfLines={1}>
                  pH
                </Text>
                <Text style={styles.resultValue} numberOfLines={1}>
                  7.6
                </Text>
              </View>
            </View>
            <View style={styles.resultBox}>
              <View style={styles.resultIconWrapper}>
                <ImageBackground
                  style={styles.resultIcon}
                  source={require('../../../assets/images/904c25cf-a05d-4aaa-9fd6-6b32fa7ca62a.png')}
                />
              </View>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultLabel} numberOfLines={1}>
                  잠혈
                </Text>
                <Text style={styles.resultValue} numberOfLines={1}>
                  양성(++)
                </Text>
              </View>
            </View>
            <View style={styles.resultBox}>
              <View style={styles.resultIconWrapper}>
                <ImageBackground
                  style={styles.resultIcon}
                  source={require('../../../assets/images/ffb5b43b-b8f1-49a5-8c38-41369eb890e3.png')}
                />
              </View>
              <View style={styles.resultTextContainer}>
                <Text style={styles.resultLabel} numberOfLines={1}>
                  단백질
                </Text>
                <Text style={styles.resultValue} numberOfLines={1}>
                  양성(+++)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  header: {
    display: 'flex',
    width: 333,
    alignItems: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 38,
    marginTop: 23,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 28.5,
  },
  profileContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 39,
  },
  profileText: {
    height: 16,
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    position: 'relative',
    textAlign: 'left',
    zIndex: 40,
  },
  profileImageWrapper: {
    width: 24,
    height: 24,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 41,
  },
  profileImageContainer: {
    width: 14,
    height: 19,
    position: 'relative',
    zIndex: 42,
    marginTop: 2,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 5,
  },
  profileImage: {
    width: '114.29%',
    height: '110.53%',
    position: 'absolute',
    top: '-5.26%',
    left: '-7.14%',
    zIndex: 43,
  },
  greetingContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 93,
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 44,
  },
  greetingText: {
    display: 'flex',
    width: 130,
    height: 68,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexShrink: 0,
    fontFamily: 'Pretendard Variable',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: '#303437',
    position: 'relative',
    textAlign: 'left',
    zIndex: 45,
  },
  greetingImage: {
    width: 124,
    height: 136,
    flexShrink: 0,
    position: 'relative',
    zIndex: 46,
  },
  emptySpace: {
    display: 'flex',
    width: 333,
    height: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 47,
  },
  checkupContainer: {
    height: 179,
    alignSelf: 'stretch',
    flexShrink: 0,
    backgroundColor: '#ebeffe',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    position: 'relative',
    zIndex: 48,
  },
  checkupTextContainer: {
    display: 'flex',
    width: 165,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 56,
    marginTop: 24,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 20,
  },
  checkupIconWrapper: {
    width: 24,
    height: 24,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 57,
  },
  checkupIcon: {
    width: 21.001,
    height: 18.75,
    position: 'relative',
    zIndex: 58,
    marginTop: 2.25,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 1.499,
  },
  checkupDateText: {
    display: 'flex',
    width: 180,
    height: 19,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 19,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'flex-start',
    zIndex: 59,
  },
  checkupDetailContainer: {
    display: 'flex',
    width: 267,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 53,
    marginTop: 14,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 27,
  },
  checkupDetailText: {
    alignSelf: 'stretch',
    flexShrink: 0,
    fontFamily: 'Noto Sans',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    position: 'relative',
    textAlign: 'left',
    zIndex: 54,
  },
  checkupLastText: {
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.068,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
  },
  checkupDaysText: {
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19.068,
    color: '#7595ff',
    position: 'relative',
    textAlign: 'left',
  },
  checkupReminderText: {
    height: 17,
    alignSelf: 'stretch',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.707,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
    zIndex: 55,
  },
  checkupButton: {
    display: 'flex',
    width: 282,
    height: 43,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 12,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    backgroundColor: '#ffffff',
    borderRadius: 48,
    position: 'relative',
    zIndex: 49,
    marginTop: 18,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 24,
  },
  checkupButtonTextContainer: {
    width: 111,
    height: 18,
    flexShrink: 0,
    position: 'relative',
    zIndex: 50,
  },
  checkupButtonIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    top: 0,
    left: 93,
    overflow: 'hidden',
    zIndex: 52,
  },
  checkupButtonText: {
    display: 'flex',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'DM Sans',
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 14,
    color: '#7595ff',
    position: 'absolute',
    top: 3,
    left: 0,
    textAlign: 'center',
    zIndex: 51,
  },
  resultsTitle: {
    height: 21,
    fontFamily: 'Pretendard Variable',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 21,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
    zIndex: 37,
    marginTop: 42,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 29,
  },
  resultsContainer: {
    display: 'flex',
    width: 336,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    position: 'relative',
    marginTop: 17,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 27,
  },
  resultBox: {
    display: 'flex',
    width: 103,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    paddingLeft: 18,
    gap: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexShrink: 0,
    flexWrap: 'nowrap',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    position: 'relative',
    zIndex: 6,
  },
  resultIconWrapper: {
    width: 32,
    height: 32,
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 7,
  },
  resultIcon: {
    width: 26,
    height: 26,
    position: 'relative',
    zIndex: 8,
    marginTop: 3,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 3,
  },
  resultTextContainer: {
    display: 'flex',
    gap: 2,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    flexShrink: 0,
    flexWrap: 'nowrap',
    position: 'relative',
    zIndex: 9,
  },
  resultLabel: {
    height: 16,
    alignSelf: 'stretch',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: '#72777a',
    position: 'relative',
    textAlign: 'left',
    zIndex: 10,
  },
  resultValue: {
    height: 20,
    alignSelf: 'stretch',
    flexShrink: 0,
    flexBasis: 'auto',
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
    zIndex: 11,
  },
  resultText: {
    alignSelf: 'stretch',
    flexShrink: 0,
    fontFamily: 'DM Sans',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    position: 'relative',
    textAlign: 'left',
    zIndex: 5,
  },
  resultLabelText: {
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
  },
  resultSpace: {
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
  },
  resultValueText: {
    fontFamily: 'Pretendard Variable',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#5d5d62',
    position: 'relative',
    textAlign: 'left',
  },
});
