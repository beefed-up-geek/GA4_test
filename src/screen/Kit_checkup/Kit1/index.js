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

const Kit_checkupScreen1 = ({onPress, navigation}) => {
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
              zIndex: 44,
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
                zIndex: 45,
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
                  zIndex: 46,
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
                    zIndex: 47,
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
                      zIndex: 48,
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        position: 'relative',
                        zIndex: 49,
                      }}>
                      <ImageBackground
                        style={{
                          width: 18,
                          height: 12,
                          position: 'relative',
                          zIndex: 50,
                          marginTop: 6,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 3,
                        }}
                        source={require('./assets/images/f31ca171-05e7-4867-8d06-2f7ec17748ce.png')}
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
                  zIndex: 51,
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
                  zIndex: 52,
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
                    zIndex: 53,
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
                      zIndex: 54,
                    }}>
                    <View
                      style={{
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        position: 'relative',
                        zIndex: 55,
                      }}>
                      <ImageBackground
                        style={{
                          width: 20,
                          height: 20,
                          position: 'relative',
                          zIndex: 56,
                          marginTop: 2,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 2,
                        }}
                        source={require('./assets/images/cdaf8185-156f-4753-8455-46ca4fbb6f7b.png')}
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
              height: 181,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 20,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}>
            <Text
              style={{
                display: 'flex',
                width: 344,
                height: 108,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 41,
                left: 16,
                textAlign: 'left',
                zIndex: 23,
              }}>
              이 검사는 소변검사를 통해 신장기능에 이상이 있는지 확인하는
              테스트입니다. 설명을 잘 읽고 설명에 따라 진행하시길 바랍니다.
            </Text>
            <View
              style={{
                width: 48,
                height: 48,
                position: 'absolute',
                top: 107,
                left: 293,
                overflow: 'hidden',
                zIndex: 21,
              }}>
              <ImageBackground
                style={{
                  width: 44,
                  height: 38,
                  position: 'relative',
                  zIndex: 22,
                  marginTop: 5,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 2,
                }}
                source={require('./assets/images/840c5001-8f0a-42d8-b7af-96f48f149fdc.png')}
              />
            </View>
          </View>
          <View
            style={{
              width: 395,
              height: 410,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 24,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 0,
            }}>
            <View
              style={{
                width: 367,
                height: 338,
                backgroundColor: '#fcfeff',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                position: 'absolute',
                top: 5,
                left: 14,
                zIndex: 25,
              }}
            />
            <ImageBackground
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                top: '5.12%',
                left: '7.32%',
                zIndex: 30,
              }}
              source={require('./assets/images/ec9f7038-efa3-4627-9f64-b5453e47d2cf.png')}
            />
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 34,
                left: 94,
                textAlign: 'left',
                zIndex: 33,
              }}
              numberOfLines={1}>
              비타민C 섭취 주의
            </Text>
            <ImageBackground
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                top: '20%',
                left: '6.08%',
                zIndex: 31,
              }}
              source={require('./assets/images/8ef3dd7a-d7ce-4d7b-9132-22ff982880ab.png')}
            />
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 97,
                left: 95,
                textAlign: 'left',
                zIndex: 34,
              }}
              numberOfLines={1}>
              과도한 물 섭취 주의
            </Text>
            <ImageBackground
              style={{
                width: 50,
                height: 50,
                position: 'absolute',
                top: '36.1%',
                left: '4.3%',
                zIndex: 32,
              }}
              source={require('./assets/images/bdd77e60-597e-421f-8349-a001d8730924.png')}
            />
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 160,
                left: 94,
                textAlign: 'left',
                zIndex: 35,
              }}
              numberOfLines={1}>
              생리기간 피하기
            </Text>
            <View
              style={{
                width: 62,
                height: 62,
                position: 'absolute',
                top: 205,
                left: 15,
                overflow: 'hidden',
                zIndex: 26,
              }}>
              <ImageBackground
                style={{
                  width: 58.125,
                  height: 58.125,
                  position: 'relative',
                  zIndex: 27,
                  marginTop: 1.938,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 1.938,
                }}
                source={require('./assets/images/58da1092-f195-486a-a6d2-b0d7acad80bf.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 224,
                left: 94,
                textAlign: 'left',
                zIndex: 36,
              }}
              numberOfLines={1}>
              아침 첫 소변 권장
            </Text>
            <View
              style={{
                width: 57,
                height: 57,
                position: 'absolute',
                top: 278,
                left: 17,
                overflow: 'hidden',
                zIndex: 28,
              }}>
              <ImageBackground
                style={{
                  width: 28.5,
                  height: 47.5,
                  position: 'relative',
                  zIndex: 29,
                  marginTop: 4.75,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 14.25,
                }}
                source={require('./assets/images/377a81c4-7a21-48c0-a86b-721938307c74.png')}
              />
            </View>
            <Text
              style={{
                display: 'flex',
                height: 24,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                fontFamily: 'Gowun Batang',
                fontSize: 24,
                fontWeight: '400',
                lineHeight: 24,
                color: '#000000',
                position: 'absolute',
                top: 292,
                left: 94,
                textAlign: 'left',
                zIndex: 37,
              }}
              numberOfLines={1}>
              60분 이내에 촬영하기
            </Text>
          </View>
          <View
            style={{
              width: 392,
              height: 116,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 38,
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
                zIndex: 39,
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
                  zIndex: 40,
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
                    zIndex: 41,
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
                  zIndex: 42,
                }}
                onPress={() => navigation.navigate('Kit_checkup2')}>
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
                    zIndex: 43,
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
                    source={require('./assets/images/4d6b5734-d8b9-4eb0-8109-66371e369eb3.png')}
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
                      marginLeft: 14.738,
                    }}
                    source={require('./assets/images/e48227a8-f63b-44cf-bbe5-5765034b9af8.png')}
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
                    source={require('./assets/images/e173bf30-831d-4414-b4a5-82de7654a260.png')}
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
                    source={require('./assets/images/1e886a57-982b-46dd-bc2f-3bce28a035b7.png')}
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
                    source={require('./assets/images/e646f206-1217-4b96-b1d8-de809306314c.png')}
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

export default Kit_checkupScreen1;
