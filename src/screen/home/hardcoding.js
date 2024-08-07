import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}>
          <View
            style={{
              display: 'flex',
              width: 333,
              height: 382,
              alignItems: 'center',
              flexWrap: 'nowrap',
              position: 'relative',
              marginTop: 46,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 29,
            }}>
            <View
              style={{
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
                zIndex: 1,
              }}>
              <Text
                style={{
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
                  zIndex: 2,
                }}
                numberOfLines={1}>
                내 프로필
              </Text>
              <View
                style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 3,
                }}>
                <View
                  style={{
                    width: 14,
                    height: 19,
                    position: 'relative',
                    zIndex: 4,
                    marginTop: 2,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 5,
                  }}>
                  <ImageBackground
                    style={{
                      width: '114.29%',
                      height: '110.53%',
                      position: 'absolute',
                      top: '-5.26%',
                      left: '-7.14%',
                      zIndex: 5,
                    }}
                    source={require('../../../assets/images/5907e107-e116-4905-ad2e-014543497774.png')}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 93,
                alignItems: 'center',
                alignSelf: 'stretch',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 44,
              }}>
              <Text
                style={{
                  display: 'flex',
                  width: 130,
                  height: 67,
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
                }}>
                안녕하세요, 홍길동님!
              </Text>
              <ImageBackground
                style={{
                  width: 124,
                  height: 136,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 8,
                }}
                source={require('../../../assets/images/c639f0b24ead9f980841b9fe3365897ca9db9dc5.png')}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
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
                zIndex: 9,
              }}
            />
            <View
              style={{
                height: 179,
                alignSelf: 'stretch',
                flexShrink: 0,
                backgroundColor: '#ebeffe',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomRightRadius: 24,
                borderBottomLeftRadius: 24,
                position: 'relative',
                zIndex: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  width: 165,
                  flexDirection: 'row',
                  gap: 8,
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 23,
                  marginTop: 24,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 20,
                }}>
                <View
                  style={{
                    width: 24,
                    height: 24,
                    flexShrink: 0,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 24,
                  }}>
                  <ImageBackground
                    style={{
                      width: 21,
                      height: 21,
                      position: 'relative',
                      zIndex: 25,
                      marginTop: 1.5,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 1.5,
                    }}
                    source={require('../../../assets/images/144896d3-699f-48ad-8876-0d940bc6a7bc.png')}
                  />
                </View>
                <Text
                  style={{
                    display: 'flex',
                    width: 190,
                    height: 19,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Pretendard Variable',
                    fontSize: 16,
                    fontWeight: '600',
                    lineHeight: 19,
                    color: '#4d495a',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 26,
                    marginLeft: -24,
                  }}
                  numberOfLines={1}>
                  최근 검사 : 7월 16일
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 267,
                  gap: 4,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 20,
                  marginTop: 14,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 27,
                }}>
                <Text
                  style={{
                    width: 200,
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    fontFamily: 'Noto Sans',
                    fontSize: 14,
                    fontWeight: '500',
                    lineHeight: 17,
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 21,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Pretendard Variable',
                      fontSize: 13,
                      fontWeight: '500',
                      lineHeight: 19.068,
                      color: '#5d5d62',
                      position: 'relative',
                      textAlign: 'left',
                    }}>
                    마지막 검사가&nbsp;
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Pretendard Variable',
                      fontSize: 13,
                      fontWeight: '700',
                      lineHeight: 19.068,
                      color: '#7595ff',
                      position: 'relative',
                      textAlign: 'left',
                    }}>
                    14일 전
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Pretendard Variable',
                      fontSize: 13,
                      fontWeight: '500',
                      lineHeight: 19.068,
                      color: '#5d5d62',
                      position: 'relative',
                      textAlign: 'left',
                    }}>
                    이에요.&nbsp;
                  </Text>
                </Text>
                <Text
                  style={{
                    width: 400,
                    height: 17,
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Pretendard Variable',
                    fontSize: 13,
                    fontWeight: '500',
                    lineHeight: 16.707,
                    color: '#5d5d62',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 22,
                  }}
                  numberOfLines={1}>
                  지금 검사하고 꾸준히 콩팥 건강을 관리해 보세요.
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: 284,
                  flexDirection: 'row',
                  gap: 8,
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 11,
                  marginTop: 18,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 24.5,
                }}>
                <View
                  style={{
                    display: 'flex',
                    width: 138,
                    height: 43,
                    paddingTop: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 12,
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    backgroundColor: '#ffffff',
                    borderTopLeftRadius: 48,
                    borderTopRightRadius: 48,
                    borderBottomRightRadius: 48,
                    borderBottomLeftRadius: 48,
                    position: 'relative',
                    zIndex: 12,
                  }}>
                  <View
                    style={{
                      width: 111,
                      height: 18,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 13,
                    }}>
                    <ImageBackground
                      style={{
                        width: 18,
                        height: 18,
                        position: 'absolute',
                        top: 0,
                        left: 93,
                        overflow: 'hidden',
                        zIndex: 15,
                      }}
                      source={require('../../../assets/images/28fea753-8155-4b2a-b5cb-6ae1483a3269.png')}
                      resizeMode="cover"
                    />
                    <Text
                      style={{
                        display: 'flex',
                        width: 100,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'DM Sans',
                        fontSize: 14,
                        fontWeight: '700',
                        lineHeight: 16,
                        color: '#7595ff',
                        letterSpacing: 0.56,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        zIndex: 14,
                      }}
                      numberOfLines={1}>
                      키트 구매하기
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 138,
                    height: 43,
                    paddingTop: 8,
                    paddingRight: 8,
                    paddingBottom: 8,
                    paddingLeft: 12,
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    backgroundColor: '#ffffff',
                    borderTopLeftRadius: 48,
                    borderTopRightRadius: 48,
                    borderBottomRightRadius: 48,
                    borderBottomLeftRadius: 48,
                    position: 'relative',
                    zIndex: 16,
                  }}>
                  <View
                    style={{
                      width: 111,
                      height: 18,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 17,
                    }}>
                    <ImageBackground
                      style={{
                        width: 18,
                        height: 18,
                        position: 'absolute',
                        top: 0,
                        left: 93,
                        overflow: 'hidden',
                        zIndex: 19,
                      }}
                      source={require('../../../assets/images/3d1d1d39-75c9-4cb8-9aa3-5a495f0be1a0.png')}
                      resizeMode="cover"
                    />
                    <Text
                      style={{
                        display: 'flex',
                        width: 100,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontFamily: 'DM Sans',
                        fontSize: 14,
                        fontWeight: '700',
                        lineHeight: 16,
                        color: '#7595ff',
                        letterSpacing: 0.56,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        zIndex: 18,
                      }}
                      numberOfLines={1}>
                      검사하러 가기&nbsp;
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                width: 333,
                height: 46,
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 27,
              }}
            />
            <View
              style={{
                display: 'flex',
                width: 332,
                height: 303,
                paddingTop: 44,
                paddingRight: 18,
                paddingBottom: 0,
                paddingLeft: 18,
                gap: 12,
                alignItems: 'center',
                flexShrink: 0,
                flexWrap: 'nowrap',
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomRightRadius: 24,
                borderBottomLeftRadius: 24,
                position: 'relative',
                zIndex: 28,
              }}>
              <View
                style={{
                  width: 271.534,
                  height: 268.068,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 29,
                }}>
                <View
                  style={{
                    width: 268.068,
                    height: 268.068,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 30,
                  }}>
                  <ImageBackground
                    style={{
                      width: 268.068,
                      height: 268.068,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 31,
                    }}
                    source={require('../../../assets/images/22649bce-82f4-420b-8c6c-646225dba2de.png')}
                    resizeMode="cover"
                  />
                  <ImageBackground
                    style={{
                      width: 268.068,
                      height: 268.068,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 32,
                    }}
                    source={require('../../../assets/images/4d357b07-c091-41ef-8881-3974e6fb8e12.png')}
                    resizeMode="cover"
                  />
                  <ImageBackground
                    style={{
                      width: 268.068,
                      height: 268.068,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 33,
                    }}
                    source={require('../../../assets/images/eb96029d-56c5-4f7f-b2f5-508a78cd2eb8.png')}
                    resizeMode="cover"
                  />
                  <ImageBackground
                    style={{
                      width: 268.068,
                      height: 268.068,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 34,
                    }}
                    source={require('../../../assets/images/58f283df-7b68-4beb-81ff-e9209894919b.png')}
                    resizeMode="cover"
                  />
                  <Text
                    style={{
                      display: 'flex',
                      height: 17,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Pretendard Variable',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 16.707,
                      color: '#908fa0',
                      position: 'absolute',
                      top: 28,
                      left: 80.034,
                      textAlign: 'left',
                      zIndex: 36,
                    }}
                    numberOfLines={1}>
                    주의
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 17,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Pretendard Variable',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 16.707,
                      color: '#908fa0',
                      position: 'absolute',
                      top: 28,
                      left: 163.034,
                      textAlign: 'left',
                      zIndex: 38,
                    }}
                    numberOfLines={1}>
                    위험
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      width: 40,
                      height: 50,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Pretendard Variable',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 16.707,
                      color: '#908fa0',
                      position: 'absolute',
                      top: 82,
                      left: 224.034,
                      textAlign: 'left',
                      zIndex: 37,
                    }}>
                    매우위험
                  </Text>
                  <Text
                    style={{
                      display: 'flex',
                      height: 17,
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      fontFamily: 'Pretendard Variable',
                      fontSize: 14,
                      fontWeight: '600',
                      lineHeight: 16.707,
                      color: '#545459',
                      position: 'absolute',
                      top: 88,
                      left: 19.034,
                      textAlign: 'left',
                      zIndex: 35,
                    }}
                    numberOfLines={1}>
                    안전
                  </Text>
                  <ImageBackground
                    style={{
                      width: 122.294,
                      height: 38.148,
                      position: 'absolute',
                      top: 95.926,
                      left: 44.387,
                      zIndex: 39,
                    }}
                    source={require('../../../assets/images/cb3eedfa-5996-443e-8080-b2aac072da71.png')}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 267,
                    height: 38,
                    gap: 4,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexWrap: 'nowrap',
                    position: 'absolute',
                    top: 168.068,
                    left: 4.534,
                    zIndex: 40,
                  }}>
                  <Text
                    style={{
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      fontFamily: 'Noto Sans',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 17,
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 41,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Pretendard Variable',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 19.068,
                        color: '#5d5d62',
                        position: 'relative',
                        textAlign: 'left',
                      }}>
                      홍길동님의 콩팥 건강은&nbsp;
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Pretendard Variable',
                        fontSize: 14,
                        fontWeight: '700',
                        lineHeight: 19.068,
                        color: '#7595ff',
                        position: 'relative',
                        textAlign: 'left',
                      }}>
                      안전&nbsp;
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Pretendard Variable',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 19.068,
                        color: '#5d5d62',
                        position: 'relative',
                        textAlign: 'left',
                      }}>
                      단계예요.&nbsp;
                    </Text>
                  </Text>
                  <Text
                    style={{
                      width: 300,
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
                      zIndex: 42,
                    }}
                    numberOfLines={1}>
                    자가진단키트로 검사하고 홍길동님의 콩팥 기능
                  </Text>
                  <Text
                    style={{
                      width: 300,
                      height: 25,
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
                      zIndex: 42,
                    }}
                    numberOfLines={1}>
                    단계를 알아보세요.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            style={{
              width: 148,
              height: 5,
              position: 'relative',
              zIndex: 44,
              marginTop: 416,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 121,
            }}
            source={require('../../../assets/images/68d0722a-16e1-4d21-b41a-e72bbe4be945.png')}
            resizeMode="cover"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
