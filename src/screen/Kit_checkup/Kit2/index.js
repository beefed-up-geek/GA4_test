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
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const Kit_checkupScreen2 = ({navigation, onPress}) => {
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
              zIndex: 26,
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
                zIndex: 27,
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
                          width: 18,
                          height: 12,
                          position: 'relative',
                          zIndex: 32,
                          marginTop: 6,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 3,
                        }}
                        source={require('./assets/images/79befbda-99a9-4324-9823-0114a3704c76.png')}
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
                  zIndex: 33,
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
                  zIndex: 34,
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
                    zIndex: 35,
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
                      zIndex: 36,
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        position: 'relative',
                        zIndex: 37,
                      }}>
                      <ImageBackground
                        style={{
                          width: 20,
                          height: 20,
                          position: 'relative',
                          zIndex: 38,
                          marginTop: 2,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 2,
                        }}
                        source={require('./assets/images/22d48ce1-71e5-408e-a1b1-b81fef2c1597.png')}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 392,
              height: 348,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 39,
              marginTop: 1,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 1,
            }}>
            <View
              style={{
                width: 375,
                height: 334,
                backgroundColor: '#fcffff',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                position: 'absolute',
                top: 14,
                left: 8,
                zIndex: 40,
              }}
            />
            <View
              style={{
                width: 169,
                height: 169,
                position: 'absolute',
                top: 89,
                left: 111,
                overflow: 'hidden',
                zIndex: 41,
              }}>
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 42,
                }}
                source={require('./assets/images/a4f1032a-b581-47df-aa3d-b38e78bd3617.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: '4.6%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Inter',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 16,
                color: '#000000',
                position: 'absolute',
                top: '71.84%',
                left: '39.8%',
                textAlign: 'left',
                zIndex: 43,
              }}
              numberOfLines={1}>
              가이드 영상
            </Text>
          </View>
          <View
            style={{
              width: 394,
              height: 241,
              fontSize: 0,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 44,
              marginTop: 1,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 1,
            }}>
            <Text
              style={{
                height: 24,
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                zIndex: 45,
                marginTop: 38,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 16,
              }}
              numberOfLines={1}>
              검사 키트지에 소변을 묻혀주세요
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 332,
                height: 48,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                overflow: 'hidden',
                zIndex: 47,
                marginTop: 14,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 16,
              }}>
              소변을 가볍게 털고 60초동안 {'\n'} 기다려주세요
            </Text>
            <Text
              style={{
                display: 'flex',
                width: 331,
                height: 72,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'relative',
                textAlign: 'left',
                overflow: 'hidden',
                zIndex: 46,
                marginTop: 14,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 16,
              }}>
              너무 어두운 곳이나 빛이 반사{'\n'} 되는 곳을 피해서 사진을 촬영
              {'\n'} 해주세요
            </Text>
          </View>
          <View
            style={{
              width: 392,
              height: 116,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 20,
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
                zIndex: 21,
                marginTop: 19,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 38,
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
                  zIndex: 22,
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
                    zIndex: 23,
                  }}
                  numberOfLines={1}>
                  뒤로가기
                </Text>
              </View>
              <TouchableOpacity
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
                  zIndex: 24,
                }}
                onPress={() => navigation.navigate('QRcode')}>
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
                    zIndex: 25,
                  }}
                  numberOfLines={1}>
                  다음으로
                </Text>
              </TouchableOpacity>
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
                      marginLeft: 14.738,
                    }}
                    source={require('./assets/images/85d0747d-a2e9-4403-8646-7005cdbc1216.png')}
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
                    source={require('./assets/images/f867ebe7-cb2d-421a-8893-256243412ccf.png')}
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
                    source={require('./assets/images/7e3da1d0-14b8-40ca-bd7e-77798ffb6321.png')}
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
                    source={require('./assets/images/3a9064ad-04a4-47f4-a2ab-598ae5c7cb37.png')}
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
                    source={require('./assets/images/5ecfcd86-550e-4535-aec3-00ed5b78caad.png')}
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
