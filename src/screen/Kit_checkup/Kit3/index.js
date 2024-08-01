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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Kit_checkupScreen3 = ({onPress, navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            width: 393,
            height: 852,
            backgroundColor: '#e3ebff',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}>
          <View
            style={{
              width: 392,
              height: 54,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 20,
              marginTop: 3,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 1,
            }}>
            <View
              style={{
                display: 'flex',
                width: 392,
                height: 54,
                paddingTop: 8,
                paddingRight: 4,
                paddingBottom: 8,
                paddingLeft: 4,
                flexDirection: 'row',
                gap: 6,
                alignItems: 'center',
                flexWrap: 'nowrap',
                backgroundColor: '#fef7ff',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 21,
              }}>
              <View
                style={{
                  display: 'flex',
                  width: 48,
                  height: 48,
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 22,
                }}>
                <View
                  style={{
                    display: 'flex',
                    width: 40,
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 23,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      width: 40,
                      paddingTop: 8,
                      paddingRight: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      flexDirection: 'row',
                      gap: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 24,
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        position: 'relative',
                        zIndex: 25,
                      }}>
                      <ImageBackground
                        style={{
                          width: 18,
                          height: 12,
                          position: 'relative',
                          zIndex: 26,
                          marginTop: 6,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 3,
                        }}
                        source={require('./assets/images/d916fa47-65ad-48c6-bc74-aa35cbe48720.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  height: 28,
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: 'auto',
                  fontFamily: 'Roboto',
                  fontSize: 22,
                  fontWeight: '400',
                  lineHeight: 28,
                  color: '#1d1b20',
                  position: 'relative',
                  textAlign: 'center',
                  zIndex: 27,
                }}
                numberOfLines={1}>
                Title
              </Text>
              <View
                style={{
                  display: 'flex',
                  width: 48,
                  height: 48,
                  gap: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 28,
                }}>
                <View
                  style={{
                    display: 'flex',
                    width: 40,
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    borderBottomRightRadius: 100,
                    borderBottomLeftRadius: 100,
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 29,
                  }}>
                  <View
                    style={{
                      display: 'flex',
                      width: 40,
                      paddingTop: 8,
                      paddingRight: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      flexDirection: 'row',
                      gap: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 30,
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        position: 'relative',
                        zIndex: 31,
                      }}>
                      <ImageBackground
                        style={{
                          width: 20,
                          height: 20,
                          position: 'relative',
                          zIndex: 32,
                          marginTop: 2,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 2,
                        }}
                        source={require('./assets/images/ea9e3d67-d01d-46b0-aa83-0151b4caff13.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 393,
              height: 96,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 33,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}>
            <Text
              style={{
                display: 'flex',
                height: 36,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 36,
                fontWeight: '400',
                lineHeight: 36,
                color: '#000000',
                position: 'absolute',
                top: 30,
                left: 124,
                textAlign: 'left',
                zIndex: 34,
              }}
              numberOfLines={1}>
              검사 결과
            </Text>
          </View>
          <View
            style={{
              width: 394,
              height: 503,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 35,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}>
            <View
              style={{
                width: 375,
                height: 444,
                backgroundColor: '#fcffff',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                position: 'absolute',
                top: 30,
                left: 9,
                zIndex: 36,
              }}
            />
            <ImageBackground
              style={{
                width: 48,
                height: 48,
                position: 'absolute',
                top: 39,
                left: 317,
                overflow: 'hidden',
                zIndex: 60,
              }}
              source={require('./assets/images/8d48bec2-51a3-4d7a-9a70-751d31a7b225.png')}
              resizeMode="cover"
            />
            <Text
              style={{
                display: 'flex',
                height: 28,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 53,
                left: 38,
                textAlign: 'left',
                zIndex: 37,
              }}
              numberOfLines={1}>
              eGFR
            </Text>
            <View
              style={{
                width: 24,
                height: 27,
                position: 'absolute',
                top: 53,
                left: 14,
                overflow: 'hidden',
                zIndex: 43,
              }}>
              <View
                style={{
                  width: 24,
                  height: 24,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 44,
                }}>
                <ImageBackground
                  style={{
                    width: 4,
                    height: 4,
                    position: 'relative',
                    zIndex: 45,
                    marginTop: 10,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 10,
                  }}
                  source={require('./assets/images/3d992b8d-4425-4bd6-825d-6c5d01fbae9c.png')}
                />
              </View>
              <View
                style={{
                  width: 24,
                  height: 24,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  overflow: 'hidden',
                  zIndex: 46,
                }}>
                <ImageBackground
                  style={{
                    width: 4,
                    height: 4,
                    position: 'relative',
                    zIndex: 47,
                    marginTop: 10,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 10,
                  }}
                  source={require('./assets/images/c00176a6-e330-474d-8eb2-d26999d4e8f9.png')}
                />
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    overflow: 'hidden',
                    zIndex: 48,
                  }}>
                  <ImageBackground
                    style={{
                      width: 4,
                      height: 4,
                      position: 'relative',
                      zIndex: 49,
                      marginTop: 10,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 10,
                    }}
                    source={require('./assets/images/bc4f9599-cffa-4ecd-a422-027c35d79e27.png')}
                  />
                </View>
              </View>
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 55,
                left: 252,
                textAlign: 'left',
                zIndex: 78,
              }}
              numberOfLines={1}>
              좋음
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 55,
                left: 184,
                textAlign: 'left',
                zIndex: 84,
              }}
              numberOfLines={1}>
              150
            </Text>
            <ImageBackground
              style={{
                width: 48,
                height: 48,
                position: 'absolute',
                top: 116,
                left: 318,
                overflow: 'hidden',
                zIndex: 61,
              }}
              source={require('./assets/images/0597d503-d308-4365-8fce-dc842093ec8f.png')}
              resizeMode="cover"
            />
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 128,
                left: 38,
                textAlign: 'left',
                zIndex: 38,
              }}
              numberOfLines={1}>
              신장단계
            </Text>
            <View
              style={{
                width: '6.09%',
                height: '5.37%',
                position: 'absolute',
                top: '25.45%',
                left: '3.55%',
                overflow: 'hidden',
                zIndex: 50,
              }}>
              <ImageBackground
                style={{
                  width: 4,
                  height: 4.5,
                  position: 'relative',
                  zIndex: 51,
                  marginTop: 11.25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 10,
                }}
                source={require('./assets/images/3d721816-d2c9-4612-a6a8-777a44dae2b4.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 128,
                left: 176,
                textAlign: 'left',
                zIndex: 85,
              }}
              numberOfLines={1}>
              1단계
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 130,
                left: 252,
                textAlign: 'left',
                zIndex: 79,
              }}
              numberOfLines={1}>
              좋음
            </Text>
            <ImageBackground
              style={{
                width: 48,
                height: 48,
                position: 'absolute',
                top: 192,
                left: 319,
                overflow: 'hidden',
                zIndex: 62,
              }}
              source={require('./assets/images/ae528d6b-a400-4a43-84c2-1213553e29a8.png')}
              resizeMode="cover"
            />
            <Text
              style={{
                display: 'flex',
                height: 29,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 203,
                left: 38,
                textAlign: 'left',
                zIndex: 39,
              }}
              numberOfLines={1}>
              포도당
            </Text>
            <View
              style={{
                width: '6.09%',
                height: '5.37%',
                position: 'absolute',
                top: '40.36%',
                left: '3.55%',
                overflow: 'hidden',
                zIndex: 52,
              }}>
              <ImageBackground
                style={{
                  width: 4,
                  height: 4.5,
                  position: 'relative',
                  zIndex: 53,
                  marginTop: 11.25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 10,
                }}
                source={require('./assets/images/24a546d9-6bc2-4980-894c-92707dc64e46.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 204,
                left: 252,
                textAlign: 'left',
                zIndex: 80,
              }}
              numberOfLines={1}>
              좋음
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 204,
                left: 165,
                textAlign: 'left',
                zIndex: 86,
              }}
              numberOfLines={1}>
              음성(-)
            </Text>
            <View
              style={{
                width: 49,
                height: 49,
                position: 'absolute',
                top: 265,
                left: 320,
                overflow: 'hidden',
                zIndex: 63,
              }}>
              <ImageBackground
                style={{
                  width: '93.75%',
                  height: '93.75%',
                  position: 'absolute',
                  top: '3.13%',
                  left: '3.13%',
                  zIndex: 64,
                }}
                source={require('./assets/images/62c5381a-5398-47e5-bef0-a88491184201.png')}
              />
              <View
                style={{
                  width: '51.56%',
                  height: '15.63%',
                  position: 'absolute',
                  top: '36.72%',
                  left: '24.22%',
                  zIndex: 65,
                }}>
                <ImageBackground
                  style={{
                    width: '30.3%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 66,
                  }}
                  source={require('./assets/images/9c0a26e7-dee3-4629-8217-110801fd2bc9.png')}
                />
                <ImageBackground
                  style={{
                    width: '30.3%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '69.7%',
                    zIndex: 67,
                  }}
                  source={require('./assets/images/3604835c-06cb-4c04-9402-09756dc23578.png')}
                />
              </View>
            </View>
            <Text
              style={{
                display: 'flex',
                height: 28,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 278,
                left: 38,
                textAlign: 'left',
                zIndex: 40,
              }}
              numberOfLines={1}>
              pH
            </Text>
            <View
              style={{
                width: '6.09%',
                height: '5.37%',
                position: 'absolute',
                top: '55.47%',
                left: '3.55%',
                overflow: 'hidden',
                zIndex: 54,
              }}>
              <ImageBackground
                style={{
                  width: 4,
                  height: 4.5,
                  position: 'relative',
                  zIndex: 55,
                  marginTop: 11.25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 10,
                }}
                source={require('./assets/images/3005d2e7-f49e-46c4-bbed-9655c286e5e3.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 281,
                left: 252,
                textAlign: 'left',
                zIndex: 81,
              }}
              numberOfLines={1}>
              보통
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 281,
                left: 191,
                textAlign: 'left',
                zIndex: 87,
              }}
              numberOfLines={1}>
              7.6
            </Text>
            <View
              style={{
                width: 49,
                height: 49,
                position: 'absolute',
                top: 339,
                left: 319,
                overflow: 'hidden',
                zIndex: 68,
              }}>
              <ImageBackground
                style={{
                  width: '93.75%',
                  height: '93.75%',
                  position: 'absolute',
                  top: '3.13%',
                  left: '3.13%',
                  zIndex: 69,
                }}
                source={require('./assets/images/d4ecfef6-d733-426d-acbd-13ac7ee6c141.png')}
              />
              <ImageBackground
                style={{
                  width: '19.84%',
                  height: '32.11%',
                  position: 'absolute',
                  top: '7.81%',
                  left: '77.03%',
                  zIndex: 76,
                }}
                source={require('./assets/images/eb25185d-0f10-46b6-9615-ef7b6d5b67f6.png')}
              />
              <ImageBackground
                style={{
                  width: '58.88%',
                  height: '8.96%',
                  position: 'absolute',
                  top: '27.71%',
                  left: '20.56%',
                  zIndex: 75,
                }}
                source={require('./assets/images/33e9863d-950f-4a16-a7a0-00c3b8c8f8d0.png')}
              />
              <View
                style={{
                  width: '50%',
                  height: '14.06%',
                  position: 'absolute',
                  top: '44.53%',
                  left: '25%',
                  zIndex: 72,
                }}>
                <ImageBackground
                  style={{
                    width: '28.13%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: '71.88%',
                    zIndex: 73,
                  }}
                  source={require('./assets/images/52cd8f4c-2b43-4a39-acaa-023e55ab2b2f.png')}
                />
                <ImageBackground
                  style={{
                    width: '28.13%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 74,
                  }}
                  source={require('./assets/images/9cecb756-d3e4-4fa9-91f7-75ccd140e3d6.png')}
                />
              </View>
              <ImageBackground
                style={{
                  width: '25.94%',
                  height: '25.94%',
                  position: 'absolute',
                  top: '62.19%',
                  left: '37.03%',
                  zIndex: 70,
                }}
                source={require('./assets/images/db1a1ca4-35a0-4a53-9fcb-6d82756878c6.png')}
              />
              <ImageBackground
                style={{
                  width: '18.12%',
                  height: '5.31%',
                  position: 'absolute',
                  top: '64.69%',
                  left: '40.94%',
                  zIndex: 71,
                }}
                source={require('./assets/images/91893f1e-8a43-42d3-815e-68c11094bbce.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 27,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 353,
                left: 38,
                textAlign: 'left',
                overflow: 'hidden',
                zIndex: 41,
              }}
              numberOfLines={1}>
              잠혈{'\n'}
            </Text>
            <View
              style={{
                width: '6.09%',
                height: '5.37%',
                position: 'absolute',
                top: '70.18%',
                left: '3.55%',
                overflow: 'hidden',
                zIndex: 56,
              }}>
              <ImageBackground
                style={{
                  width: 4,
                  height: 4.5,
                  position: 'relative',
                  zIndex: 57,
                  marginTop: 11.25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 10,
                }}
                source={require('./assets/images/d11fcb70-b391-4690-89a5-23a0f47f7a74.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 353,
                left: 252,
                textAlign: 'left',
                zIndex: 82,
              }}
              numberOfLines={1}>
              주의
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 355,
                left: 142,
                textAlign: 'left',
                zIndex: 88,
              }}
              numberOfLines={1}>
              양성(++)
            </Text>
            <ImageBackground
              style={{
                width: 49,
                height: 49,
                position: 'absolute',
                top: 411,
                left: 319,
                overflow: 'hidden',
                zIndex: 77,
              }}
              source={require('./assets/images/eed3ae9d-bfb1-44cb-8978-f3b1c2e436af.png')}
              resizeMode="cover"
            />
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 424,
                left: 252,
                textAlign: 'left',
                zIndex: 83,
              }}
              numberOfLines={1}>
              위험
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 28,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 427,
                left: 38,
                textAlign: 'left',
                overflow: 'hidden',
                zIndex: 42,
              }}
              numberOfLines={1}>
              단백질{'\n'}
            </Text>
            <View
              style={{
                width: '6.09%',
                height: '5.37%',
                position: 'absolute',
                top: '85.09%',
                left: '3.55%',
                overflow: 'hidden',
                zIndex: 58,
              }}>
              <ImageBackground
                style={{
                  width: 4,
                  height: 4.5,
                  position: 'relative',
                  zIndex: 59,
                  marginTop: 11.25,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 10,
                }}
                source={require('./assets/images/fc350ce3-9371-48e7-a5e2-751f8f41221d.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'NanumGothic',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 429,
                left: 129,
                textAlign: 'left',
                zIndex: 89,
              }}
              numberOfLines={1}>
              양성(+++)
            </Text>
          </View>
          <View
            style={{
              width: 394,
              height: 108,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 90,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 1,
            }}>
            <View
              style={{
                display: 'flex',
                width: 316,
                height: 78,
                flexDirection: 'row',
                gap: 16,
                alignItems: 'center',
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 91,
                marginTop: 15,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 39,
              }}>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 12,
                  paddingRight: 12,
                  paddingBottom: 12,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(120, 158, 255, 0.5)',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 92,
                }}>
                <Text
                  style={{
                    height: 16,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 16,
                    color: '#303030',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 93,
                  }}
                  numberOfLines={1}>
                  뒤로가기
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  paddingTop: 12,
                  paddingRight: 12,
                  paddingBottom: 12,
                  paddingLeft: 12,
                  flexDirection: 'row',
                  gap: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '0',
                  flexWrap: 'nowrap',
                  backgroundColor: 'rgba(120, 158, 255, 0.5)',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 94,
                }}>
                <Text
                  style={{
                    height: 16,
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Inter',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 16,
                    color: '#000000',
                    position: 'relative',
                    textAlign: 'left',
                    zIndex: 95,
                  }}
                  numberOfLines={1}>
                  다음으로
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 392,
              height: 88,
              position: 'relative',
              overflow: 'hidden',
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 1,
            }}>
            <View
              style={{
                width: 392,
                height: 88,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }}>
              <View
                style={{
                  display: 'flex',
                  width: 393,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 4,
                  marginTop: 7,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}>
                <View
                  style={{
                    height: 40,
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    position: 'relative',
                    zIndex: 5,
                  }}>
                  <ImageBackground
                    style={{
                      width: 49.125,
                      height: 21,
                      fontFamily: 'SF Pro',
                      fontSize: 18,
                      fontWeight: '510',
                      lineHeight: 21,
                      position: 'relative',
                      zIndex: 7,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 14.737,
                    }}
                    source={require('./assets/images/2831e8f4-a66a-4c7f-bebe-b4e2f450d60a.png')}
                  />
                  <Text
                    style={{
                      display: 'flex',
                      width: 80.237,
                      height: 12,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'SF Pro',
                      fontSize: 10,
                      fontWeight: '510',
                      lineHeight: 11.934,
                      color: '#007aff',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 6,
                      marginTop: 6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: -0.82,
                    }}
                    numberOfLines={1}>
                    Tab Name
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    position: 'relative',
                    zIndex: 8,
                  }}>
                  <ImageBackground
                    style={{
                      width: 49.125,
                      height: 21,
                      fontFamily: 'SF Pro',
                      fontSize: 18,
                      fontWeight: '510',
                      lineHeight: 21,
                      position: 'relative',
                      zIndex: 10,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 14.737,
                    }}
                    source={require('./assets/images/61c87748-1457-43af-9982-e767cbf0a22f.png')}
                  />
                  <Text
                    style={{
                      display: 'flex',
                      width: 80.237,
                      height: 12,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'SF Pro',
                      fontSize: 10,
                      fontWeight: '510',
                      lineHeight: 11.934,
                      color: '#999999',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 9,
                      marginTop: 6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: -0.82,
                    }}
                    numberOfLines={1}>
                    Tab Name
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    position: 'relative',
                    zIndex: 11,
                  }}>
                  <ImageBackground
                    style={{
                      width: 49.125,
                      height: 21,
                      fontFamily: 'SF Pro',
                      fontSize: 18,
                      fontWeight: '510',
                      lineHeight: 21,
                      position: 'relative',
                      zIndex: 13,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 14.737,
                    }}
                    source={require('./assets/images/6b730047-ce29-43b2-ad12-8f907c341745.png')}
                  />
                  <Text
                    style={{
                      display: 'flex',
                      width: 80.237,
                      height: 12,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'SF Pro',
                      fontSize: 10,
                      fontWeight: '510',
                      lineHeight: 11.934,
                      color: '#999999',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 12,
                      marginTop: 6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: -0.82,
                    }}
                    numberOfLines={1}>
                    Tab Name
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    position: 'relative',
                    zIndex: 14,
                  }}>
                  <ImageBackground
                    style={{
                      width: 49.125,
                      height: 21,
                      fontFamily: 'SF Pro',
                      fontSize: 18,
                      fontWeight: '510',
                      lineHeight: 21,
                      position: 'relative',
                      zIndex: 16,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 14.737,
                    }}
                    source={require('./assets/images/ced9ef65-63a1-45ef-bd32-a304273f8847.png')}
                  />
                  <Text
                    style={{
                      display: 'flex',
                      width: 80.237,
                      height: 12,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'SF Pro',
                      fontSize: 10,
                      fontWeight: '510',
                      lineHeight: 11.934,
                      color: '#999999',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 15,
                      marginTop: 6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: -0.82,
                    }}
                    numberOfLines={1}>
                    Tab Name
                  </Text>
                </View>
                <View
                  style={{
                    height: 40,
                    flexGrow: 1,
                    flexShrink: 0,
                    flexBasis: '0',
                    position: 'relative',
                    zIndex: 17,
                  }}>
                  <ImageBackground
                    style={{
                      width: 49.125,
                      height: 21,
                      fontFamily: 'SF Pro',
                      fontSize: 18,
                      fontWeight: '510',
                      lineHeight: 21,
                      position: 'relative',
                      zIndex: 19,
                      marginTop: 1,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: 14.737,
                    }}
                    source={require('./assets/images/9e2bbe68-7b6c-47fa-b19f-6816d4759002.png')}
                  />
                  <Text
                    style={{
                      display: 'flex',
                      width: 80.237,
                      height: 12,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      fontFamily: 'SF Pro',
                      fontSize: 10,
                      fontWeight: '510',
                      lineHeight: 11.934,
                      color: '#999999',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 18,
                      marginTop: 6,
                      marginRight: 0,
                      marginBottom: 0,
                      marginLeft: -0.82,
                    }}
                    numberOfLines={1}>
                    Tab Name
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 0.33,
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'rgba(0,',
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  overflow: 'hidden',
                  zIndex: 2,
                }}>
                <View
                  style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    paddingTop: 0,
                    paddingRight: 0,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    backgroundColor: 'rgba(255, 255, 255, 0.75)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 3,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
